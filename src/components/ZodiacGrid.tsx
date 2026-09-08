import React from 'react';
import { ZODIAC_DATA } from '../data/zodiacData';
import { ZodiacSignKey, ZodiacSignInfo } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ZodiacGridProps {
  onSelectSign: (sign: ZodiacSignInfo) => void;
  onOpenBirthModal: () => void;
}

export const ZodiacGrid: React.FC<ZodiacGridProps> = ({
  onSelectSign,
  onOpenBirthModal,
}) => {
  const signs = Object.values(ZODIAC_DATA);

  return (
    <section id="zodiac-section" className="relative w-full px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-300 uppercase">
              The Twelve Constellations
            </span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            The Western Zodiac
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Each sign carries its own distinct elemental architecture, ruling planet, and psychological blueprint.
            Select any sign to explore its deeper nature.
          </p>
        </div>

        {/* 12 Signs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {signs.map((sign) => {
            return (
              <div
                key={sign.key}
                id={`zodiac-card-${sign.key}`}
                onClick={() => onSelectSign(sign)}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border ${sign.theme.borderClass} bg-[#0a0c16]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
                style={{
                  boxShadow: `0 0 25px -10px ${sign.theme.bgGlowClass}`,
                }}
              >
                {/* Background Subtle Gradient Wash */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${sign.theme.gradientClass} opacity-60 transition-opacity duration-300 group-hover:opacity-90`}
                />

                {/* Top Row: Glyph & Element Badge */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-3xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <span style={{ color: sign.theme.primaryColor }}>{sign.glyph}</span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${sign.theme.badgeBg}`}
                    >
                      {sign.element} • {sign.modality}
                    </span>
                    <span className="text-[11px] font-medium tracking-wide text-slate-400">
                      {sign.rulingPlanet}
                    </span>
                  </div>
                </div>

                {/* Center Content: Sign Name & Dates */}
                <div className="relative z-10 my-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold tracking-wider text-white transition-colors group-hover:text-amber-200">
                      {sign.name.toUpperCase()}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-1 text-xs font-semibold tracking-widest text-slate-400">
                    {sign.dateRange}
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {sign.shortDescription}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {sign.personality.summary}
                  </p>
                </div>

                {/* Footer Mood Keywords */}
                <div className="relative z-10 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {sign.theme.moodKeywords.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Invitation */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/20 via-purple-950/20 to-blue-950/20 p-8 text-center backdrop-blur-xl md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Not sure about your exact Sun, Moon, or Rising sign?
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Enter your birth date and location for an authentic astronomical calculation.
            </p>
          </div>
          <button
            onClick={onOpenBirthModal}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3 text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>Discover My Sign</span>
          </button>
        </div>
      </div>
    </section>
  );
};
