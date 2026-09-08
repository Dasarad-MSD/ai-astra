import React, { useState } from 'react';
import {
  AstrologyCalculationResult,
  ZodiacSignKey,
} from '../types';
import { ZODIAC_DATA } from '../data/zodiacData';
import { getDailyHoroscope } from '../data/horoscopeData';
import { getCompatibility } from '../data/compatibilityData';
import { ConstellationSvg } from './ConstellationSvg';
import {
  Sparkles,
  Heart,
  Briefcase,
  Coins,
  Brain,
  Star,
  CheckCircle2,
  AlertTriangle,
  Flame,
  MessageCircle,
  Zap,
  RotateCcw,
  Compass,
  ChevronDown,
  Info,
  Calendar,
  MapPin,
  Clock,
} from 'lucide-react';

interface ReadingResultProps {
  calculation: AstrologyCalculationResult;
  onRecalculate: () => void;
}

export const ReadingResult: React.FC<ReadingResultProps> = ({
  calculation,
  onRecalculate,
}) => {
  const {
    sunSign,
    sunDegree,
    moonSign,
    moonDegree,
    isMoonUncertain,
    moonUncertainExplanation,
    risingSign,
    risingDegree,
    isRisingKnown,
    risingExplanation,
    birthDetails,
  } = calculation;

  const sunInfo = ZODIAC_DATA[sunSign];
  const moonInfo = moonSign ? ZODIAC_DATA[moonSign] : null;
  const risingInfo = risingSign ? ZODIAC_DATA[risingSign] : null;

  // Horoscope data
  const horoscope = getDailyHoroscope(sunSign);

  // Compatibility selector state
  const [partnerSignKey, setPartnerSignKey] = useState<ZodiacSignKey>(
    sunSign === 'scorpio' ? 'taurus' : 'scorpio'
  );
  const compatibility = getCompatibility(sunSign, partnerSignKey);

  // Technical "Learn Why" toggle
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <div
      id="reading-result-view"
      className="relative min-h-screen w-full px-6 py-12 lg:px-12"
      style={{
        background: `radial-gradient(ellipse at top, ${sunInfo.theme.bgGlowClass} 0%, rgba(5,6,13,0.95) 70%)`,
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Top Header Actions */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
            <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
              Personal Western Reading for{' '}
              <strong className="text-white">{birthDetails.name || 'Seeker'}</strong>
            </span>
          </div>

          <button
            id="reset-reading-btn"
            onClick={onRecalculate}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-300 uppercase hover:bg-white/10 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Recalculate</span>
          </button>
        </div>

        {/* Hero Banner: YOUR COSMIC STORY */}
        <div
          id="cosmic-story-hero"
          className={`relative mb-16 overflow-hidden rounded-3xl border ${sunInfo.theme.borderClass} bg-[#0a0d1a]/85 p-8 text-center backdrop-blur-2xl sm:p-12 md:p-16`}
          style={{
            boxShadow: `0 0 60px -15px ${sunInfo.theme.bgGlowClass}`,
          }}
        >
          {/* Subtle Constellation watermark in background */}
          <div className="pointer-events-none absolute -top-10 -right-10 opacity-25 sm:opacity-35">
            <ConstellationSvg
              data={sunInfo.constellation}
              className="h-72 w-72 sm:h-96 sm:w-96"
              glowColor={sunInfo.theme.primaryColor}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="font-display text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
              ASTRA • WESTERN ASTROLOGY
            </p>

            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              YOUR COSMIC STORY
            </h1>

            {/* Huge Zodiac Glyph */}
            <div className="my-8 flex justify-center">
              <div
                className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-black/40 text-7xl shadow-2xl transition-transform duration-500 hover:scale-110 sm:h-36 sm:w-36 sm:text-8xl"
                style={{
                  boxShadow: `0 0 45px -5px ${sunInfo.theme.primaryColor}50`,
                }}
              >
                <span style={{ color: sunInfo.theme.primaryColor }}>
                  {sunInfo.glyph}
                </span>
              </div>
            </div>

            {/* Large Sign Title & Dates */}
            <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-white sm:text-5xl">
              {sunInfo.name.toUpperCase()}
            </h2>
            <p className="mt-2 text-sm font-semibold tracking-widest text-slate-300">
              {sunInfo.dateRange}
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${sunInfo.theme.badgeBg}`}
              >
                {sunInfo.element} Sign
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                {sunInfo.modality}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300 uppercase">
                Ruler: {sunInfo.rulingPlanet}
              </span>
              <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
                Sun in {sunInfo.name} ({sunDegree}°)
              </span>
            </div>

            {/* Tagline */}
            <p className="mt-6 font-serif text-xl italic text-slate-200 sm:text-2xl">
              &ldquo;{sunInfo.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* THE CELESTIAL TRIAD: Sun, Moon, Rising */}
        <div className="mb-16">
          <div className="mb-6 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              The Cosmic Triad
            </span>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Your Sun, Moon &amp; Rising Placements
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 1. SUN SIGN */}
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#0c1022] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                  ☉ Sun Sign • Core Vitality
                </span>
                <span className="text-2xl text-amber-300">{sunInfo.glyph}</span>
              </div>
              <h4 className="mt-3 font-display text-2xl font-bold text-white">
                {sunInfo.name} ({sunDegree}°)
              </h4>
              <p className="mt-1 text-xs text-amber-200/80">
                {sunInfo.element} • {sunInfo.modality}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Your conscious identity, driving purpose, and primary creative energy in the outer world.
              </p>
            </div>

            {/* 2. MOON SIGN */}
            <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-[#0c1022] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-sky-400 uppercase">
                  ☽ Moon Sign • Inner Emotional World
                </span>
                <span className="text-2xl text-sky-300">
                  {moonInfo ? moonInfo.glyph : '☽'}
                </span>
              </div>

              {moonInfo ? (
                <>
                  <h4 className="mt-3 font-display text-2xl font-bold text-white">
                    {moonInfo.name} {moonDegree !== undefined ? `(${moonDegree}°)` : ''}
                  </h4>
                  <p className="mt-1 text-xs text-sky-200/80">
                    {moonInfo.element} • {moonInfo.modality}
                  </p>
                  {isMoonUncertain && moonUncertainExplanation ? (
                    <div className="mt-3 rounded-xl border border-amber-500/30 bg-amber-950/30 p-2.5 text-[11px] text-amber-200">
                      <p className="font-semibold">Astronomical Transition Note:</p>
                      <p className="mt-0.5 leading-relaxed">{moonUncertainExplanation}</p>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Your instinctive reactions, private emotional needs, and what brings you deep comfort.
                    </p>
                  )}
                </>
              ) : (
                <div className="mt-3 text-xs text-slate-400">
                  <p>Calculating lunar placement...</p>
                </div>
              )}
            </div>

            {/* 3. RISING SIGN (ASCENDANT) */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0c1022] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">
                  ↑ Rising Sign • The Ascendant
                </span>
                <span className="text-2xl text-purple-300">
                  {risingInfo ? risingInfo.glyph : '↑'}
                </span>
              </div>

              {isRisingKnown && risingInfo ? (
                <>
                  <h4 className="mt-3 font-display text-2xl font-bold text-white">
                    {risingInfo.name} {risingDegree !== undefined ? `(${risingDegree}°)` : ''}
                  </h4>
                  <p className="mt-1 text-xs text-purple-200/80">
                    {risingInfo.element} • {risingInfo.modality}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    The mask and atmosphere you present upon first impression; your spontaneous social lens.
                  </p>
                </>
              ) : (
                <div className="mt-3 space-y-2">
                  <h4 className="font-display text-lg font-semibold text-slate-300">
                    Not Calculated
                  </h4>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    {risingExplanation ||
                      'Exact birth time and location are required to compute your Rising Sign. We do not guess uncertain placements.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 11: YOUR PERSONALITY */}
        <section id="personality-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl font-bold text-black"
              style={{ backgroundColor: sunInfo.theme.primaryColor }}
            >
              1
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Nuanced &amp; Authentic
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                YOUR PERSONALITY
              </h3>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-[#0a0d1a]/80 p-8 backdrop-blur-xl sm:p-10">
            <p className="font-serif text-xl leading-relaxed text-slate-200 sm:text-2xl">
              {sunInfo.personality.summary}
            </p>

            <div className="my-6 h-px w-full bg-white/10" />

            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>{sunInfo.personality.essence}</p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold tracking-wider text-amber-300 uppercase">
                  The Honest Nuance
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {sunInfo.personality.nuance}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: YOUR STRENGTHS */}
        <section id="strengths-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 font-bold text-black">
              2
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Grounded Talents
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                YOUR STRENGTHS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sunInfo.strengths.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-emerald-500/20 bg-[#0c1220] p-6 backdrop-blur-md transition-all hover:border-emerald-500/40"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <h4 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 13: YOUR CHALLENGES */}
        <section id="challenges-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 font-bold text-black">
              3
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Honest Self-Reflection
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                YOUR CHALLENGES
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sunInfo.challenges.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-500/25 bg-[#120f1a] p-6 backdrop-blur-md transition-all hover:border-amber-500/50"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <h4 className="font-display text-base font-bold text-amber-200">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 14: LOVE & RELATIONSHIPS ❤️ */}
        <section id="love-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500 font-bold text-white">
              ❤️
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Intimacy &amp; Connection
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                LOVE &amp; RELATIONSHIPS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* How You Love */}
            <div className="rounded-2xl border border-rose-500/25 bg-[#120b16] p-6 backdrop-blur-md">
              <h4 className="font-display text-sm font-bold tracking-wider text-rose-300 uppercase">
                How You Love
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {sunInfo.love.howYouLove}
              </p>
            </div>

            {/* What You Need */}
            <div className="rounded-2xl border border-rose-500/25 bg-[#120b16] p-6 backdrop-blur-md">
              <h4 className="font-display text-sm font-bold tracking-wider text-rose-300 uppercase">
                What You Need
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {sunInfo.love.whatYouNeed}
              </p>
            </div>

            {/* What Attracts You */}
            <div className="rounded-2xl border border-rose-500/25 bg-[#120b16] p-6 backdrop-blur-md">
              <h4 className="font-display text-sm font-bold tracking-wider text-rose-300 uppercase">
                What Attracts You
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {sunInfo.love.whatAttractsYou}
              </p>
            </div>

            {/* What Can Cause Problems */}
            <div className="rounded-2xl border border-rose-500/25 bg-[#120b16] p-6 backdrop-blur-md">
              <h4 className="font-display text-sm font-bold tracking-wider text-rose-300 uppercase">
                What Can Cause Problems
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {sunInfo.love.whatCausesProblems}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 15 & 16: CAREER 💼 & MONEY 💰 */}
        <section id="career-money-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 font-bold text-white">
              💼
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Purpose &amp; Stewardship
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                CAREER &amp; MONEY
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Career Card */}
            <div className="rounded-3xl border border-blue-500/25 bg-[#091122] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-5 w-5" />
                <h4 className="font-display text-lg font-bold text-white">
                  CAREER 💼
                </h4>
              </div>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                    Natural Work Style:
                  </span>
                  <p className="mt-1">{sunInfo.career.workStyle}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                    Core Strengths &amp; Motivation:
                  </span>
                  <p className="mt-1">
                    {sunInfo.career.strengths} Driven by {sunInfo.career.motivation.toLowerCase()}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                    Possible Challenge:
                  </span>
                  <p className="mt-1">{sunInfo.career.challenges}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                    Suitable Environments:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {sunInfo.career.suitableEnvironments.map((env, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {env}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Money Card */}
            <div className="rounded-3xl border border-emerald-500/25 bg-[#091816] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-emerald-400">
                <Coins className="h-5 w-5" />
                <h4 className="font-display text-lg font-bold text-white">
                  MONEY 💰
                </h4>
              </div>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    Spending Tendencies:
                  </span>
                  <p className="mt-1">{sunInfo.money.spendingTendencies}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    View on Security:
                  </span>
                  <p className="mt-1">{sunInfo.money.securityView}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    Risk Attitude:
                  </span>
                  <p className="mt-1">{sunInfo.money.riskAttitude}</p>
                </div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3.5">
                  <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    Practical Stewardship:
                  </span>
                  <p className="mt-1 text-xs text-emerald-100">
                    {sunInfo.money.practicalAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 17: TODAY'S HOROSCOPE */}
        <section id="today-horoscope-section" className="mb-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500 font-bold text-white">
                ⭐
              </span>
              <div>
                <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Daily Practical Guidance
                </span>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  TODAY&apos;S HOROSCOPE
                </h3>
              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
              {horoscope.date}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* LOVE */}
            <div className="rounded-2xl border border-rose-500/30 bg-[#140a17] p-5">
              <div className="flex items-center gap-2 text-rose-400">
                <Heart className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  ❤️ LOVE
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.love}
              </p>
            </div>

            {/* WORK */}
            <div className="rounded-2xl border border-blue-500/30 bg-[#091122] p-5">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  💼 WORK
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.work}
              </p>
            </div>

            {/* MONEY */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#071714] p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <Coins className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  💰 MONEY
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.money}
              </p>
            </div>

            {/* MOOD */}
            <div className="rounded-2xl border border-purple-500/30 bg-[#120a22] p-5">
              <div className="flex items-center gap-2 text-purple-400">
                <Brain className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  🧠 MOOD
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.mood}
              </p>
            </div>
          </div>

          {/* TODAY'S ADVICE */}
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-purple-950/20 to-blue-950/20 p-6 text-center backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              ⭐ TODAY&apos;S ADVICE
            </span>
            <p className="mt-2 font-serif text-lg font-medium text-amber-100 sm:text-xl">
              &ldquo;{horoscope.advice}&rdquo;
            </p>
          </div>
        </section>

        {/* SECTION 18: CHECK COMPATIBILITY */}
        <section id="compatibility-section" className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 font-bold text-white">
              🔥
            </span>
            <div>
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Elemental Chemistry
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                CHECK COMPATIBILITY
              </h3>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-[#0a0d1a]/85 p-6 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
              {/* Partner Sign Selector */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="text-center">
                  <span className="text-3xl">{sunInfo.glyph}</span>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    {sunInfo.name.toUpperCase()}
                  </p>
                </div>

                <span className="font-display text-2xl text-slate-500">×</span>

                <div className="flex flex-col items-center">
                  <select
                    id="partner-sign-select"
                    value={partnerSignKey}
                    onChange={(e) => setPartnerSignKey(e.target.value as ZodiacSignKey)}
                    className="rounded-2xl border border-white/20 bg-[#12162c] px-4 py-2.5 font-display text-base font-bold text-amber-300 focus:border-amber-400 focus:outline-none"
                  >
                    {Object.values(ZODIAC_DATA).map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.glyph} {s.name.toUpperCase()}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-[11px] text-slate-400">Select another sign</p>
                </div>
              </div>

              {/* Dynamic Harmony Level Pill */}
              <div className="flex flex-col items-center md:items-end">
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Dynamic Harmony
                </span>
                <span className="mt-1 rounded-full border border-amber-400/40 bg-amber-500/15 px-4 py-1.5 text-xs font-bold text-amber-200">
                  {compatibility.harmonyLevel}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-serif text-lg font-semibold text-white">
                {compatibility.vibeTitle}
              </h4>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-rose-300 uppercase">
                    <Heart className="h-3.5 w-3.5" /> ❤️ Love
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {compatibility.love}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-sky-300 uppercase">
                    <MessageCircle className="h-3.5 w-3.5" /> 💬 Communication
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {compatibility.communication}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-300 uppercase">
                    <Flame className="h-3.5 w-3.5" /> 🔥 Chemistry
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {compatibility.chemistry}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-purple-300 uppercase">
                    <Zap className="h-3.5 w-3.5" /> ⚡ Challenges
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {compatibility.challenges}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONAL: "Learn Why →" Technical Ephemeris Drawer */}
        <div className="mb-16">
          <button
            id="learn-why-toggle-btn"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase transition-colors hover:text-amber-300"
          >
            <Info className="h-4 w-4" />
            <span>Learn why → Technical Astronomical Details</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                showTechnicalDetails ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showTechnicalDetails && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs text-slate-400">
              <h5 className="font-semibold tracking-wide text-white uppercase">
                Astronomical Calculation Log
              </h5>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <p>
                    <strong className="text-slate-300">Zodiac System:</strong> Western Tropical
                    (Equinox-anchored)
                  </p>
                  <p className="mt-1">
                    <strong className="text-slate-300">Birthplace:</strong>{' '}
                    {birthDetails.location?.displayName || 'Coordinates provided'}
                  </p>
                  <p className="mt-1">
                    <strong className="text-slate-300">Coordinates:</strong> Lat{' '}
                    {birthDetails.location?.latitude.toFixed(4)}°, Lon{' '}
                    {birthDetails.location?.longitude.toFixed(4)}°
                  </p>
                </div>
                <div>
                  <p>
                    <strong className="text-slate-300">Timezone Offset:</strong>{' '}
                    {birthDetails.location?.timezone || 'IST (UTC+5:30)'}
                  </p>
                  <p className="mt-1">
                    <strong className="text-slate-300">Sun Ecliptic Longitude:</strong>{' '}
                    {sunDegree}° {sunInfo.name}
                  </p>
                  <p className="mt-1">
                    <strong className="text-slate-300">Ascendant / Rising:</strong>{' '}
                    {isRisingKnown && risingInfo
                      ? `${risingDegree}° ${risingInfo.name}`
                      : 'Unavailable without exact birth time'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
