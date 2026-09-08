import { VerifiedLocation } from '../types';
import { ANDHRA_PRADESH_CITIES, APCityLocation } from '../data/andhraPradeshCities';

export { ANDHRA_PRADESH_CITIES, type APCityLocation };

interface NominatimAddress {
  village?: string;
  hamlet?: string;
  town?: string;
  city?: string;
  suburb?: string;
  county?: string;
  state_district?: string;
  state?: string;
  country?: string;
  country_code?: string;
}

interface NominatimItem {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  type?: string;
  address?: NominatimAddress;
}

/**
 * Global benchmark cities for international users
 */
const GLOBAL_BENCHMARK_LOCATIONS: VerifiedLocation[] = [
  {
    displayName: 'London, Greater London, United Kingdom',
    villageOrCity: 'London',
    subdistrictOrMandal: 'Greater London',
    districtOrState: 'England',
    country: 'United Kingdom',
    latitude: 51.5074,
    longitude: -0.1278,
    timezone: 'Europe/London (GMT/BST)',
    timezoneOffsetHours: 0,
  },
  {
    displayName: 'New York City, New York, United States',
    villageOrCity: 'New York',
    subdistrictOrMandal: 'New York County',
    districtOrState: 'New York',
    country: 'United States',
    latitude: 40.7128,
    longitude: -74.0060,
    timezone: 'America/New_York (EST, UTC-5)',
    timezoneOffsetHours: -5,
  },
  {
    displayName: 'San Francisco, California, United States',
    villageOrCity: 'San Francisco',
    subdistrictOrMandal: 'San Francisco County',
    districtOrState: 'California',
    country: 'United States',
    latitude: 37.7749,
    longitude: -122.4194,
    timezone: 'America/Los_Angeles (PST, UTC-8)',
    timezoneOffsetHours: -8,
  },
  {
    displayName: 'Dubai, United Arab Emirates',
    villageOrCity: 'Dubai',
    districtOrState: 'Dubai Emirate',
    country: 'United Arab Emirates',
    latitude: 25.2048,
    longitude: 55.2708,
    timezone: 'Asia/Dubai (GST, UTC+4)',
    timezoneOffsetHours: 4,
  },
  {
    displayName: 'Singapore, Singapore',
    villageOrCity: 'Singapore',
    districtOrState: 'Singapore',
    country: 'Singapore',
    latitude: 1.3521,
    longitude: 103.8198,
    timezone: 'Asia/Singapore (SGT, UTC+8)',
    timezoneOffsetHours: 8,
  },
  {
    displayName: 'Sydney, New South Wales, Australia',
    villageOrCity: 'Sydney',
    districtOrState: 'New South Wales',
    country: 'Australia',
    latitude: -33.8688,
    longitude: 151.2093,
    timezone: 'Australia/Sydney (AEST, UTC+10)',
    timezoneOffsetHours: 10,
  },
];

/**
 * Featured verified locations across Andhra Pradesh and global benchmarks for instant pick or fast suggestions
 */
export const FEATURED_LOCATIONS: VerifiedLocation[] = [
  ...ANDHRA_PRADESH_CITIES,
  ...GLOBAL_BENCHMARK_LOCATIONS,
];

/**
 * Computes estimated timezone offset and canonical label given coordinates and country
 */
function resolveTimezone(lat: number, lon: number, countryCode?: string): { tz: string; offset: number } {
  const code = (countryCode || '').toLowerCase();

  // All India is IST (UTC+5:30)
  if (code === 'in' || (lat >= 6 && lat <= 38 && lon >= 68 && lon <= 98)) {
    return { tz: 'Asia/Kolkata (IST, UTC+5:30)', offset: 5.5 };
  }

  // Common country/regional matches
  if (code === 'gb') return { tz: 'Europe/London (GMT/BST)', offset: lon > -2 ? 0 : 0 };
  if (code === 'us') {
    if (lon < -114) return { tz: 'America/Los_Angeles (PST, UTC-8)', offset: -8 };
    if (lon < -104) return { tz: 'America/Denver (MST, UTC-7)', offset: -7 };
    if (lon < -85) return { tz: 'America/Chicago (CST, UTC-6)', offset: -6 };
    return { tz: 'America/New_York (EST, UTC-5)', offset: -5 };
  }
  if (code === 'ae') return { tz: 'Asia/Dubai (GST, UTC+4)', offset: 4 };
  if (code === 'sg') return { tz: 'Asia/Singapore (SGT, UTC+8)', offset: 8 };
  if (code === 'jp') return { tz: 'Asia/Tokyo (JST, UTC+9)', offset: 9 };
  if (code === 'au') return { tz: 'Australia/Sydney (AEST, UTC+10)', offset: 10 };
  if (code === 'de' || code === 'fr' || code === 'it' || code === 'es') {
    return { tz: 'Europe/Paris (CET, UTC+1)', offset: 1 };
  }

  // Solar longitude estimation fallback rounded to nearest half hour
  const rawHours = lon / 15.0;
  const rounded = Math.round(rawHours * 2) / 2;
  const sign = rounded >= 0 ? '+' : '';
  return { tz: `UTC${sign}${rounded}`, offset: rounded };
}

/**
 * Searches real locations through OpenStreetMap Nominatim API, supporting villages,
 * hamlets, mandals, towns and cities globally, especially Andhra Pradesh.
 */
export async function searchBirthplaceLocations(query: string): Promise<VerifiedLocation[]> {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) {
    return [];
  }

  const queryLower = trimmed.toLowerCase();

  // Check matching featured locations first for fast local response
  const localMatches = FEATURED_LOCATIONS.filter((loc) => {
    const apLoc = loc as APCityLocation;
    const nameMatch = loc.villageOrCity.toLowerCase().includes(queryLower);
    const displayMatch = loc.displayName.toLowerCase().includes(queryLower);
    const mandalMatch = loc.subdistrictOrMandal && loc.subdistrictOrMandal.toLowerCase().includes(queryLower);
    const districtMatch = apLoc.district && apLoc.district.toLowerCase().includes(queryLower);
    const aliasMatch = apLoc.aliases && apLoc.aliases.some((a) => a.toLowerCase().includes(queryLower));

    // Support "ap" or "andhra" matching
    const isAPQuery = queryLower === 'ap' || queryLower === 'andhra' || queryLower === 'andhra pradesh';
    const isAPLocation = loc.displayName.includes('Andhra Pradesh');

    return (isAPQuery && isAPLocation) || nameMatch || displayMatch || mandalMatch || districtMatch || aliasMatch;
  });

  // Sort local matches: exact match on city name > startsWith > category === 'Major City'
  localMatches.sort((a, b) => {
    const aCity = a.villageOrCity.toLowerCase();
    const bCity = b.villageOrCity.toLowerCase();
    if (aCity === queryLower) return -1;
    if (bCity === queryLower) return 1;
    if (aCity.startsWith(queryLower) && !bCity.startsWith(queryLower)) return -1;
    if (!aCity.startsWith(queryLower) && bCity.startsWith(queryLower)) return 1;

    const aAP = a as APCityLocation;
    const bAP = b as APCityLocation;
    if (aAP.category === 'Major City' && bAP.category !== 'Major City') return -1;
    if (bAP.category === 'Major City' && aAP.category !== 'Major City') return 1;

    return 0;
  });

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    // Call Nominatim with address details and jsonv2
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      trimmed
    )}&format=jsonv2&addressdetails=1&limit=10`;

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en',
      },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      return localMatches.length > 0 ? localMatches : [];
    }

    const data: NominatimItem[] = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      return localMatches;
    }

    const remoteResults: VerifiedLocation[] = data.map((item) => {
      const lat = parseFloat(item.lat);
      const lon = parseFloat(item.lon);
      const addr = item.address || {};

      // Primary name: village, hamlet, town, city, suburb, or first segment of display_name
      const primary =
        addr.village ||
        addr.hamlet ||
        addr.town ||
        addr.city ||
        addr.suburb ||
        item.display_name.split(',')[0].trim();

      // Mandal / county / district
      const subdistrict = addr.county || addr.state_district || '';
      const state = addr.state || '';
      const country = addr.country || 'India';

      const hierarchyParts = [subdistrict, state, country].filter(Boolean);
      const secondary = hierarchyParts.join(', ');

      const displayName = secondary ? `${primary}, ${secondary}` : primary;
      const { tz, offset } = resolveTimezone(lat, lon, addr.country_code);

      return {
        displayName,
        villageOrCity: primary,
        subdistrictOrMandal: subdistrict || undefined,
        districtOrState: state || subdistrict,
        country,
        latitude: lat,
        longitude: lon,
        timezone: tz,
        timezoneOffsetHours: offset,
      };
    });

    // Merge without duplicates based on displayName
    const combined: VerifiedLocation[] = [...localMatches];
    for (const r of remoteResults) {
      if (!combined.some((c) => Math.abs(c.latitude - r.latitude) < 0.005 && Math.abs(c.longitude - r.longitude) < 0.005)) {
        combined.push(r);
      }
    }

    return combined.slice(0, 8);
  } catch {
    // Return local matches if remote network fails
    return localMatches;
  }
}
