export type ZodiacSignKey =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export type ElementType = 'Fire' | 'Earth' | 'Air' | 'Water';
export type ModalityType = 'Cardinal' | 'Fixed' | 'Mutable';

export interface ZodiacSignTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientClass: string;
  bgGlowClass: string;
  borderClass: string;
  textAccentClass: string;
  badgeBg: string;
  moodKeywords: string[];
}

export interface TraitItem {
  title: string;
  description: string;
}

export interface LoveSectionData {
  howYouLove: string;
  whatYouNeed: string;
  whatAttractsYou: string;
  whatCausesProblems: string;
}

export interface CareerSectionData {
  workStyle: string;
  strengths: string;
  motivation: string;
  challenges: string;
  suitableEnvironments: string[];
}

export interface MoneySectionData {
  spendingTendencies: string;
  securityView: string;
  riskAttitude: string;
  practicalAdvice: string;
}

export interface ConstellationStar {
  x: number;
  y: number;
  size: number;
  label?: string;
}

export interface ConstellationLine {
  from: number;
  to: number;
}

export interface ConstellationData {
  stars: ConstellationStar[];
  lines: ConstellationLine[];
}

export interface ZodiacSignInfo {
  key: ZodiacSignKey;
  name: string;
  glyph: string;
  symbolName: string;
  dateRange: string;
  element: ElementType;
  modality: ModalityType;
  rulingPlanet: string;
  tagline: string;
  shortDescription: string;
  visualThemeDescription: string;
  theme: ZodiacSignTheme;
  constellation: ConstellationData;
  personality: {
    summary: string;
    essence: string;
    nuance: string;
  };
  strengths: TraitItem[];
  challenges: TraitItem[];
  love: LoveSectionData;
  career: CareerSectionData;
  money: MoneySectionData;
}

export interface VerifiedLocation {
  displayName: string;
  villageOrCity: string;
  subdistrictOrMandal?: string;
  districtOrState: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  timezoneOffsetHours: number;
}

export interface BirthDetails {
  name: string;
  day: number;
  month: number;
  year: number;
  birthTimeKnown: boolean;
  hour12?: number;
  minute?: number;
  period?: 'AM' | 'PM';
  location: VerifiedLocation | null;
}

export interface AstrologyCalculationResult {
  sunSign: ZodiacSignKey;
  sunDegree: number;
  moonSign: ZodiacSignKey | null;
  moonDegree?: number;
  isMoonUncertain: boolean;
  moonUncertainExplanation?: string;
  risingSign: ZodiacSignKey | null;
  risingDegree?: number;
  isRisingKnown: boolean;
  risingExplanation?: string;
  calculatedAt: string;
  birthDetails: BirthDetails;
}

export interface DailyHoroscope {
  sign: ZodiacSignKey;
  date: string;
  love: string;
  work: string;
  money: string;
  mood: string;
  advice: string;
}

export interface CompatibilityReport {
  sign1: ZodiacSignKey;
  sign2: ZodiacSignKey;
  vibeTitle: string;
  love: string;
  communication: string;
  chemistry: string;
  challenges: string;
  whyItWorks: string;
  whereItGetsDifficult: string;
  harmonyLevel: 'Harmonious' | 'Magnetic & Dynamic' | 'Complementary Growth' | 'Intense & Transformative';
}
