import React, { useState } from 'react';
import { ZodiacSignKey } from '../types';
import { ZODIAC_DATA } from '../data/zodiacData';
import { getDailyHoroscope } from '../data/horoscopeData';
import {
  Heart,
  Briefcase,
  Coins,
  Brain,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface TodayHoroscopeSectionProps {
  onDiscoverMySign: () => void;
}

export const TodayHoroscopeSection: React.FC<TodayHoroscopeSectionProps> = ({
  onDiscoverMySign,
}) => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSignKey>('aries');

  const sign = ZODIAC_DATA[selectedSign];
  const horoscope = getDailyHoroscope(selectedSign);

  return (
    <section id="today-horoscope-view" className="w-full px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <Calendar className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-300 uppercase">
              {horoscope.date}
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
            Today&apos;s Horoscope
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Clear, practical astrology without vague generalizations or confusing terminology.
          </p>
        </div>

        {/* 12 Sign Selector Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {Object.values(ZODIAC_DATA).map((s) => {
            const isSelected = s.key === selectedSign;
            return (
              <button
                key={s.key}
                onClick={() => setSelectedSign(s.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  isSelected
                    ? 'border border-amber-400/60 bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{s.glyph}</span>
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sign Horoscope Card */}
        <div
          className={`relative overflow-hidden rounded-3xl border ${sign.theme.borderClass} bg-[#0a0d1a]/90 p-8 shadow-2xl backdrop-blur-2xl sm:p-12`}
          style={{
            boxShadow: `0 0 50px -15px ${sign.theme.bgGlowClass}`,
          }}
        >
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/40 text-4xl shadow-inner"
                style={{ color: sign.theme.primaryColor }}
              >
                {sign.glyph}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-wider text-white sm:text-3xl">
                  {sign.name.toUpperCase()}
                </h3>
                <p className="text-xs font-medium text-slate-400">
                  {sign.dateRange} • {sign.element}
                </p>
              </div>
            </div>

            <button
              onClick={onDiscoverMySign}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 hover:border-amber-400 hover:bg-amber-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Check Full Personal Chart
            </button>
          </div>

          {/* 4 Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Love */}
            <div className="rounded-2xl border border-rose-500/30 bg-[#140a17] p-5">
              <div className="flex items-center gap-2 text-rose-400">
                <Heart className="h-4 w-4" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                  ❤️ LOVE
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.love}
              </p>
            </div>

            {/* Work */}
            <div className="rounded-2xl border border-blue-500/30 bg-[#091122] p-5">
              <div className="flex items-center gap-2 text-blue-400">
                <Briefcase className="h-4 w-4" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                  💼 WORK
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.work}
              </p>
            </div>

            {/* Money */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#071714] p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <Coins className="h-4 w-4" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                  💰 MONEY
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.money}
              </p>
            </div>

            {/* Mood */}
            <div className="rounded-2xl border border-purple-500/30 bg-[#120a22] p-5">
              <div className="flex items-center gap-2 text-purple-400">
                <Brain className="h-4 w-4" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                  🧠 MOOD
                </h4>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                {horoscope.mood}
              </p>
            </div>
          </div>

          {/* Today's Advice */}
          <div className="mt-8 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-950/30 via-purple-950/20 to-blue-950/20 p-6 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              ⭐ TODAY&apos;S ADVICE
            </span>
            <p className="mt-2 font-serif text-lg font-medium text-amber-100 sm:text-xl">
              &ldquo;{horoscope.advice}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
