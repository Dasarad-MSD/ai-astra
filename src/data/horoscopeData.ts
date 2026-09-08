import { DailyHoroscope, ZodiacSignKey } from '../types';

interface HoroscopePool {
  love: string[];
  work: string[];
  money: string[];
  mood: string[];
  advice: string[];
}

const SIGN_POOLS: Record<ZodiacSignKey, HoroscopePool> = {
  aries: {
    love: [
      'If something has been bothering you, saying it directly will work much better than dropping subtle hints.',
      'Plan an impromptu shared experience with your partner or send a spontaneous message to someone you miss.',
      'Listen fully before responding today. Giving your partner room to finish will prevent a needless misunderstanding.',
      'Take initiative on a romantic gesture you have been postponing. Your warmth is especially magnetic today.',
    ],
    work: [
      'Focus on finishing one critical task first rather than trying to kick off four separate projects simultaneously.',
      'A constructive conversation with a teammate will clear an unnecessary roadblock. Lead with clarity.',
      'Channel your restless drive into physical organizing or backlog clearing before starting something brand new.',
      'Trust your initial instinct on a tactical problem, but double-check your numbers before hitting send.',
    ],
    money: [
      'Pause for 24 hours before ordering that exciting new gear. Ask yourself if it solves an immediate real need.',
      'A practical check of your recent digital subscriptions could reveal easy savings right now.',
      'Avoid high-stakes financial bets today; steady progress beats risky shortcuts.',
      'Set aside a small budget for weekend enjoyment so you do not feel needlessly constrained.',
    ],
    mood: [
      'Your physical energy is elevated today. A brisk walk or vigorous workout will channel any nervous restlessness.',
      'You may feel impatient with sluggish collaborators. Take a deep breath and give them space.',
      'Optimistic and action-oriented. You feel ready to tackle something you have put off.',
      'Clear your immediate workspace; visual clutter will weigh on your mental focus today.',
    ],
    advice: [
      'Do not make a permanent decision because of a temporary emotion.',
      'Speed is only an advantage when you are traveling in the right direction.',
      'Courage is not the absence of doubt, but the resolve that something else matters more.',
      'Finish today what will grant you peace of mind tomorrow.',
    ],
  },
  taurus: {
    love: [
      'Simple, quiet presence matters more than grand gestures today. Cook a good meal or share a quiet walk.',
      'Speak your underlying appreciation aloud. Don’t assume your partner automatically knows you cherish them.',
      'Notice if you are digging your heels into an argument simply because you dislike being told what to do.',
      'Tactile affection and genuine reliability will melt away any lingering tension.',
    ],
    work: [
      'Stick to your steady pace. The rush around you is temporary; your thoroughness will save the team rework later.',
      'A project you have nurtured patiently is nearing a quiet milestone. Review the details with satisfaction.',
      'Resist colleagues pushing for sloppy shortcuts. Quality is your signature strength.',
      'Declutter a messy filing system or desktop. Tactile order restores your productivity.',
    ],
    money: [
      'A disciplined review of your savings will provide genuine peace of mind today.',
      'Think twice before making an impulse purchase for the home. Wait for the weekend sale.',
      'Good day to negotiate or look into steady long-term yield. Avoid speculative trends.',
      'Spend on nourishing, wholesome food rather than disposable conveniences.',
    ],
    mood: [
      'Grounded, patient, and serene. You are the calm anchor for more anxious friends today.',
      'You might crave extra silence and personal space this evening. Honor that boundary.',
      'Sensory comfort will recharge your batteries: soft lighting, comforting music, and good rest.',
      'Step outside and touch the natural world for ten minutes to reset your equilibrium.',
    ],
    advice: [
      'Patience is not passive waiting; it is the calm mastery of time.',
      'True wealth is having enough peace of mind to enjoy the ordinary moments.',
      'Protect your calm as fiercely as you protect your resources.',
      'Small, consistent acts construct stronger walls than sudden frantic bursts.',
    ],
  },
  gemini: {
    love: [
      'A witty, playful conversation will spark delightful chemistry. Ask an unusual question to break routine.',
      'Be present in the moment rather than checking your notifications while your partner is talking.',
      'Share an interesting article or book that made you think. Intellectual exchange is your love language.',
      'Express genuine feelings directly instead of cloaking vulnerability in quick jokes.',
    ],
    work: [
      'Synthesize disparate research into one clean summary. Your knack for translation is needed today.',
      'Close redundant browser tabs and commit to one single priority for the next two hours.',
      'A spontaneous collaboration could unlock an answer that was eluding you while working solo.',
      'Clarify expectations in writing to ensure everyone is aligned on the deliverables.',
    ],
    money: [
      'Audit your recurring digital memberships. You may be paying for apps you have not opened in months.',
      'Avoid browsing shopping sites when you are simply bored or seeking a quick dopamine hit.',
      'Invest in a book, skill tutorial, or learning tool that yields compounding value.',
      'Double check invoices and change amounts before finalizing transfers today.',
    ],
    mood: [
      'Mentally agile and inquisitive. You will enjoy connecting unexpected ideas today.',
      'Overstimulation is possible by late afternoon. Unplug from social feeds for a gentle reset.',
      'Playful and expressive. Call a friend you have not laughed with in a while.',
      'Write down passing thoughts in a notebook so your head does not feel crowded.',
    ],
    advice: [
      'Listening with full attention is the rarest gift you can give someone today.',
      'Depth of focus creates far more leverage than breadth of superficial effort.',
      'Not every thought requires an immediate announcement.',
      'Curiosity opens doors, but commitment walks all the way through them.',
    ],
  },
  cancer: {
    love: [
      'If you are feeling tender, let your partner know gently instead of retreating behind a chilly silence.',
      'A warm home-cooked meal or a cozy evening indoors will deepen your sense of emotional security.',
      'Release an old grievance from last month. Forgiveness will unburden your own heart first.',
      'Tell someone you love how safe they make you feel. Genuine vulnerability invites closeness.',
    ],
    work: [
      'Your intuition about a team dynamic or client concern is accurate. Approach it with gentle tact.',
      'Create a calm, protective sanctuary in your work area to keep external office anxiety at bay.',
      'Focus on tasks that directly assist people. Meaningful service energizes you more than cold metrics.',
      'Avoid absorbing workplace gossip or manufactured drama that does not belong to you.',
    ],
    money: [
      'Review your domestic expenditures and build up your emergency fund with another steady deposit.',
      'Steer clear of emotional shopping when you are simply looking for comfort.',
      'Spending on lasting home repairs or family comfort is well-aspected today.',
      'A conservative approach to financial promises will protect your peace of mind.',
    ],
    mood: [
      'Reflective and deeply perceptive. Give yourself some quiet time near water or in gentle lighting.',
      'Notice if you are carrying worries that belong to others. Hand them back with compassion.',
      'Nostalgic memories may surface. Smile at the past without wishing to live in it.',
      'An early night with a comforting book will restore your emotional resilience.',
    ],
    advice: [
      'You cannot pour comfort into other cups when your own reservoir is bone dry.',
      'Gentleness is not weakness; it takes profound strength to remain kind in a sharp world.',
      'Release what was so you can receive the blessing of what is.',
      'Trust the wisdom of your quiet inner hunch over the noise of the crowd.',
    ],
  },
  leo: {
    love: [
      'Shine your generous warmth onto your partner today. An unexpected compliment will brighten their whole week.',
      'Put your pride aside if a minor misunderstanding occurs. Warm hugs resolve what stubborn arguments cannot.',
      'Plan a vibrant outing where both of you can dress up and celebrate being alive.',
      'Let your partner take the spotlight on an achievement without turning the conversation back to you.',
    ],
    work: [
      'Step up and present your ideas with authentic confidence. Others are waiting for clear direction.',
      'Encourage a colleague who seems demoralized. Your praise carries extraordinary weight today.',
      'Take creative ownership of a stagnating deliverable and infuse it with distinct personality.',
      'Focus on real execution rather than worrying about who receives the credit for the initial spark.',
    ],
    money: [
      'Enjoy a touch of luxury, but do not spend money simply to project an image of prosperity.',
      'Good moment to invest in your own creative tools, professional wardrobe, or personal brand.',
      'Set clear boundaries if friends ask for loans without realistic repayment plans.',
      'Celebrate a financial milestone, no matter how modest, to reinforce good habits.',
    ],
    mood: [
      'Vibrant, radiant, and optimistic. You have plenty of energy to inspire people around you.',
      'Remember that you do not need an audience to validate your inherent worth.',
      'Channel your creative fire into a hobby, music, or cooking with gusto.',
      'Soak up some natural sunlight early in the day to align your vitality.',
    ],
    advice: [
      'A true sovereign does not demand respect; their natural generosity commands it.',
      'Your warmth can either burn or nourish—choose to be the steady hearth.',
      'Never dim your authentic light just to make insecure people comfortable.',
      'Pride defends the ego, but humility protects the soul.',
    ],
  },
  virgo: {
    love: [
      'Replace constructive criticism with a simple statement of gratitude today. Appreciation works miracles.',
      'Notice the small ways your partner supports you that often slip past without a "thank you."',
      'Let go of trying to plan every minute of your evening. Spontaneity can be delightful.',
      'Allow someone to care for you without jumping in to correct their method.',
    ],
    work: [
      'Your sharp eye will catch an important detail others overlooked. Flag it constructively.',
      'Organize your digital files and prioritize the top two deliverables that genuinely move the needle.',
      'Avoid getting bogged down in endless perfectionism. At some point, "done and high quality" is victory.',
      'Offer assistance to a struggling peer; your methodical approach will relieve their panic.',
    ],
    money: [
      'Review your financial accounts and balance your ledger. Financial clarity will bring instant calm.',
      'Avoid purchasing cheap disposable alternatives; invest in durable quality that endures.',
      'Research a major upcoming expense thoroughly before committing your funds.',
      'You are managing your resources prudently—permit yourself a modest, wholesome indulgence.',
    ],
    mood: [
      'Clear, focused, and analytical. You are well-positioned to untangle messy knots today.',
      'Turn down your internal critic volume. Speak to yourself with the same kindness you show others.',
      'A neat physical desk or organized kitchen will provide surprising psychological relief.',
      'Take regular micro-breaks from screens to prevent neck and eye fatigue.',
    ],
    advice: [
      'Perfection is the enemy of completion and the thief of peace.',
      'You do not have to fix everything today; doing the next right thing is enough.',
      'Give yourself credit for the mountain you have already climbed.',
      'Order in the physical environment brings stillness to the inner mind.',
    ],
  },
  libra: {
    love: [
      'Have that honest conversation you have been diplomatically avoiding. Kind honesty builds real trust.',
      'Bring beauty into your date night: light candles, play evocative music, and enjoy the aesthetic atmosphere.',
      'Make sure you are not suppressing your own preferences just to avoid rocking the boat.',
      'A thoughtful message or a small handwritten note will touch someone’s heart deeply today.',
    ],
    work: [
      'Act as the bridge in a tense team meeting. Your balanced viewpoint can unify opposing factions.',
      'Make a clear decision on an issue you have deliberated over for days. Trust your inner scale.',
      'Refine the visual aesthetic and typography of your documents or presentations.',
      'Ensure workloads are distributed equitably across your team before committing to deadlines.',
    ],
    money: [
      'Be mindful of spending on luxury items simply to soothe emotional stress.',
      'Invest in art, home harmony, or tools that enhance your everyday comfort.',
      'Review your joint finances or partnership contracts with a clear, impartial eye.',
      'Balance your current lifestyle desires against your future financial freedom goals.',
    ],
    mood: [
      'Gracious, sociable, and balanced. You will enjoy harmonizing spaces and bringing people together.',
      'Step away from social chaos if you feel overwhelmed by everyone else’s opinions.',
      'Surround yourself with pleasing colors and symmetrical designs to center your mind.',
      'Do something purely for your own pleasure without seeking anyone else’s sign-off.',
    ],
    advice: [
      'True peace is not the absence of tension, but the presence of truth.',
      'Choosing not to decide is still a decision—make your own choice with confidence.',
      'Balance is not a static posture; it is an active, ongoing dance.',
      'Never trade your inner integrity for temporary external approval.',
    ],
  },
  scorpio: {
    love: [
      'Choose openness over testing your partner. Sharing a private truth will deepen your bond immeasurably.',
      'Look past surface words to understand what your loved one is really asking for beneath.',
      'Release the desire to keep score on historical slights. Clean slates invite genuine intimacy.',
      'An intense, honest conversation will clear away months of unspoken ambiguity.',
    ],
    work: [
      'Dive deep into an investigative task. Your ability to uncover root causes is unmatched today.',
      'Keep your long-term strategy confidential until the execution foundation is completely solid.',
      'A challenging negotiation requires your calm, unblinking focus. Stay steady.',
      'Trust your instincts regarding who has genuine integrity and who is merely performing.',
    ],
    money: [
      'Review your financial security shields: insurance, emergency savings, and private accounts.',
      'Avoid impulsive purchases driven by frustration. Channel that intensity into earning power.',
      'Good day to eliminate a lingering debt or resolve an unresolved financial obligation.',
      'Keep your financial plans private; quiet accumulation generates steady leverage.',
    ],
    mood: [
      'Perceptive, focused, and quietly powerful. You see straight through superficial pretense.',
      'Allow yourself to let down your guard in safe company. Constant vigilance is exhausting.',
      'Channel emotional intensity into a deep workout, creative project, or solitary research.',
      'Embrace personal renewal: clear out old belongings that tether you to outgrown memories.',
    ],
    advice: [
      'Holding onto anger is like drinking poison and expecting the other person to suffer.',
      'Your greatest power lies in your capacity to transform pain into wisdom.',
      'Vulnerability with the right person is the ultimate demonstration of courage.',
      'The deepest rivers run silent and carve canyons through stone.',
    ],
  },
  sagittarius: {
    love: [
      'Deliver the truth with tenderness today. Honesty without compassion can unintentionally wound.',
      'Invite your partner on an impromptu micro-adventure: a new neighborhood, park, or restaurant.',
      'Share your big philosophical visions with someone who appreciates your expansive spirit.',
      'Honor your commitments while preserving healthy breathing room for your independent interests.',
    ],
    work: [
      'Pitch the bold, expansive vision, but ensure you outline the immediate first step for teammates.',
      'Look beyond local constraints; international or cross-disciplinary perspectives will crack the problem.',
      'Wrap up current obligations before volunteering for a brand new grand initiative.',
      'Your natural enthusiasm will rally a weary group. Remind them of the larger purpose.',
    ],
    money: [
      'Check your travel and recreational spending against your monthly savings targets.',
      'Invest in learning, foreign language tools, or educational courses that expand your horizon.',
      'Avoid high-risk speculative bets that promise overnight windfalls. Sustainable wealth takes steady roots.',
      'Set aside a dedicated adventure fund so wanderlust does not strain your everyday budget.',
    ],
    mood: [
      'Buoyant, curious, and forward-looking. You are hungry for expansive ideas and fresh air.',
      'If you feel confined by four walls, take a long walk outside to reset your perspective.',
      'Laughter is your finest medicine today—share an amusing story with a close friend.',
      'Focus on what you can learn from today’s friction rather than complaining about the delay.',
    ],
    advice: [
      'Wanderlust is noble, but remember that peace is a location inside yourself.',
      'Speak truth not to win an argument, but to illuminate the path forward.',
      'The arrow flies furthest when the archer is centered and still.',
      'An open mind requires the discernment to recognize what is genuinely worthy of entry.',
    ],
  },
  capricorn: {
    love: [
      'Show your affection through quiet, dependable acts of service. Your reliability is deeply valued.',
      'Let your guard down this evening. Put away the work laptop and be fully emotionally present.',
      'Share your private worries with your partner; they want to support you, not just admire your strength.',
      'Acknowledge your partner’s patience and celebrate the life you are constructing side by side.',
    ],
    work: [
      'Your methodical discipline will pay off today. Tackle the most daunting task first thing.',
      'Take pride in the craftsmanship of your output. Your reputation for excellence continues to grow.',
      'Lead with calm authority. In moments of organizational friction, people look to your stability.',
      'Delegate repetitive duties so you can focus on high-leverage architectural strategy.',
    ],
    money: [
      'Your conservative financial instincts are serving you well. Review your long-term compounding growth.',
      'Invest in quality tools that directly enhance your professional efficiency.',
      'Resist cutting necessary expenses out of vague anxiety—proper maintenance prevents costly breakdowns.',
      'A disciplined review of business contracts or career trajectories will highlight opportunities.',
    ],
    mood: [
      'Stoic, determined, and quietly focused. You feel capable of moving heavy stones today.',
      'Remember that rest is an essential component of elite performance, not a waste of time.',
      'Your dry sense of humor will bring much-needed levity to a serious situation.',
      'Celebrate how far you have climbed rather than staring exclusively at the peak ahead.',
    ],
    advice: [
      'The mountain is conquered one deliberate step at a time; do not rush the ascent.',
      'True strength includes the humility to ask for a hand when the load is heavy.',
      'Build not just for survival today, but for a legacy that outlasts the season.',
      'Rest is not earned by exhaustion; it is required for sustainability.',
    ],
  },
  aquarius: {
    love: [
      'Connect on an intellectual level first today. A deep conversation about the future will spark warmth.',
      'Do not shy away from emotional topics. Sometimes your partner needs warmth, not objective analysis.',
      'Celebrate your partner’s individuality and give them the same spacious freedom you cherish.',
      'Plan a social gathering or introduce your loved one to a community you care about.',
    ],
    work: [
      'Propose an unconventional solution to an old bottleneck. Your perspective is ahead of the curve.',
      'Collaborate with diverse teammates. Cross-functional ideas will produce the strongest breakthroughs.',
      'Step back from technical details to ensure the broader user experience remains intuitive.',
      'Guard against being contrarian simply for the sake of opposing the majority.',
    ],
    money: [
      'Explore tech-forward or socially conscious financial tools that align with your values.',
      'Avoid impulsive spending on experimental tech gadgets that you may rarely use.',
      'Contribute to a community project or ethical initiative that you believe in.',
      'Ensure your personal safety net is secure before allocating funds to speculative ventures.',
    ],
    mood: [
      'Inventive, visionary, and socially conscious. Your mind is buzzing with forward-looking ideas.',
      'Take a break from digital screens to reconnect with your physical senses this evening.',
      'Spend time with peers who stimulate your intellect without exhausting your spirit.',
      'Embrace your quirks—what makes you different is exactly what makes you indispensable.',
    ],
    advice: [
      'You cannot improve the world by detaching yourself from the people who live in it.',
      'Innovation without empathy is merely cleverness; combined with compassion, it transforms lives.',
      'Honor your individuality without holding yourself above the collective.',
      'The future is shaped by those who dare to question the necessity of the current rules.',
    ],
  },
  pisces: {
    love: [
      'Express your love through creative, gentle romance. A heartfelt gesture will speak volumes.',
      'Communicate your emotional boundaries clearly instead of silently hoping others guess them.',
      'Listen to your intuitive gut check regarding someone’s real intentions.',
      'Enjoy shared daydreaming and creative music together without rushing to practical conclusions.',
    ],
    work: [
      'Trust your creative instincts on a visual, narrative, or human-centered project today.',
      'Break a large, amorphous dream into three concrete, step-by-step actions you can finish before sunset.',
      'Set clear boundaries around your time to prevent others from taking advantage of your kindness.',
      'Your empathetic listening will help resolve a dispute between two anxious peers.',
    ],
    money: [
      'Automate your savings and bill payments so you do not have to stress over mundane details.',
      'Be careful with lending money to friends when your own reserves require protection.',
      'Spend on artistic, musical, or restorative wellness experiences that nourish your spirit.',
      'A practical review of current spending will keep your daydreams comfortably grounded.',
    ],
    mood: [
      'Dreamy, intuitive, and deeply empathetic. Honor your need for creative and emotional retreat.',
      'Take a warm bath, listen to evocative music, or spend time near water to restore yourself.',
      'Protect your energetic field: do not absorb emotions from strangers or chaotic headlines.',
      'Write down your dreams or sketch an idea that arrived during a quiet moment today.',
    ],
    advice: [
      'Boundaries are not walls of exclusion; they are the shores that contain your sacred ocean.',
      'Do not let the cynicism of the world harden the gentle compassion in your heart.',
      'Anchor your dreams in daily practice so they have a vessel through which to enter reality.',
      'Trust what your spirit whispers before the intellect rushes in with doubts.',
    ],
  },
};

/**
 * Returns deterministic daily horoscope for a given sign and calendar date
 */
export function getDailyHoroscope(sign: ZodiacSignKey, targetDate: Date = new Date()): DailyHoroscope {
  const pool = SIGN_POOLS[sign] || SIGN_POOLS.aries;

  // Simple deterministic day-based seed
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const dateStr = targetDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const signIndex = Object.keys(SIGN_POOLS).indexOf(sign);
  const seed = (year * 372 + month * 31 + day + signIndex * 17) >>> 0;

  const love = pool.love[seed % pool.love.length];
  const work = pool.work[(seed + 1) % pool.work.length];
  const money = pool.money[(seed + 2) % pool.money.length];
  const mood = pool.mood[(seed + 3) % pool.mood.length];
  const advice = pool.advice[(seed + 4) % pool.advice.length];

  return {
    sign,
    date: dateStr,
    love,
    work,
    money,
    mood,
    advice,
  };
}
