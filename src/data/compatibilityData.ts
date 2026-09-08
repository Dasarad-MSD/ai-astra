import { CompatibilityReport, ZodiacSignKey } from '../types';
import { ZODIAC_DATA } from './zodiacData';

type Element = 'Fire' | 'Earth' | 'Air' | 'Water';

function getElementRelation(el1: Element, el2: Element): {
  vibe: string;
  harmony: 'Harmonious' | 'Magnetic & Dynamic' | 'Complementary Growth' | 'Intense & Transformative';
  loveTheme: string;
  commTheme: string;
  chemTheme: string;
  chalTheme: string;
} {
  if (el1 === el2) {
    return {
      vibe: 'Elemental Kinship & Shared Instincts',
      harmony: 'Harmonious',
      loveTheme:
        'You naturally speak the same emotional and behavioral dialect. There is an immediate comfort because your core motivations mirror one another.',
      commTheme:
        'Conversations flow with effortless shorthand. You rarely have to explain the fundamental logic behind your decisions.',
      chemTheme:
        'Warm and familiar. Chemistry feels like coming home to a mirror of yourself, though you must guard against falling into predictable routines.',
      chalTheme:
        'Shared blind spots: because you have similar shadow tendencies, neither of you naturally balances the other’s excess.',
    };
  }

  // Fire + Air
  if ((el1 === 'Fire' && el2 === 'Air') || (el1 === 'Air' && el2 === 'Fire')) {
    return {
      vibe: 'Oxygen & Flame: Intellectual Vitality',
      harmony: 'Magnetic & Dynamic',
      loveTheme:
        'Air feeds Fire’s passions with brilliant ideas and conversational wit, while Fire inspires Air to turn theoretical ideas into bold reality.',
      commTheme:
        'Fast, stimulating, and filled with banter. You inspire one another to dream bigger and laugh through life’s absurdities.',
      chemTheme:
        'Sparky, electric, and playful. The chemistry thrives on mental curiosity and mutual social freedom.',
      chalTheme:
        'Both can lack emotional patience or grounding during practical crises. You will need deliberate effort to handle everyday logistical anchors.',
    };
  }

  // Earth + Water
  if ((el1 === 'Earth' && el2 === 'Water') || (el1 === 'Water' && el2 === 'Earth')) {
    return {
      vibe: 'Soil & Spring: Fertile Nurturance',
      harmony: 'Harmonious',
      loveTheme:
        'Water softens Earth’s stoic defenses and enriches its emotional life, while Earth offers Water the steady container and safety it deeply craves.',
      commTheme:
        'Deep, quiet, and meaningful. You do not need to rush words; there is an unspoken intuitive understanding between you.',
      chemTheme:
        'Slow-burning, sensual, and profoundly intimate. Trust deepens with time, turning affection into lasting devotion.',
      chalTheme:
        'Risk of emotional stagnation or heavy moods if neither brings external light or fresh adventure into the shared space.',
    };
  }

  // Fire + Water
  if ((el1 === 'Fire' && el2 === 'Water') || (el1 === 'Water' && el2 === 'Fire')) {
    return {
      vibe: 'Steam & Depth: High Intensity Alchemy',
      harmony: 'Intense & Transformative',
      loveTheme:
        'A passionate, emotionally charged pairing. Fire’s direct courage fascinates Water, while Water’s mystery draws Fire in completely.',
      commTheme:
        'Emotionally raw and heartfelt. When harmonious, you share profound vulnerability; during friction, Fire can seem blunt while Water retreats.',
      chemTheme:
        'Magnetic, passionate, and tempestuous. The attraction is rarely casual; you deeply mark each other’s personal growth.',
      chalTheme:
        'Fire’s unfiltered directness can accidentally scald Water’s tender feelings, while Water’s moodiness can extinguish Fire’s spontaneous joy.',
    };
  }

  // Earth + Air
  if ((el1 === 'Earth' && el2 === 'Air') || (el1 === 'Air' && el2 === 'Earth')) {
    return {
      vibe: 'Structure & Breeze: Pragmatic Intellect',
      harmony: 'Complementary Growth',
      loveTheme:
        'Air introduces Earth to innovative perspectives and social lightness, while Earth anchors Air’s restless ideas into tangible reality.',
      commTheme:
        'Pragmatic, logical, and civilized. You make exceptional strategic partners who can analyze situations without getting lost in emotional drama.',
      chemTheme:
        'Subtle and understated. The connection often begins as mutual professional respect or deep mental camaraderie before romantic intimacy develops.',
      chalTheme:
        'Emotional dryness: both tend to rationalize feelings, which can leave deeper emotional hunger unaddressed if you do not cultivate intimacy.',
    };
  }

  // Fire + Earth
  return {
    vibe: 'Hearth & Mountain: Enduring Ambition',
    harmony: 'Complementary Growth',
    loveTheme:
      'Fire supplies the vision and passionate drive, while Earth builds the sustainable architecture and provides steady patience.',
    commTheme:
      'Direct, goal-oriented, and candid. You both respect competence and despise passive-aggressive games.',
    chemTheme:
      'Robust and grounded. Fire admires Earth’s poise and physical sensuality, while Earth finds Fire’s bold initiative invigorating.',
    chalTheme:
      'Pacing clashes: Fire wants immediate action right now, while Earth refuses to budge until every risk has been thoroughly evaluated.',
  };
}

export function getCompatibility(sign1Key: ZodiacSignKey, sign2Key: ZodiacSignKey): CompatibilityReport {
  const sign1 = ZODIAC_DATA[sign1Key];
  const sign2 = ZODIAC_DATA[sign2Key];

  const rel = getElementRelation(sign1.element, sign2.element);

  // Personalized nuances based on specific sign interactions
  let customLove = rel.loveTheme;
  let customComm = rel.commTheme;
  let customChem = rel.chemTheme;
  let customChal = rel.chalTheme;

  if (sign1Key === sign2Key) {
    customLove = `As two ${sign1.name}s, you share an instinctive rhythm. Both of you crave the same emotional atmosphere (${sign1.element.toLowerCase()} expression), making understanding immediate and effortless.`;
    customComm = `You communicate with seamless shorthand. When you are aligned, projects and adventures take off with double momentum.`;
    customChem = `Intense familiarity. You admire each other’s strengths because you recognize your own values reflected right back at you.`;
    customChal = `When conflicts arise, both of you lean into the same defense mechanism: ${sign1.challenges[0].title.toLowerCase()}. Learning to be the first one to yield is essential.`;
  } else {
    customLove = `${sign1.name} brings ${sign1.tagline.toLowerCase()}, while ${sign2.name} offers ${sign2.tagline.toLowerCase()}. ${rel.loveTheme}`;
    customComm = `${sign1.name}’s natural style (${sign1.shortDescription.toLowerCase()}) meets ${sign2.name}’s approach (${sign2.shortDescription.toLowerCase()}). ${rel.commTheme}`;
    customChem = `Between ${sign1.name} (${sign1.element}) and ${sign2.name} (${sign2.element}), ${rel.chemTheme}`;
    customChal = `${sign1.name} may struggle with ${sign2.name}’s ${sign2.challenges[0].title.toLowerCase()}, while ${sign2.name} can feel tested by ${sign1.name}’s ${sign1.challenges[0].title.toLowerCase()}. ${rel.chalTheme}`;
  }

  return {
    sign1: sign1Key,
    sign2: sign2Key,
    vibeTitle: rel.vibe,
    love: customLove,
    communication: customComm,
    chemistry: customChem,
    challenges: customChal,
    harmonyLevel: rel.harmony,
  };
}
