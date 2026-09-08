import React, { useState } from 'react';
import { ZodiacSignKey } from '../types';
import { ZODIAC_DATA } from '../data/zodiacData';
import { getCompatibility } from '../data/compatibilityData';
import { Heart, MessageCircle, Flame, Zap, Sparkles } from 'lucide-react';

interface CompatibilitySectionProps {
  onDiscoverMySign: () => void;
}

export const CompatibilitySection: React.FC<CompatibilitySectionProps> = ({
  onDiscoverMySign,
}) => {
  const [sign1Key, setSign1Key] = useState<ZodiacSignKey>('leo');
  const [sign2Key, setSign2Key] = useState<ZodiacSignKey>('libra');

  const sign1 = ZODIAC_DATA[sign1Key];
  const sign2 = ZODIAC_DATA[sign2Key];
  const report = getCompatibility(sign1Key, sign2Key);

  return (
    <section id="compatibility-view" className="w-full px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-200 uppercase">
              Relational Synastry
            </span>
          </div>
          <h2 className="font-display text-4xl font-black text-white sm:text-6xl tracking-tight">
            YOU × THEM
          </h2>
          <p className="mt-3 text-base text-slate-300 max-w-xl mx-auto">
            Select two zodiac signs to explore their genuine psychological dynamics, instinctive chemistry, and natural friction points.
          </p>
        </div>

        {/* Pairing Interactive Picker */}
        <div className="rounded-3xl border border-white/15 bg-[#0a0d1a]/85 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-7">
            {/* Sign 1 Selector */}
            <div className="sm:col-span-3">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                First Zodiac Sign
              </label>
              <select
                id="compat-sign1-select"
                value={sign1Key}
                onChange={(e) => setSign1Key(e.target.value as ZodiacSignKey)}
                className="w-full rounded-2xl border border-white/20 bg-[#101428] px-4 py-3.5 font-display text-base font-bold text-amber-200 focus:border-amber-400 focus:outline-none"
              >
                {Object.values(ZODIAC_DATA).map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.glyph} {s.name.toUpperCase()} ({s.element})
                  </option>
                ))}
              </select>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="text-xl">{sign1.glyph}</span>
                <span>
                  {sign1.element} • {sign1.modality}
                </span>
              </div>
            </div>

            {/* Middle divider */}
            <div className="flex flex-col items-center justify-center sm:col-span-1">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-lg text-amber-300">
                ×
              </span>
            </div>

            {/* Sign 2 Selector */}
            <div className="sm:col-span-3">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Second Zodiac Sign
              </label>
              <select
                id="compat-sign2-select"
                value={sign2Key}
                onChange={(e) => setSign2Key(e.target.value as ZodiacSignKey)}
                className="w-full rounded-2xl border border-white/20 bg-[#101428] px-4 py-3.5 font-display text-base font-bold text-sky-200 focus:border-sky-400 focus:outline-none"
              >
                {Object.values(ZODIAC_DATA).map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.glyph} {s.name.toUpperCase()} ({s.element})
                  </option>
                ))}
              </select>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="text-xl">{sign2.glyph}</span>
                <span>
                  {sign2.element} • {sign2.modality}
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Harmony Result Banner */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-purple-950/20 to-blue-950/30 p-6 sm:flex-row">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Pairing Dynamic
              </span>
              <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
                {sign1.glyph} {sign1.name.toUpperCase()} × {sign2.glyph} {sign2.name.toUpperCase()}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-amber-200">
                {report.vibeTitle}
              </p>
            </div>

            <span className="rounded-full border border-amber-400/50 bg-amber-500/20 px-5 py-2 text-xs font-bold tracking-wider text-amber-200 uppercase shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {report.harmonyLevel}
            </span>
          </div>

          {/* 4 Cards: Love, Communication, Chemistry, Challenges */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Love */}
            <div className="rounded-2xl border border-rose-500/25 bg-[#150a16] p-5 shadow-lg">
              <div className="flex items-center gap-2 text-rose-400">
                <Heart className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  ❤️ Love
                </h4>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {report.love}
              </p>
            </div>

            {/* Communication */}
            <div className="rounded-2xl border border-sky-500/25 bg-[#091122] p-5 shadow-lg">
              <div className="flex items-center gap-2 text-sky-400">
                <MessageCircle className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  💬 Communication
                </h4>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {report.communication}
              </p>
            </div>

            {/* Chemistry */}
            <div className="rounded-2xl border border-amber-500/25 bg-[#17120a] p-5 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400">
                <Flame className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  🔥 Chemistry
                </h4>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {report.chemistry}
              </p>
            </div>

            {/* Challenges */}
            <div className="rounded-2xl border border-purple-500/25 bg-[#120a22] p-5 shadow-lg">
              <div className="flex items-center gap-2 text-purple-400">
                <Zap className="h-4 w-4" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  ⚡ Challenges
                </h4>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {report.challenges}
              </p>
            </div>
          </div>

          {/* Psychological Depth: Why It Works & Where It Can Get Difficult */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                <h4 className="font-display text-sm font-black tracking-widest uppercase">
                  WHY IT WORKS
                </h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {report.whyItWorks}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/15 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-amber-400">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                <h4 className="font-display text-sm font-black tracking-widest uppercase">
                  WHERE IT GETS DIFFICULT
                </h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {report.whereItGetsDifficult}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onDiscoverMySign}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 underline underline-offset-4 hover:text-white"
            >
              Don&apos;t know your exact Western Sun sign? Calculate it free →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
