import { ZodiacSignInfo, ZodiacSignKey } from '../types';

export const ZODIAC_DATA: Record<ZodiacSignKey, ZodiacSignInfo> = {
  aries: {
    key: 'aries',
    name: 'Aries',
    glyph: '♈',
    symbolName: 'The Ram',
    dateRange: 'March 21 – April 19',
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanet: 'Mars',
    tagline: 'The Catalyst of Initiative & Courage',
    shortDescription: 'Bold • Direct • Instinctive • Pioneering',
    visualThemeDescription: 'Red and molten orange with fiery momentum and decisive celestial spark.',
    theme: {
      primaryColor: '#ef4444',
      secondaryColor: '#f97316',
      accentColor: '#fca5a5',
      gradientClass: 'from-red-600/30 via-orange-600/20 to-amber-900/10',
      bgGlowClass: 'rgba(239, 68, 68, 0.18)',
      borderClass: 'border-red-500/30 hover:border-red-400/60',
      textAccentClass: 'text-red-400',
      badgeBg: 'bg-red-500/15 text-red-300 border-red-500/30',
      moodKeywords: ['Fiery', 'Impulsive', 'Pioneering', 'Unyielding'],
    },
    constellation: {
      stars: [
        { x: 30, y: 70, size: 2.5, label: 'Hamal' },
        { x: 55, y: 50, size: 2.0, label: 'Sheratan' },
        { x: 75, y: 55, size: 1.8, label: 'Mesarthim' },
        { x: 88, y: 62, size: 1.5 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
      ],
    },
    personality: {
      summary:
        'You are built for beginnings. When a project stalls or everyone else hesitates, your immediate instinct is to step forward and create movement. You think through action rather than lengthy deliberation.',
      essence:
        'You possess an honest, unfiltered vitality. You value clarity over polite ambiguity and respect people who tell you the unvarnished truth. You move on quickly from conflict because holding grudges feels like a waste of momentum.',
      nuance:
        'While others perceive you as endlessly confident, you occasionally carry private fatigue from always feeling pressured to be the fearless one. Learning that pausing is not the same as quitting is one of your life’s most grounding lessons.',
    },
    strengths: [
      {
        title: 'Decisive Initiative',
        description: 'You cut through paralysis and kickstart stalled situations without waiting for permission.',
      },
      {
        title: 'Emotional Transparency',
        description: 'People never need to guess where they stand with you; your reactions are candid and authentic.',
      },
      {
        title: 'Resilient Rebound',
        description: 'Failure rarely defeats you for long. You shake off setbacks and immediately scan for the next opening.',
      },
      {
        title: 'Fierce Advocacy',
        description: 'When someone you care about is treated unfairly, you defend them with instant and unshakeable loyalty.',
      },
    ],
    challenges: [
      {
        title: 'Restless Impatience',
        description: 'You can grow irritable when processes or collaborators move at a more methodical pace than your mind.',
      },
      {
        title: 'Finishing What You Sparked',
        description: 'The exhilaration of launching something can fade quickly once routine maintenance and administrative details take over.',
      },
      {
        title: 'Defensive Reactivity',
        description: 'When challenged unexpectedly, your first instinct is counter-attack rather than pausing to evaluate the feedback.',
      },
    ],
    love: {
      howYouLove:
        'You love with enthusiastic, warm directness. You enjoy the thrill of the chase and appreciate a partner who brings their own independent passions to the table.',
      whatYouNeed:
        'Autonomy within closeness, clear direct communication, and a partner who can match your energy without competing with you.',
      whatAttractsYou:
        'Confidence, witty banter, self-reliance, and people who do not play passive-aggressive mind games.',
      whatCausesProblems:
        'Feeling micromanaged, passive communication, or having your enthusiasm dampened by excessive cynicism.',
    },
    career: {
      workStyle: 'Autonomous, entrepreneurial, and energetic. You prefer tackling immediate obstacles rather than managing endless committee meetings.',
      strengths: 'Crisis leadership, pitching new concepts, and cutting straight to the solution.',
      motivation: 'Freedom to execute ideas rapidly and having measurable ownership over results.',
      challenges: 'Repetitive clerical routines and navigating subtle corporate politics.',
      suitableEnvironments: ['Startups & ventures', 'Emergency & crisis response', 'Field operations', 'Creative direction', 'Athletics & coaching'],
    },
    money: {
      spendingTendencies: 'You may spend impulsively on gear, experiences, or tools that promise new adventures, but you can also generate income rapidly when motivated.',
      securityView: 'You view money primarily as fuel for freedom and swift action rather than static preservation.',
      riskAttitude: 'Comfortable with calculated risks; you back your own ability to earn whatever you spend.',
      practicalAdvice: 'Introduce an intentional 48-hour pause rule for major discretionary purchases to let the excitement level settle.',
    },
  },

  taurus: {
    key: 'taurus',
    name: 'Taurus',
    glyph: '♉',
    symbolName: 'The Bull',
    dateRange: 'April 20 – May 20',
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanet: 'Venus',
    tagline: 'The Anchor of Substance & Lasting Craft',
    shortDescription: 'Grounded • Patient • Sensual • Unwavering',
    visualThemeDescription: 'Deep emerald greens, warm earth, moss textures, and quiet, enduring luxury.',
    theme: {
      primaryColor: '#10b981',
      secondaryColor: '#059669',
      accentColor: '#6ee7b7',
      gradientClass: 'from-emerald-700/30 via-teal-800/20 to-stone-900/10',
      bgGlowClass: 'rgba(16, 185, 129, 0.18)',
      borderClass: 'border-emerald-500/30 hover:border-emerald-400/60',
      textAccentClass: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      moodKeywords: ['Enduring', 'Tactile', 'Steadfast', 'Serene'],
    },
    constellation: {
      stars: [
        { x: 25, y: 40, size: 2.8, label: 'Aldebaran' },
        { x: 38, y: 55, size: 2.0, label: 'Elnath' },
        { x: 50, y: 45, size: 1.8 },
        { x: 65, y: 35, size: 1.6 },
        { x: 75, y: 60, size: 2.2, label: 'Pleiades' },
        { x: 85, y: 70, size: 1.5 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 4, to: 5 },
      ],
    },
    personality: {
      summary:
        'You operate with a deliberate, rhythmic pace that others mistake for slowness until they see the sheer permanence of what you construct. You value physical quality, reliability, and peace of mind over frantic trends.',
      essence:
        'You have an innate sensory intelligence. The weight of fabrics, the aroma of well-made food, and the tangible stability of a secure home matter deeply to you. When you give your word, it is an iron contract.',
      nuance:
        'Because you invest so much energy establishing your routines, change can feel like an existential threat. You often hold onto situations or relationships past their expiration date simply because familiarity feels safer than the unknown.',
    },
    strengths: [
      {
        title: 'Unshakable Reliability',
        description: 'When the world is chaotic, you remain the dependable center of gravity people lean upon.',
      },
      {
        title: 'Mastery of Quality',
        description: 'You possess an instinctive eye for lasting craftsmanship and value that survives time.',
      },
      {
        title: 'Patient Endurance',
        description: 'Where others quit after weeks of no results, you stay the course until the foundation bears fruit.',
      },
      {
        title: 'Calming Physical Presence',
        description: 'Your grounded demeanor naturally decelerates anxiety in the rooms you walk into.',
      },
    ],
    challenges: [
      {
        title: 'Entrenched Resistance to Change',
        description: 'Once you take a stance, shifting your perspective requires overwhelming proof and gentle patience.',
      },
      {
        title: 'Comfort Zone Inertia',
        description: 'You can stay in comfortable but unfulfilling situations out of reluctance to disrupt your equilibrium.',
      },
      {
        title: 'Possessive Attachment',
        description: 'You may equate emotional security with physical possession or predictability.',
      },
    ],
    love: {
      howYouLove:
        'You love through physical affection, generous hospitality, and quiet devotion. Grand promises mean little to you compared to showing up consistently.',
      whatYouNeed:
        'Emotional stability, tactile affection, honesty, and a shared appreciation for comfortable simplicity.',
      whatAttractsYou:
        'Calm confidence, emotional maturity, refined taste, and people whose actions match their spoken word.',
      whatCausesProblems:
        'Unpredictability, emotional volatility, or partners who pressure you to make sudden decisions.',
    },
    career: {
      workStyle: 'Methodical, thorough, and quality-driven. You excel when given time to build sustainable structures.',
      strengths: 'Resource management, long-range planning, design execution, and financial stewardship.',
      motivation: 'Building enduring tangible value and financial autonomy.',
      challenges: 'Rapidly pivoting workflows and environments with zero stability.',
      suitableEnvironments: ['Architecture & real estate', 'Culinary & hospitality', 'Finance & asset management', 'Horticulture & nature', 'Industrial design'],
    },
    money: {
      spendingTendencies: 'You prefer buying fewer, higher-grade items that last decades rather than disposable fast items.',
      securityView: 'Financial reserves represent emotional peace. You sleep better when your savings cushion is healthy.',
      riskAttitude: 'Conservative and methodical; you prefer compounding growth over speculative gambles.',
      practicalAdvice: 'Allow yourself to spend on occasional spontaneous joy without feeling it compromises your hard-earned security.',
    },
  },

  gemini: {
    key: 'gemini',
    name: 'Gemini',
    glyph: '♊',
    symbolName: 'The Twins',
    dateRange: 'May 21 – June 20',
    element: 'Air',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    tagline: 'The Weaver of Perspectives & Curiosity',
    shortDescription: 'Inquisitive • Quick-witted • Versatile • Articulate',
    visualThemeDescription: 'Vibrant amber and luminous golden yellow, airy lightness, and dynamic currents.',
    theme: {
      primaryColor: '#eab308',
      secondaryColor: '#ca8a04',
      accentColor: '#fde047',
      gradientClass: 'from-amber-500/25 via-yellow-600/15 to-neutral-900/10',
      bgGlowClass: 'rgba(234, 179, 8, 0.16)',
      borderClass: 'border-amber-500/30 hover:border-amber-400/60',
      textAccentClass: 'text-amber-300',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      moodKeywords: ['Luminous', 'Curious', 'Agile', 'Breezy'],
    },
    constellation: {
      stars: [
        { x: 30, y: 30, size: 2.6, label: 'Castor' },
        { x: 45, y: 35, size: 2.7, label: 'Pollux' },
        { x: 35, y: 55, size: 1.8, label: 'Alhena' },
        { x: 55, y: 65, size: 1.7 },
        { x: 75, y: 75, size: 1.9 },
        { x: 65, y: 85, size: 1.6 },
      ],
      lines: [
        { from: 0, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 3, to: 5 },
      ],
    },
    personality: {
      summary:
        'Your mind is an open browser with twenty tabs running simultaneously. You see links between disparate ideas that nobody else notices, and you communicate with an effortless, sparkling dexterity.',
      essence:
        'You have a youthful fascination with the world. You are curious about people’s backstories, strange facts, and contrasting points of view. You adapt into almost any social circle within minutes.',
      nuance:
        'Because you can genuinely see multiple sides of every debate, you can struggle with decision paralysis. When deep emotional currents rise, your automatic reflex is to analyze the feeling intellectually rather than sit in it.',
    },
    strengths: [
      {
        title: 'Cognitive Agility',
        description: 'You grasp new concepts instantly and translate complex topics into plain, engaging language.',
      },
      {
        title: 'Versatile Adaptation',
        description: 'You thrive when circumstances pivot, effortlessly switching tools and communication styles.',
      },
      {
        title: 'Natural Connector',
        description: 'You bridge isolated people, sharing useful introductions and spark ideas between groups.',
      },
      {
        title: 'Perceptive Humor',
        description: 'Your quick wit disarms tension and sheds playful light on serious dilemmas.',
      },
    ],
    challenges: [
      {
        title: 'Scattered Attention',
        description: 'The allure of the shiny new topic can pull you away before your current task is thoroughly completed.',
      },
      {
        title: 'Intellectualizing Emotions',
        description: 'You may explain what you feel rather than simply feeling it, creating distance in intimate moments.',
      },
      {
        title: 'Restlessness',
        description: 'Monotony drains your vitality faster than almost anything else, prompting you to stir up needless changes.',
      },
    ],
    love: {
      howYouLove:
        'You love through conversation, shared humor, and mental sparring. For you, an evening spent discussing ideas is the purest aphrodisiac.',
      whatYouNeed:
        'Mental stimulation, space for personal friendships, laughter, and a partner who does not demand emotional heaviness at all times.',
      whatAttractsYou:
        'Curiosity, sharp conversationalists, independence, and people who can surprise your intellect.',
      whatCausesProblems:
        'Jealousy, repetitive routines, or partners who accuse your playful nature of being insincere.',
    },
    career: {
      workStyle: 'Fast-paced, communicative, and diverse. You wither in solitary silos with unvarying tasks.',
      strengths: 'Storytelling, rapid prototyping, public relations, research syntheses, and negotiations.',
      motivation: 'Constant learning and being at the intersection of information flows.',
      challenges: 'Sustained, repetitive execution on a single topic over years without novelty.',
      suitableEnvironments: ['Media & journalism', 'Tech product strategy', 'Education & training', 'Marketing & messaging', 'Consulting'],
    },
    money: {
      spendingTendencies: 'Prone to spending on books, subscriptions, gadgets, travel, and mini-courses that feed current curiosities.',
      securityView: 'You believe earning power lies in your adaptable skills and network rather than a static vault.',
      riskAttitude: 'Moderate; comfortable testing varied micro-investments rather than locking all capital in one basket.',
      practicalAdvice: 'Automate transfers into a locked savings account before your curious mind finds five clever ways to spend it.',
    },
  },

  cancer: {
    key: 'cancer',
    name: 'Cancer',
    glyph: '♋',
    symbolName: 'The Crab',
    dateRange: 'June 21 – July 22',
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanet: 'Moon',
    tagline: 'The Sanctuary of Intuition & Deep Memory',
    shortDescription: 'Empathetic • Protective • Intuitive • Loyal',
    visualThemeDescription: 'Moonlit silver, deep oceanic blues, soft glowing water reflections, and night warmth.',
    theme: {
      primaryColor: '#94a3b8',
      secondaryColor: '#38bdf8',
      accentColor: '#e0f2fe',
      gradientClass: 'from-slate-600/30 via-sky-900/20 to-indigo-950/20',
      bgGlowClass: 'rgba(56, 189, 248, 0.16)',
      borderClass: 'border-slate-400/30 hover:border-sky-300/60',
      textAccentClass: 'text-sky-200',
      badgeBg: 'bg-sky-500/15 text-sky-200 border-sky-400/30',
      moodKeywords: ['Oceanic', 'Reflective', 'Sheltering', 'Mystic'],
    },
    constellation: {
      stars: [
        { x: 35, y: 40, size: 2.2, label: 'Tarf' },
        { x: 50, y: 55, size: 2.6, label: 'Asellus Australis' },
        { x: 52, y: 42, size: 2.0, label: 'Praesepe' },
        { x: 68, y: 50, size: 2.2, label: 'Acubens' },
        { x: 60, y: 70, size: 1.8 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 3, to: 4 },
      ],
    },
    personality: {
      summary:
        'You read the emotional climate of a room before anyone speaks a word. You are deeply protective of those inside your circle, maintaining an outer shell until you know you are safe to be soft.',
      essence:
        'You remember how moments felt long after the factual details fade. Your loyalty is profound: once you decide someone is family, you will stand beside them through seasons where others walk away.',
      nuance:
        'Because your emotional antenna is always on, you absorb others’ unspoken stress like a sponge. When hurt, you tend to retreat inside your shell and expect others to intuitively understand why you withdrew.',
    },
    strengths: [
      {
        title: 'Profound Intuition',
        description: 'You sense subtext, unspoken sorrow, and hidden motives before they surface verbally.',
      },
      {
        title: 'Protective Sanctuary',
        description: 'You excel at creating psychological and physical spaces where vulnerable people feel cherished.',
      },
      {
        title: 'Steely Tenacity',
        description: 'Beneath your gentle exterior lies ferocious defensive strength when protecting what you hold dear.',
      },
      {
        title: 'Emotional Memory',
        description: 'You celebrate traditions, keep sentimental milestones alive, and honor personal history.',
      },
    ],
    challenges: [
      {
        title: 'Silent Retreats',
        description: 'When wounded, withdrawing into moody silence can confuse partners who need open dialogue to repair things.',
      },
      {
        title: 'Clinging to Nostalgia',
        description: 'You can romanticize past memories or past connections, comparing imperfect reality to a golden past.',
      },
      {
        title: 'Taking Things Personally',
        description: 'Neutral remarks or casual oversights by others can sometimes be interpreted as deliberate rejection.',
      },
    ],
    love: {
      howYouLove:
        'You love with tender devotion and deep caretaking. You show love through home-cooked meals, remembering tiny preferences, and offering a steady haven.',
      whatYouNeed:
        'Emotional safety, gentle reassurance, loyalty, and a partner who treats your vulnerability with sacred respect.',
      whatAttractsYou:
        'Gentleness, protective instincts, emotional intelligence, and people who value home and family.',
      whatCausesProblems:
        'Emotional coldness, harsh sarcasm, or dismissiveness toward your intuitive gut checks.',
    },
    career: {
      workStyle: 'Caring, protective, and tenaciously committed. You do your finest work when you believe in the mission.',
      strengths: 'Human-centered leadership, community building, counseling, crisis navigation, and historical preservation.',
      motivation: 'Creating lasting security for your loved ones and building something that genuinely supports people.',
      challenges: 'Cutthroat political cultures that reward ruthlessness over empathy.',
      suitableEnvironments: ['Psychology & social care', 'Healthcare & wellness', 'Culinary & interior arts', 'Archival research', 'Boutique hospitality'],
    },
    money: {
      spendingTendencies: 'Cautious and family-focused. You spend on durable home comforts and nesting, but dislike frivolous waste.',
      securityView: 'Money equals safety. A depleted savings account feels like an unlocked front door in the dark.',
      riskAttitude: 'Low to moderate; you favor property, family assets, and tangible stability.',
      practicalAdvice: 'Remind yourself that financial security is meant to let you live with ease, not to hoard out of anxious superstition.',
    },
  },

  leo: {
    key: 'leo',
    name: 'Leo',
    glyph: '♌',
    symbolName: 'The Lion',
    dateRange: 'July 23 – August 22',
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanet: 'Sun',
    tagline: 'The Radiant Heart of Sovereignty & Generosity',
    shortDescription: 'Confident • Warm • Magnanimous • Creative',
    visualThemeDescription: 'Molten gold, warm amber sunlight, regal orange, and cinematic royal luminance.',
    theme: {
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      accentColor: '#fde68a',
      gradientClass: 'from-amber-600/35 via-yellow-700/20 to-stone-950/20',
      bgGlowClass: 'rgba(245, 158, 11, 0.20)',
      borderClass: 'border-amber-500/40 hover:border-amber-300/70',
      textAccentClass: 'text-amber-300',
      badgeBg: 'bg-amber-500/15 text-amber-200 border-amber-500/40',
      moodKeywords: ['Regal', 'Radiant', 'Warm', 'Sovereign'],
    },
    constellation: {
      stars: [
        { x: 30, y: 70, size: 3.0, label: 'Regulus' },
        { x: 40, y: 55, size: 2.0, label: 'Al Jabbah' },
        { x: 48, y: 40, size: 2.2, label: 'Algieba' },
        { x: 60, y: 35, size: 1.8, label: 'Adhafera' },
        { x: 70, y: 45, size: 1.9, label: 'Zosma' },
        { x: 85, y: 50, size: 2.5, label: 'Denebola' },
        { x: 55, y: 70, size: 1.6, label: 'Chertan' },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 4, to: 5 },
        { from: 4, to: 6 },
        { from: 6, to: 0 },
      ],
    },
    personality: {
      summary:
        'You bring warmth and vitality into whatever room you inhabit. When you are operating from your highest expression, your presence is not about craving attention—it is about elevating everyone around you with your generous light.',
      essence:
        'You have a noble heart and an instinctive flair for celebration. You cannot stand pettiness, stinginess, or deceit. You want life to feel big, dramatic, and worthy of remembrance.',
      nuance:
        'Your fierce pride is your greatest shield and your most fragile vulnerability. Criticism can sting you far more deeply than you allow anyone to see, prompting you to double down on pride rather than admit hurt feelings.',
    },
    strengths: [
      {
        title: 'Generous Magnetism',
        description: 'You give with an open hand, celebrating others’ milestones with genuine theatrical joy.',
      },
      {
        title: 'Inspirational Courage',
        description: 'You stand at the front when spirits falter, restoring faith through sheer presence.',
      },
      {
        title: 'Creative Conviction',
        description: 'You express yourself with distinctive authenticity; you never hide in the background of your own life.',
      },
      {
        title: 'Loyalty to Allies',
        description: 'Those under your wing enjoy fierce, royal protection against disrespect.',
      },
    ],
    challenges: [
      {
        title: 'Wounded Pride',
        description: 'Feeling overlooked or unappreciated can trigger chilly condescension or dramatic overcompensation.',
      },
      {
        title: 'Need for External Affirmation',
        description: 'If you tie your self-worth to applause, silence can feel like active disapproval.',
      },
      {
        title: 'Dominating the Center Stage',
        description: 'In your excitement, you can inadvertently eclipse quieter teammates who need encouragement to speak.',
      },
    ],
    love: {
      howYouLove:
        'You love dramatically and wholeheartedly. You shower your partner with romantic dates, public compliments, and unwavering devotion.',
      whatYouNeed:
        'Admiration, open appreciation, mutual pride in one another, and passion that does not fade into bland apathy.',
      whatAttractsYou:
        'Grace, self-possession, playful confidence, and partners who admire you without bowing down.',
      whatCausesProblems:
        'Being taken for granted, public embarrassment, or emotional stinginess from a partner.',
    },
    career: {
      workStyle: 'Expressive, decisive, and leadership-oriented. You work best with room to direct the aesthetic vision.',
      strengths: 'Charismatic presentations, brand identity, creative leadership, and team morale revival.',
      motivation: 'Building a legacy, earning public respect, and performing work you are immensely proud of.',
      challenges: 'Working in obscure backroom roles where your contributions remain anonymous.',
      suitableEnvironments: ['Performing & creative arts', 'Executive management', 'Luxury brand leadership', 'Public speaking', 'Film & media'],
    },
    money: {
      spendingTendencies: 'You enjoy treating yourself and loved ones to luxury experiences, memorable gifts, and high-end dining.',
      securityView: 'Money is an instrument of dignity, celebration, and royal generosity.',
      riskAttitude: 'Moderate to daring; you believe in backing your own star power and talent.',
      practicalAdvice: 'Set up an untouchable baseline portfolio so your spontaneous generosity never compromises your long-term independence.',
    },
  },

  virgo: {
    key: 'virgo',
    name: 'Virgo',
    glyph: '♍',
    symbolName: 'The Maiden',
    dateRange: 'August 23 – September 22',
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    tagline: 'The Master of Craft & Meaningful Service',
    shortDescription: 'Discerning • Analytical • Helpful • Refined',
    visualThemeDescription: 'Earthy sage, muted olive, crisp natural textures, and subtle botanical elegance.',
    theme: {
      primaryColor: '#84cc16',
      secondaryColor: '#65a30d',
      accentColor: '#bef264',
      gradientClass: 'from-lime-800/25 via-emerald-900/20 to-neutral-950/20',
      bgGlowClass: 'rgba(132, 204, 22, 0.16)',
      borderClass: 'border-lime-500/30 hover:border-lime-400/60',
      textAccentClass: 'text-lime-300',
      badgeBg: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
      moodKeywords: ['Botanical', 'Crisp', 'Discerning', 'Devoted'],
    },
    constellation: {
      stars: [
        { x: 30, y: 70, size: 2.9, label: 'Spica' },
        { x: 45, y: 55, size: 2.1, label: 'Porrima' },
        { x: 50, y: 40, size: 2.2, label: 'Vindemiatrix' },
        { x: 62, y: 45, size: 1.8, label: 'Minelauva' },
        { x: 72, y: 55, size: 2.0, label: 'Zavijava' },
        { x: 80, y: 70, size: 1.7 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
      ],
    },
    personality: {
      summary:
        'You notice the grain of the wood, the typo in the contract, and the subtle shift in someone’s voice when they are struggling. You show love by making life work more smoothly for those around you.',
      essence:
        'You hold yourself to exacting internal standards. You are driven not by ego, but by an innate love for competence and clean efficiency. You find quiet joy in refining a chaotic system into an orderly flow.',
      nuance:
        'Because your radar is trained on flaws and areas for improvement, your inner critic can be ruthless toward yourself. What looks like hyper-criticism to others is often just your way of desperately trying to prevent errors.',
    },
    strengths: [
      {
        title: 'Surgical Precision',
        description: 'You spot errors, discrepancies, and optimization bottlenecks that slip past everyone else.',
      },
      {
        title: 'Practical Devotion',
        description: 'While others offer empty platitudes, you arrive with actual solutions, clean soup, and organized spreadsheets.',
      },
      {
        title: 'Continuous Refinement',
        description: 'You are dedicated to self-improvement and constantly upgrade your craft through disciplined practice.',
      },
      {
        title: 'Integrity in Detail',
        description: 'You do the unglamorous groundwork with quiet respect, never cutting corners when nobody is watching.',
      },
    ],
    challenges: [
      {
        title: 'Relentless Self-Scrutiny',
        description: 'You may measure your worth by how flawlessly you perform, making it agonizing to forgive your own mistakes.',
      },
      {
        title: 'Anxiety About Disorder',
        description: 'Uncertainty or chaotic collaborators can trigger nervous tension and an urge to micromanage.',
      },
      {
        title: 'Reluctance to Ask for Help',
        description: 'You easily give assistance to others, but view asking for help as an admission of personal inadequacy.',
      },
    ],
    love: {
      howYouLove:
        'You love through steady acts of service, thoughtful care, and being an indispensable anchor in your partner’s everyday life.',
      whatYouNeed:
        'Appreciation for your quiet efforts, reliability, clean communication, and a partner who does not create needless chaos.',
      whatAttractsYou:
        'Intellect, emotional cleanliness, humor, humility, and people who take pride in what they do.',
      whatCausesProblems:
        'Carelessness, broken promises, unhygienic living habits, or partners who dismiss your practical advice as nagging.',
    },
    career: {
      workStyle: 'Systematic, detail-oriented, and reliable. You bring order to the most tangled organizational mess.',
      strengths: 'Process engineering, data validation, editing, scientific analysis, and clinical stewardship.',
      motivation: 'Crafting work of unmistakable excellence and seeing tangible improvements in daily function.',
      challenges: 'Vague directives with zero metrics and leaders who favor hype over substance.',
      suitableEnvironments: ['Data science & systems', 'Medicine & health sciences', 'Editorial & publishing', 'Software quality & architecture', 'Environmental design'],
    },
    money: {
      spendingTendencies: 'Disciplined and value-conscious. You research products exhaustively before buying and dislike impulsive spending.',
      securityView: 'Financial independence is a mathematical equation: clear budgeting creates emotional peace.',
      riskAttitude: 'Low; you prefer verified, audited funds with reliable historical yield.',
      practicalAdvice: 'Remember that not every expenditure needs a return on investment—some things are worth having purely for delight.',
    },
  },

  libra: {
    key: 'libra',
    name: 'Libra',
    glyph: '♎',
    symbolName: 'The Scales',
    dateRange: 'September 23 – October 22',
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanet: 'Venus',
    tagline: 'The Architect of Harmony & Elegant Symmetry',
    shortDescription: 'Diplomatic • Aesthetic • Fair • Charismatic',
    visualThemeDescription: 'Soft dusty rose, blushing gold, warm champagne, and balanced classical symmetry.',
    theme: {
      primaryColor: '#f43f5e',
      secondaryColor: '#fb7185',
      accentColor: '#fecdd3',
      gradientClass: 'from-rose-500/25 via-pink-700/15 to-amber-950/15',
      bgGlowClass: 'rgba(244, 63, 94, 0.18)',
      borderClass: 'border-rose-400/35 hover:border-rose-300/60',
      textAccentClass: 'text-rose-300',
      badgeBg: 'bg-rose-500/15 text-rose-200 border-rose-400/30',
      moodKeywords: ['Symmetrical', 'Graceful', 'Equitable', 'Roseate'],
    },
    constellation: {
      stars: [
        { x: 35, y: 55, size: 2.8, label: 'Zubenelgenubi' },
        { x: 55, y: 35, size: 2.6, label: 'Zubeneschamali' },
        { x: 65, y: 65, size: 2.1, label: 'Zubenelakrab' },
        { x: 45, y: 75, size: 1.8, label: 'Brachium' },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 0 },
      ],
    },
    personality: {
      summary:
        'You are an instinctive mediator. Where others see binary conflict, you immediately perceive the shared bridge. You have an eye that recoils from discord and an innate craving for beauty, justice, and social grace.',
      essence:
        'You make everyone in your company feel charming and appreciated. You believe life should be lived with elegance, thoughtful manners, and fairness for all parties involved.',
      nuance:
        'Your terror of interpersonal confrontation can lead you into people-pleasing compromises. You can spend so much time weighing both sides of a dilemma that you abandon your own visceral preference to keep the peace.',
    },
    strengths: [
      {
        title: 'Masterful Diplomacy',
        description: 'You de-escalate feuds with tact, helping polarized adversaries find common ground without bloodshed.',
      },
      {
        title: 'Refined Aesthetic Taste',
        description: 'You intuitively know how to arrange space, color, words, and clothing into timeless elegance.',
      },
      {
        title: 'Commitment to Justice',
        description: 'You instinctively stand against bias and advocate for equal voices around any table.',
      },
      {
        title: 'Charming Social Intelligence',
        description: 'You know how to read social cues and make diverse personalities feel welcomed and respected.',
      },
    ],
    challenges: [
      {
        title: 'Agonizing Indecision',
        description: 'Weighing all alternatives exhaustively can keep you frozen, waiting for someone else to choose.',
      },
      {
        title: 'Conflict Avoidance',
        description: 'Smoothing over valid grievances with a polite smile allows resentment to fester beneath the surface.',
      },
      {
        title: 'Over-reliance on Partnership',
        description: 'You may feel slightly incomplete when operating completely alone, tying your rhythm to another’s mood.',
      },
    ],
    love: {
      howYouLove:
        'You love as a true partner. You believe in courtship, mutual respect, intellectual companionship, and shared beauty in your daily rituals.',
      whatYouNeed:
        'Equitable give-and-take, peaceful surroundings, mutual respect, and a partner who values romance as an ongoing art form.',
      whatAttractsYou:
        'Artistic sensibility, emotional manners, witty intellect, and people who carry themselves with natural poise.',
      whatCausesProblems:
        'Harsh vulgarity, aggressive shouting, one-sided domestic labor, and lack of romantic effort.',
    },
    career: {
      workStyle: 'Collaborative, diplomatic, and aesthetically discerning. You thrive when working with partners or clients.',
      strengths: 'Contract negotiation, public relations, interior & fashion design, mediation, and creative curation.',
      motivation: 'Bringing balance, beauty, and fair resolution into complex social and professional ecosystems.',
      challenges: 'Ruthless solitary environments where empathy and aesthetic balance are deemed irrelevant.',
      suitableEnvironments: ['Law & mediation', 'Design & fashion houses', 'Art curation & diplomacy', 'Talent management', 'Hospitality leadership'],
    },
    money: {
      spendingTendencies: 'Prone to spending on beauty, art, social entertaining, and quality experiences that enrich your surroundings.',
      securityView: 'Money is the key to living with grace, attending cultural events, and enjoying harmonious comfort.',
      riskAttitude: 'Balanced; you seek balanced portfolios that hedge risk while allowing room for aesthetic enjoyment.',
      practicalAdvice: 'Check that you are not spending money simply to keep up appearances or appease social peer groups.',
    },
  },

  scorpio: {
    key: 'scorpio',
    name: 'Scorpio',
    glyph: '♏',
    symbolName: 'The Scorpion',
    dateRange: 'October 23 – November 21',
    element: 'Water',
    modality: 'Fixed',
    rulingPlanet: 'Pluto & Mars',
    tagline: 'The Depth of Truth & Alchemical Transformation',
    shortDescription: 'Perceptive • Magnetic • Intense • Resilient',
    visualThemeDescription: 'Deep crimson, burgundy, dark plum, dramatic shadows, and intense celestial embers.',
    theme: {
      primaryColor: '#b91c1c',
      secondaryColor: '#881337',
      accentColor: '#f87171',
      gradientClass: 'from-rose-950/40 via-red-950/30 to-black/30',
      bgGlowClass: 'rgba(185, 28, 28, 0.22)',
      borderClass: 'border-rose-700/40 hover:border-red-500/70',
      textAccentClass: 'text-rose-400',
      badgeBg: 'bg-rose-900/30 text-rose-200 border-rose-700/50',
      moodKeywords: ['Nocturnal', 'Penetrating', 'Transformative', 'Ember'],
    },
    constellation: {
      stars: [
        { x: 30, y: 45, size: 2.0, label: 'Dschubba' },
        { x: 42, y: 55, size: 3.2, label: 'Antares' },
        { x: 45, y: 70, size: 1.8, label: 'Larawag' },
        { x: 55, y: 80, size: 2.2, label: 'Sargas' },
        { x: 70, y: 82, size: 2.5, label: 'Shaula' },
        { x: 80, y: 75, size: 2.0, label: 'Lesath' },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
      ],
    },
    personality: {
      summary:
        'You tend to observe people carefully before deciding whether to trust them. Once you become comfortable, you can be deeply loyal, but you may also find it difficult to let go when someone breaks your trust.',
      essence:
        'You possess psychological x-ray vision. Superficial small talk drains you; you want to know what someone actually fears, what drives them in the dark, and what they hold most dear. You have survived personal reinventions that would shatter others.',
      nuance:
        'Because you feel things with volcanic intensity, you protect your inner world behind a calm, inscrutable exterior. The danger is that hyper-vigilance can morph into paranoia, expecting betrayal even from those who love you genuinely.',
    },
    strengths: [
      {
        title: 'Unrivaled Perception',
        description: 'You instantly detect insincerity, hidden agendas, and psychological undercurrents.',
      },
      {
        title: 'Fierce, Unconditional Loyalty',
        description: 'When you pledge yourself to an ally, you will defend them through hell itself without flinching.',
      },
      {
        title: 'Phoenix-like Resilience',
        description: 'You have an extraordinary capacity to lose everything, compost the wreckage, and emerge more powerful.',
      },
      {
        title: 'Total Emotional Courage',
        description: 'You are unafraid of difficult conversations, taboo subjects, or the dark corners of the human experience.',
      },
    ],
    challenges: [
      {
        title: 'Guarded Suspicion',
        description: 'Testing people repeatedly before allowing them close can wear down healthy, well-intentioned partners.',
      },
      {
        title: 'Long-Held Resentment',
        description: 'You hold onto historical slights with such permanence that the poison ends up hurting you more than the offender.',
      },
      {
        title: 'All-or-Nothing Intensity',
        description: 'You can struggle with casual middle ground—you are either completely invested or emotionally disconnected.',
      },
    ],
    love: {
      howYouLove:
        'You love with soul-deep, transformative intensity. For you, intimacy is not a hobby—it is a spiritual merging where trust must be absolute.',
      whatYouNeed:
        'Total fidelity, emotional transparency, respect for your private world, and depth that matches your own.',
      whatAttractsYou:
        'Mystery, emotional bravery, quiet self-possession, and people who can meet your piercing gaze without wavering.',
      whatCausesProblems:
        'Dishonesty, superficial flirtatiousness, breach of confidence, or partners who mock your deep feelings.',
    },
    career: {
      workStyle: 'Focused, strategic, and unrelenting. You excel when tasked with solving high-stakes mysteries.',
      strengths: 'Crisis management, investigative research, forensic accounting, psychotherapy, and strategic turnarounds.',
      motivation: 'Uncovering the fundamental truth and having decisive influence over critical outcomes.',
      challenges: 'Open office gossip cultures and environments that force superficial smiles over real problem solving.',
      suitableEnvironments: ['Psychotherapy & psychiatry', 'Cybersecurity & intelligence', 'Forensic & legal research', 'Deep science & surgery', 'Strategic investment'],
    },
    money: {
      spendingTendencies: 'Extremely private about your net worth. You dislike flaunting wealth, preferring quiet, lethal financial independence.',
      securityView: 'Money is sovereignty. Having financial leverage guarantees that nobody can control your fate.',
      riskAttitude: 'Calculated and strategic; you excel at identifying undervalued turnaround opportunities before the market catches on.',
      practicalAdvice: 'Do not hoard financial secrets from a trustworthy life partner—true partnership requires financial transparency.',
    },
  },

  sagittarius: {
    key: 'sagittarius',
    name: 'Sagittarius',
    glyph: '♐',
    symbolName: 'The Archer',
    dateRange: 'November 22 – December 21',
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanet: 'Jupiter',
    tagline: 'The Seeker of Wisdom & Boundless Horizons',
    shortDescription: 'Adventurous • Philosophical • Candid • Optimistic',
    visualThemeDescription: 'Deep royal purple, midnight blue, starlit celestial arches, and soaring arrows.',
    theme: {
      primaryColor: '#a855f7',
      secondaryColor: '#6366f1',
      accentColor: '#d8b4fe',
      gradientClass: 'from-purple-900/35 via-indigo-900/25 to-slate-950/20',
      bgGlowClass: 'rgba(168, 85, 247, 0.20)',
      borderClass: 'border-purple-500/35 hover:border-purple-300/60',
      textAccentClass: 'text-purple-300',
      badgeBg: 'bg-purple-500/15 text-purple-200 border-purple-500/35',
      moodKeywords: ['Cosmic', 'Panoramic', 'Exuberant', 'Philosophic'],
    },
    constellation: {
      stars: [
        { x: 30, y: 65, size: 2.8, label: 'Kaus Australis' },
        { x: 45, y: 55, size: 2.4, label: 'Kaus Media' },
        { x: 50, y: 40, size: 2.2, label: 'Kaus Borealis' },
        { x: 65, y: 45, size: 2.7, label: 'Nunki' },
        { x: 75, y: 55, size: 2.0, label: 'Ascella' },
        { x: 60, y: 75, size: 1.8 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 0 },
      ],
    },
    personality: {
      summary:
        'You are allergic to confinement. Your spirit craves wide-open spaces, big philosophical questions, and the intoxicating thrill of discovering what lies over the next horizon.',
      essence:
        'You possess an infectious, buoyant optimism. You speak the plain truth without calculated pretense, and your natural curiosity has you reading history, booking sudden flights, and interrogating the meaning of existence.',
      nuance:
        'In your enthusiasm for the big picture, everyday maintenance can feel like prison. Your trademark blunt honesty can occasionally wound tender feelings, as you focus on what is objectively true while forgetting how it sounds.',
    },
    strengths: [
      {
        title: 'Contagious Optimism',
        description: 'You believe things will work out, helping fearful peers expand their faith in possibility.',
      },
      {
        title: 'Panoramic Vision',
        description: 'You connect wide philosophical ideas and see grand opportunities long before others see the trend.',
      },
      {
        title: 'Radical Authenticity',
        description: 'You do not pretend to be something you are not; your blunt sincerity is refreshingly real.',
      },
      {
        title: 'Fearless Exploration',
        description: 'You thrive when thrown into foreign cultures, strange cities, and uncharted intellectual waters.',
      },
    ],
    challenges: [
      {
        title: 'Tactless Delivery',
        description: 'Dropping heavy truths without situational sensitivity can unnecessarily bruise relationships.',
      },
      {
        title: 'Commitment Claustrophobia',
        description: 'When life settles into predictable domesticity, you may panic and create disruptions just to feel free.',
      },
      {
        title: 'Overpromising in the Moment',
        description: 'Your expansive generosity can cause you to promise more than your calendar and energy can realistically deliver.',
      },
    ],
    love: {
      howYouLove:
        'You love as a travel companion and co-philosopher. You want a relationship that feels like a shared expedition across the world.',
      whatYouNeed:
        'Freedom to roam, intellectual depth, shared wanderlust, and a partner who laughs at life’s absurdities.',
      whatAttractsYou:
        'Worldliness, independent ambition, spontaneous humor, and people who do not cling with suffocating need.',
      whatCausesProblems:
        'Jealous surveillance, nagging about small details, or being tied down to rigid domestic agendas.',
    },
    career: {
      workStyle: 'Independent, visionary, and mobile. You need autonomy and freedom from micro-management.',
      strengths: 'Cross-cultural liaison, publishing, international business, academic research, and motivational coaching.',
      motivation: 'Expanding knowledge, exploring foreign worlds, and inspiring people to live more bravely.',
      challenges: 'Repetitive clerical duty and strict corporate desk detention.',
      suitableEnvironments: ['Higher academia & philosophy', 'International trade & diplomacy', 'Travel & documentary media', 'Publishing & thought leadership', 'Adventure sports'],
    },
    money: {
      spendingTendencies: 'You spend gladly on travel, education, masterclasses, and spontaneous experiences that expand your perspective.',
      securityView: 'You believe resources will always materialize when you are in alignment with your true purpose.',
      riskAttitude: 'High; you possess immense trust in the universe, which can occasionally lead to financial carelessness.',
      practicalAdvice: 'Appoint an automated retirement fund so your nomadic adventures do not leave your future self stranded.',
    },
  },

  capricorn: {
    key: 'capricorn',
    name: 'Capricorn',
    glyph: '♑',
    symbolName: 'The Sea-Goat',
    dateRange: 'December 22 – January 19',
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanet: 'Saturn',
    tagline: 'The Master of Mastery, Discipline & Legacy',
    shortDescription: 'Ambitious • Strategic • Resilient • Disciplined',
    visualThemeDescription: 'Dark charcoal, deep slate, rugged granite stone, and understated mountain sophistication.',
    theme: {
      primaryColor: '#475569',
      secondaryColor: '#334155',
      accentColor: '#94a3b8',
      gradientClass: 'from-slate-800/35 via-zinc-900/30 to-black/30',
      bgGlowClass: 'rgba(71, 85, 105, 0.20)',
      borderClass: 'border-slate-500/35 hover:border-slate-400/60',
      textAccentClass: 'text-slate-300',
      badgeBg: 'bg-slate-700/30 text-slate-200 border-slate-500/40',
      moodKeywords: ['Granite', 'Architectural', 'Disciplined', 'Sovereign'],
    },
    constellation: {
      stars: [
        { x: 30, y: 40, size: 2.4, label: 'Algedi' },
        { x: 38, y: 45, size: 2.2, label: 'Dabih' },
        { x: 55, y: 70, size: 1.9 },
        { x: 75, y: 65, size: 2.5, label: 'Deneb Algedi' },
        { x: 80, y: 55, size: 2.1, label: 'Nashira' },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 0 },
      ],
    },
    personality: {
      summary:
        'You were born an old soul and grow younger with every passing decade. You understand that real achievements take time, discipline, and emotional stamina. You do not chase shortcuts because you respect the mountain.',
      essence:
        'You carry an understated gravity. People look to you when the storm hits because they know you will not dissolve into hysteria. You hold your promises sacred and take deep pride in self-reliance.',
      nuance:
        'You can shoulder immense burdens without telling anyone, feeling that asking for support is an unacceptable sign of weakness. Your dry humor is legendary, though you often hide your emotional sensitivity beneath a granite mask.',
    },
    strengths: [
      {
        title: 'Monumental Discipline',
        description: 'You can execute the unglamorous daily work long after initial motivation has deserted everyone else.',
      },
      {
        title: 'Long-Range Strategy',
        description: 'You play the ten-year game, positioning resources with quiet mastery while competitors burn out.',
      },
      {
        title: 'Crisis Stoicism',
        description: 'When disaster strikes, you lock down emotional panic and systematically lead the recovery.',
      },
      {
        title: 'Dry, Perceptive Wit',
        description: 'Your understated observations cut straight through hype with exquisite comedic timing.',
      },
    ],
    challenges: [
      {
        title: 'Emotional Isolation',
        description: 'Believing that everything rests on your shoulders alone can cut you off from the warmth of vulnerability.',
      },
      {
        title: 'Pessimistic Preparation',
        description: 'In your desire to be prepared for the worst, you can sometimes mistake cynicism for realism.',
      },
      {
        title: 'Work-Identity Conflation',
        description: 'You may find it terrifying to simply rest, measuring your worth solely by what you produce.',
      },
    ],
    love: {
      howYouLove:
        'You love quietly, reliably, and for the long haul. You show devotion by paying bills, fixing broken steps, and providing unbreakable security.',
      whatYouNeed:
        'Loyalty, mutual respect for your ambitions, emotional maturity, and a partner whose word is bond.',
      whatAttractsYou:
        'Competence, subtle sophistication, integrity, and people who do not require constant emotional maintenance.',
      whatCausesProblems:
        'Flippant irresponsibility, public tantrums, financial carelessness, or lack of long-term vision.',
    },
    career: {
      workStyle: 'Executive, disciplined, and systematic. You build organizations meant to survive generations.',
      strengths: 'Corporate leadership, financial governance, architecture, engineering, and institutional stewardship.',
      motivation: 'Building a lasting legacy, earning earned authority, and mastering a rigorous craft.',
      challenges: 'Chaotic environments with no accountability and leaders who reward sycophancy over competence.',
      suitableEnvironments: ['Executive administration', 'Civil engineering & architecture', 'Institutional finance', 'Judicial systems', 'Enterprise strategy'],
    },
    money: {
      spendingTendencies: 'Disciplined and long-sighted. You invest in solid assets, land, index portfolios, and durability.',
      securityView: 'Financial independence is non-negotiable. It is the fortress that protects your autonomy.',
      riskAttitude: 'Measured and calculated; you avoid speculative fads in favor of proven compound interest.',
      practicalAdvice: 'Permit yourself to enjoy the fruits of your labor now, rather than postponing all comfort to an imaginary retirement.',
    },
  },

  aquarius: {
    key: 'aquarius',
    name: 'Aquarius',
    glyph: '♒',
    symbolName: 'The Water-Bearer',
    dateRange: 'January 20 – February 18',
    element: 'Air',
    modality: 'Fixed',
    rulingPlanet: 'Uranus & Saturn',
    tagline: 'The Visionary of Collective Progress & Individuality',
    shortDescription: 'Innovative • Objective • Humanitarian • Independent',
    visualThemeDescription: 'Electric cyan, neon sky blue, ultraviolet highlights, and clean futuristic geometry.',
    theme: {
      primaryColor: '#06b6d4',
      secondaryColor: '#0284c7',
      accentColor: '#67e8f9',
      gradientClass: 'from-cyan-900/35 via-sky-950/25 to-slate-950/20',
      bgGlowClass: 'rgba(6, 182, 212, 0.20)',
      borderClass: 'border-cyan-500/35 hover:border-cyan-300/65',
      textAccentClass: 'text-cyan-300',
      badgeBg: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/35',
      moodKeywords: ['Futuristic', 'Electric', 'Independent', 'Crystalline'],
    },
    constellation: {
      stars: [
        { x: 30, y: 35, size: 2.7, label: 'Sadalmelik' },
        { x: 45, y: 40, size: 2.9, label: 'Sadalsuud' },
        { x: 55, y: 55, size: 2.2, label: 'Sadachbia' },
        { x: 65, y: 65, size: 2.4, label: 'Skat' },
        { x: 75, y: 75, size: 1.8 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
      ],
    },
    personality: {
      summary:
        'You march to a beat that the rest of the world will only start hearing ten years from now. You question traditions simply because they are old, and you look at humanity with a wide-angle, democratic lens.',
      essence:
        'You have an fiercely independent streak. You cannot bear being pigeonholed or forced into a cookie-cutter mold. You love society as a whole and genuinely care about civil liberty and societal evolution.',
      nuance:
        'While you care deeply about humanity on a collective level, dealing with messy, irrational personal emotions can feel uncomfortable. Your instinct when emotional drama strikes is to retreat to a bird’s-eye, intellectual balcony.',
    },
    strengths: [
      {
        title: 'Original Thinking',
        description: 'You break orthodoxies and invent innovative ways around systemic roadblocks.',
      },
      {
        title: 'Democratic Egalitarianism',
        description: 'You treat kings and janitors with identical respect, judging people solely by their character.',
      },
      {
        title: 'Emotional Objectivity',
        description: 'You can stay cool during heated debates, assessing facts without being blinded by sentiment.',
      },
      {
        title: 'Loyal Community Catalyst',
        description: 'You gather diverse thinkers together to build collaborative movements for the collective good.',
      },
    ],
    challenges: [
      {
        title: 'Aloof Detachment',
        description: 'Retreating into your intellect when a loved one needs emotional warmth can make you seem indifferent.',
      },
      {
        title: 'Intellectual Stubbornness',
        description: 'Under your progressive exterior, your fixed convictions can be surprisingly rigid once set.',
      },
      {
        title: 'Contrarianism for its Own Sake',
        description: 'You can sometimes oppose convention purely to prove your nonconformity.',
      },
    ],
    love: {
      howYouLove:
        'You love as best friends first. You need freedom, mutual respect for each other’s quirks, and intellectual partnership.',
      whatYouNeed:
        'Breathing room, zero suffocating jealousy, stimulating conversation, and shared humanitarian values.',
      whatAttractsYou:
        'Originality, intelligence, quiet rebellion, and people who do not mold their identity to fit societal expectations.',
      whatCausesProblems:
        'Possessiveness, emotional manipulation, or partners who try to tame your social circle.',
    },
    career: {
      workStyle: 'Visionary, collaborative, and progressive. You shine when working on future-shaping initiatives.',
      strengths: 'Technology architecture, social activism, scientific innovation, community engineering, and future forecasting.',
      motivation: 'Building systems that liberate human potential and modernize outdated institutions.',
      challenges: 'Rigid bureaucratic hierarchies that punish thinking outside designated protocols.',
      suitableEnvironments: ['Software & open-source tech', 'Clean energy & science', 'Human rights & policy', 'Community organizing', 'Space exploration'],
    },
    money: {
      spendingTendencies: 'Practical yet experimental. You spend on cutting-edge tech, renewable solutions, and causes you champion.',
      securityView: 'Money is an enabler of freedom and collective innovation rather than a badge of personal status.',
      riskAttitude: 'Comfortable with experimental technological and ethical investments.',
      practicalAdvice: 'Make sure your personal savings are solid before funding idealistic community ventures.',
    },
  },

  pisces: {
    key: 'pisces',
    name: 'Pisces',
    glyph: '♓',
    symbolName: 'The Fishes',
    dateRange: 'February 19 – March 20',
    element: 'Water',
    modality: 'Mutable',
    rulingPlanet: 'Neptune & Jupiter',
    tagline: 'The Dreamer of Oceanic Compassion & Creative Mystery',
    shortDescription: 'Imaginative • Empathetic • Mystical • Gentle',
    visualThemeDescription: 'Ethereal teal, ocean depths, phosphorescent sea greens, and dreamy astral mist.',
    theme: {
      primaryColor: '#14b8a6',
      secondaryColor: '#0d9488',
      accentColor: '#5eead4',
      gradientClass: 'from-teal-900/35 via-cyan-950/25 to-blue-950/25',
      bgGlowClass: 'rgba(20, 184, 166, 0.20)',
      borderClass: 'border-teal-500/35 hover:border-teal-300/65',
      textAccentClass: 'text-teal-300',
      badgeBg: 'bg-teal-500/15 text-teal-200 border-teal-500/35',
      moodKeywords: ['Abyssal', 'Dreamlike', 'Luminescent', 'Fluid'],
    },
    constellation: {
      stars: [
        { x: 25, y: 40, size: 2.6, label: 'Alrescha' },
        { x: 40, y: 55, size: 2.0 },
        { x: 55, y: 65, size: 2.2, label: 'Fumalsamakah' },
        { x: 70, y: 50, size: 2.4 },
        { x: 80, y: 35, size: 2.0 },
        { x: 50, y: 30, size: 1.8 },
      ],
      lines: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 0, to: 5 },
        { from: 5, to: 4 },
        { from: 4, to: 3 },
      ],
    },
    personality: {
      summary:
        'You have one foot in this tangible world and the other in the world of dreams, music, and unspoken emotion. Your capacity for empathy is boundless, often feeling another’s pain as if it were your own.',
      essence:
        'You possess a rich, cinematic imagination. You understand that logic can only take a person so far, and that the deepest human truths are often communicated through art, silence, and intuition.',
      nuance:
        'Because your emotional boundaries are fluid, you can absorb the psychic residue of everyone you interact with. When overwhelmed by the harshness of reality, your temptation is to escape through fantasy, sleep, or daydreaming.',
    },
    strengths: [
      {
        title: 'Boundless Compassion',
        description: 'You hold non-judgmental space for broken people, forgiving flaws others would condemn.',
      },
      {
        title: 'Artistic & Symbolic Genius',
        description: 'You translate deep, ephemeral feelings into transcendent music, poetry, visuals, and stories.',
      },
      {
        title: 'Deep Spiritual Intuition',
        description: 'You sense impending transitions and unannounced truths through dreams and instinctive hunches.',
      },
      {
        title: 'Fluid Adaptation',
        description: 'You can navigate diverse human worlds with a gentle, shape-shifting grace.',
      },
    ],
    challenges: [
      {
        title: 'Porous Boundaries',
        description: 'Failing to maintain boundaries can leave you drained by energetic vampires and chronic victims.',
      },
      {
        title: 'Escapist Tendencies',
        description: 'When practical problems mount, hiding in daydreams is easier than dealing with gritty logistics.',
      },
      {
        title: 'Martyrdom Reflex',
        description: 'You may sacrifice your own well-being to save someone who has zero interest in helping themselves.',
      },
    ],
    love: {
      howYouLove:
        'You love with spiritual romance and unconditional acceptance. You view love as a sacred union of souls rather than a contractual agreement.',
      whatYouNeed:
        'Emotional tenderness, deep creative understanding, gentle communication, and a partner who respects your need for retreat.',
      whatAttractsYou:
        'Artistic souls, gentle sensitivity, depth, and people who treat vulnerable beings with kindness.',
      whatCausesProblems:
        'Harsh cynicism, emotional cruelty, rigid practicality that mocks your intuition, and broken trust.',
    },
    career: {
      workStyle: 'Intuitive, imaginative, and holistic. You work best in spaces with emotional breathing room and artistic freedom.',
      strengths: 'Creative composition, cinema, humanitarian care, holistic therapies, and non-verbal communication.',
      motivation: 'Creating beauty, relieving suffering, and tapping into transcendent creative flow.',
      challenges: 'Ruthless competitive sales cultures and dry spreadsheets with zero human connection.',
      suitableEnvironments: ['Music & audio production', 'Cinema & screenwriting', 'Holistic healthcare & hospice', 'Marine biology & ocean conservation', 'Charitable foundations'],
    },
    money: {
      spendingTendencies: 'You view money with fluid detachment, spending generously on gifts, creative materials, and charity.',
      securityView: 'Money is a flowing tide rather than a permanent fixture. You trust that resources ebb and flow.',
      riskAttitude: 'Can be careless if ungrounded; you benefit from automatic financial boundaries.',
      practicalAdvice: 'Set up automated financial guards so your boundless generosity does not leave your basic bills unpaid.',
    },
  },
};
