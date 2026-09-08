import { AstrologyCalculationResult, BirthDetails, ZodiacSignKey } from '../types';

const ZODIAC_SIGNS: ZodiacSignKey[] = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function toDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

function normalize360(angle: number): number {
  let a = angle % 360;
  if (a < 0) a += 360;
  return a;
}

/**
 * Calculates Julian Day number from Year, Month, Day, and decimal Universal Time (UT)
 */
function getJulianDay(year: number, month: number, day: number, utHours: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const jd =
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day +
    B -
    1524.5 +
    utHours / 24;
  return jd;
}

/**
 * Calculates Tropical Sun ecliptic longitude with Meeus astronomical precision
 */
function calculateSunLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0;
  // Mean longitude
  const L0 = normalize360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  // Mean anomaly
  const M = normalize360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const Mrad = toRad(M);

  // Equation of center
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Mrad) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * Mrad) +
    0.000289 * Math.sin(3 * Mrad);

  // True longitude
  const trueLon = L0 + C;

  // Apparent longitude with nutation and aberration correction
  const omega = toRad(125.04 - 1934.136 * T);
  const lambda = trueLon - 0.00569 - 0.00478 * Math.sin(omega);

  return normalize360(lambda);
}

/**
 * Calculates Tropical Moon ecliptic longitude using truncated Meeus lunar series
 */
function calculateMoonLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0;

  // Moon mean longitude
  const Lp = normalize360(218.3164477 + 481267.88125421 * T);
  // Mean elongation
  const D = normalize360(297.8501921 + 445267.1114034 * T);
  // Sun mean anomaly
  const M = normalize360(357.5291092 + 35999.0502909 * T);
  // Moon mean anomaly
  const Mp = normalize360(134.9633964 + 477198.8675055 * T);
  // Argument of latitude
  const F = normalize360(93.272095 + 483202.0175233 * T);

  const Drad = toRad(D);
  const Mrad = toRad(M);
  const Mprad = toRad(Mp);
  const Frad = toRad(F);

  // Periodic perturbation terms in degrees
  let sumL = 0;
  sumL += 6.288774 * Math.sin(Mprad);
  sumL += 1.274027 * Math.sin(2 * Drad - Mprad);
  sumL += 0.658314 * Math.sin(2 * Drad);
  sumL += 0.213618 * Math.sin(2 * Mprad);
  sumL -= 0.185116 * Math.sin(Mrad);
  sumL -= 0.114332 * Math.sin(2 * Frad);
  sumL += 0.058793 * Math.sin(2 * Drad - 2 * Mprad);
  sumL += 0.057066 * Math.sin(2 * Drad - Mrad - Mprad);
  sumL += 0.053322 * Math.sin(2 * Drad + Mprad);
  sumL += 0.045758 * Math.sin(2 * Drad - Mrad);
  sumL -= 0.040923 * Math.sin(Mrad - Mprad);
  sumL -= 0.03472 * Math.sin(Drad);
  sumL -= 0.030383 * Math.sin(Mrad + Mprad);
  sumL += 0.015327 * Math.sin(2 * Drad - 2 * Frad);
  sumL -= 0.012528 * Math.sin(2 * Frad + Mprad);
  sumL += 0.01098 * Math.sin(2 * Drad - 2 * Frad + Mprad);

  return normalize360(Lp + sumL);
}

/**
 * Calculates the Ascendant (Rising Sign) longitude given Greenwich Sidereal Time and Geographic coordinates
 */
function calculateAscendantLongitude(jd: number, latDeg: number, lonDeg: number): number {
  const T = (jd - 2451545.0) / 36525.0;

  // Greenwich Mean Sidereal Time in degrees
  const gmst0 = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T;
  const gmstDeg = normalize360(gmst0);

  // Local Sidereal Time (RAMC in degrees)
  const ramcDeg = normalize360(gmstDeg + lonDeg);
  const ramcRad = toRad(ramcDeg);

  // Obliquity of the ecliptic in degrees
  const epsDeg = 23.439291 - 0.0130042 * T;
  const epsRad = toRad(epsDeg);

  const phiRad = toRad(latDeg);

  // Ascendant formula: atan2(cos(RAMC), -sin(RAMC)*cos(eps) - tan(phi)*sin(eps))
  const y = Math.cos(ramcRad);
  const x = -Math.sin(ramcRad) * Math.cos(epsRad) - Math.tan(phiRad) * Math.sin(epsRad);

  let ascDeg = toDeg(Math.atan2(y, x));
  ascDeg = normalize360(ascDeg);

  return ascDeg;
}

/**
 * Converts degree 0..360 to ZodiacSignKey and relative degree (0..29)
 */
export function degreeToZodiac(deg: number): { sign: ZodiacSignKey; degree: number } {
  const norm = normalize360(deg);
  const signIndex = Math.floor(norm / 30);
  const degree = norm % 30;
  return {
    sign: ZODIAC_SIGNS[signIndex % 12],
    degree: Math.round(degree * 10) / 10,
  };
}

/**
 * Master astrology calculation function adhering strictly to prompt requirements
 */
export function calculateAstrology(details: BirthDetails): AstrologyCalculationResult {
  const { day, month, year, birthTimeKnown, hour12, minute, period, location } = details;

  // Determine timezone offset in hours
  const tzOffset = location ? location.timezoneOffsetHours : 5.5; // Default to IST (5.5) if in India or fallback
  const lat = location ? location.latitude : 16.95; // Default to approx Dwarapudi / AP if missing
  const lon = location ? location.longitude : 81.93;

  let utDecimalHours = 12.0 - tzOffset; // Default noon local time if time unknown

  if (birthTimeKnown && hour12 !== undefined && minute !== undefined && period) {
    let h24 = hour12 % 12;
    if (period === 'PM') h24 += 12;
    const localDecimalHours = h24 + minute / 60.0;
    utDecimalHours = localDecimalHours - tzOffset;
  }

  // Calculate Julian Day for the primary moment
  const jd = getJulianDay(year, month, day, utDecimalHours);

  // 1. Sun Sign (Always precise, Tropical Zodiac)
  const sunLon = calculateSunLongitude(jd);
  const sunResult = degreeToZodiac(sunLon);

  // 2. Moon Sign calculation & uncertainty check
  let moonSign: ZodiacSignKey | null = null;
  let moonDegree: number | undefined = undefined;
  let isMoonUncertain = false;
  let moonUncertainExplanation: string | undefined = undefined;

  if (birthTimeKnown) {
    const moonLon = calculateMoonLongitude(jd);
    const mRes = degreeToZodiac(moonLon);
    moonSign = mRes.sign;
    moonDegree = mRes.degree;
  } else {
    // Check Moon at start of local day (00:00 local time) and end of local day (23:59 local time)
    const jdStart = getJulianDay(year, month, day, 0.0 - tzOffset);
    const jdEnd = getJulianDay(year, month, day, 23.99 - tzOffset);

    const moonStartLon = calculateMoonLongitude(jdStart);
    const moonEndLon = calculateMoonLongitude(jdEnd);

    const startSign = degreeToZodiac(moonStartLon).sign;
    const endSign = degreeToZodiac(moonEndLon).sign;

    if (startSign === endSign) {
      // Moon stayed in the same sign all day!
      moonSign = startSign;
      isMoonUncertain = false;
    } else {
      // Moon crossed a zodiac boundary during this date
      isMoonUncertain = true;
      moonSign = startSign; // Tentative start of day
      const startTitle = startSign.toUpperCase();
      const endTitle = endSign.toUpperCase();
      moonUncertainExplanation = `On your birth date, the Moon transitioned from ${startTitle} to ${endTitle}. Without an exact birth time, it cannot be determined with certainty which sign the Moon occupied at the moment of your birth.`;
    }
  }

  // 3. Rising Sign (Ascendant)
  let risingSign: ZodiacSignKey | null = null;
  let risingDegree: number | undefined = undefined;
  let isRisingKnown = false;
  let risingExplanation: string | undefined = undefined;

  if (birthTimeKnown && location) {
    const ascLon = calculateAscendantLongitude(jd, lat, lon);
    const ascRes = degreeToZodiac(ascLon);
    risingSign = ascRes.sign;
    risingDegree = ascRes.degree;
    isRisingKnown = true;
  } else {
    isRisingKnown = false;
    risingSign = null;
    risingExplanation =
      'Your exact birth time and location are required to calculate your Rising Sign (Ascendant). Because the Ascendant changes signs approximately every two hours, we will not guess it.';
  }

  return {
    sunSign: sunResult.sign,
    sunDegree: sunResult.degree,
    moonSign,
    moonDegree,
    isMoonUncertain,
    moonUncertainExplanation,
    risingSign,
    risingDegree,
    isRisingKnown,
    risingExplanation,
    calculatedAt: new Date().toISOString(),
    birthDetails: details,
  };
}
