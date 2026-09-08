import React from 'react';
import { ZODIAC_DATA } from '../data/zodiacData';
import { ZodiacSignInfo } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { ConstellationSvg } from './ConstellationSvg';

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
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-200 uppercase">
              The Twelve Signs
            </span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            THE WESTERN ZODIAC
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Twelve distinct elemental signatures, ruling planets, and psychological archetypes.
            Select any sign to explore its deeper nature.
          </p>
        </div>

        {/* 12 Signs Interactive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {signs.map((sign) => {
            return (
              <div
                key={sign.key}
                id={`zodiac-card-${sign.key}`}
                onClick={() => onSelectSign(sign)}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border ${sign.theme.borderClass} bg-[#0a0c16]/85 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                style={{
                  boxShadow: `0 0 25px -8px ${sign.theme.bgGlowClass}`,
                }}
              >
                {/* Background Subtle Gradient Wash */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${sign.theme.gradientClass} opacity-40 transition-opacity duration-500 group-hover:opacity-85`}
                />

                {/* Constellation Watermark - Reveals on Hover */}
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-44 w-44 opacity-15 transition-all duration-500 group-hover:scale-110 group-hover:opacity-65">
                  <ConstellationSvg
                    data={sign.constellation}
                    className="h-full w-full"
                    glowColor={sign.theme.primaryColor}
                  />
                </div>

                {/* Top Row: Illuminated Glyph & Element Badge */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-3xl shadow-lg transition-all duration-500 group-hover:scale-115 group-hover:border-white/30"
                    style={{
                      boxShadow: `0 0 20px -5px ${sign.theme.bgGlowClass}`,
                    }}
                  >
                    <span
                      className="transition-all duration-500 group-hover:brightness-125"
                      style={{
                        color: sign.theme.primaryColor,
                        textShadow: `0 0 16px ${sign.theme.primaryColor}99`,
                      }}
                    >
                      {sign.glyph}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${sign.theme.badgeBg}`}
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
                    <h3 className="font-display text-2xl font-black tracking-wider text-white transition-colors duration-300 group-hover:text-amber-200">
                      {sign.name.toUpperCase()}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-300" />
                  </div>
                  <p className="mt-1 text-xs font-semibold tracking-widest text-slate-400">
                    {sign.dateRange}
                  </p>
                  <p className="mt-3 text-xs font-semibold tracking-wide text-amber-200/90">
                    {sign.shortDescription}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-300">
                    {sign.personality.summary}
                  </p>
                </div>

                {/* Footer Visual Identity Atmosphere & Mood Keywords */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-1.5 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {sign.theme.moodKeywords.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium text-slate-300 transition-colors group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 italic">
                    {sign.symbolName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Invitation */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-purple-950/20 to-blue-950/30 p-8 text-center backdrop-blur-xl md:flex-row md:text-left shadow-[0_0_40px_rgba(245,158,11,0.1)]">
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
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>Discover My Sign</span>
          </button>
        </div>
      </div>
    </section>
  );
};

