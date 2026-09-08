import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import cosmicBg from '../assets/images/cosmic_nebula_bg_1788860503018.jpg';
import astrolabeImg from '../assets/images/zodiac_astrolabe_1788860528010.jpg';
import { ZodiacSignKey } from '../types';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onExploreSignsClick: () => void;
  onSelectSign?: (key: ZodiacSignKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverClick,
  onExploreSignsClick,
  onSelectSign,
}) => {
  const ZODIAC_GLYPHS: { glyph: string; name: string; key: ZodiacSignKey }[] = [
    { glyph: '♈', name: 'Aries', key: 'aries' },
    { glyph: '♉', name: 'Taurus', key: 'taurus' },
    { glyph: '♊', name: 'Gemini', key: 'gemini' },
    { glyph: '♋', name: 'Cancer', key: 'cancer' },
    { glyph: '♌', name: 'Leo', key: 'leo' },
    { glyph: '♍', name: 'Virgo', key: 'virgo' },
    { glyph: '♎', name: 'Libra', key: 'libra' },
    { glyph: '♏', name: 'Scorpio', key: 'scorpio' },
    { glyph: '♐', name: 'Sagittarius', key: 'sagittarius' },
    { glyph: '♑', name: 'Capricorn', key: 'capricorn' },
    { glyph: '♒', name: 'Aquarius', key: 'aquarius' },
    { glyph: '♓', name: 'Pisces', key: 'pisces' },
  ];

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden px-6 py-20 lg:px-12"
    >
      {/* Cinematic Deep Space Background with Parallax Depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Real Cosmic Nebula Photography Layer */}
        <img
          src={cosmicBg}
          alt="Cosmic Deep Space Nebula"
          className="h-full w-full object-cover object-center opacity-35 filter saturate-[1.3] contrast-[1.1] scale-105"
        />

        {/* Sophisticated Multi-Color Atmospheric Washes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060d]/80 via-[#070915]/60 to-[#05060d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.22)_0%,rgba(13,148,136,0.12)_45%,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-600/15 to-amber-400/15 blur-[140px]" />

        {/* Rotating Translucent Celestial Astrolabe Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 mix-blend-screen pointer-events-none">
          <img
            src={astrolabeImg}
            alt="Zodiac Astrolabe Sphere"
            className="h-[620px] w-[620px] max-w-none rounded-full animate-[spin_160s_linear_infinite]"
          />
        </div>

        {/* Delicate Golden Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[720px] rounded-full border border-amber-400/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full border border-violet-400/10 border-dashed" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Small Brand Header */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-teal-500/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(251,191,36,0.12)]">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <span className="font-display text-xs font-bold tracking-[0.35em] text-amber-200 uppercase">
            ASTRA
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 font-display text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]">
          <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            YOUR STORY
          </span>
          <span className="block bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(244,114,182,0.25)]">
            WRITTEN IN THE STARS.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-lg font-normal leading-relaxed text-slate-300 sm:text-xl md:text-2xl font-sans">
          Discover what your zodiac sign says about the way you love, think, work and live.
        </p>

        {/* Primary CTA with Glowing Cosmic Aura */}
        <div className="flex flex-col items-center">
          <button
            id="hero-primary-discover-btn"
            onClick={onDiscoverClick}
            className="group relative flex items-center justify-center gap-3.5 overflow-hidden rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-10 py-5 text-sm font-bold tracking-[0.25em] text-white uppercase shadow-[0_0_40px_rgba(245,158,11,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(245,158,11,0.7)] active:scale-95 cursor-pointer"
          >
            {/* Shimmer Flare Effect */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:translate-x-full" />

            <Sparkles className="h-4 w-4 text-amber-200 transition-transform duration-500 group-hover:rotate-45" />
            <span className="relative z-10 text-base font-extrabold tracking-[0.2em]">
              DISCOVER MY SIGN
            </span>
            <ArrowRight className="h-4 w-4 text-amber-200 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Under Button Label */}
          <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
            Western Astrology • Personalized Reading
          </p>
        </div>

        {/* 12 Zodiac Signs: Exactly 2 Lines with 6 in a Line */}
        <div className="mt-12 w-full max-w-4xl px-2">
          <div className="grid grid-cols-6 gap-2 sm:gap-3.5 md:gap-4">
            {ZODIAC_GLYPHS.map((item) => (
              <button
                key={item.name}
                id={`hero-sign-btn-${item.key}`}
                onClick={() => (onSelectSign ? onSelectSign(item.key) : onExploreSignsClick())}
                title={`Explore ${item.name}`}
                className="group relative flex flex-col items-center justify-center h-18 sm:h-22 rounded-xl sm:rounded-2xl border border-white/15 bg-black/45 p-1 sm:p-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:bg-amber-500/15 hover:shadow-[0_0_25px_rgba(251,191,36,0.35)] cursor-pointer"
              >
                {/* Glyph */}
                <span
                  className="text-xl sm:text-3xl text-amber-200 transition-all duration-300 group-hover:scale-115 group-hover:text-amber-100"
                  style={{
                    textShadow: '0 0 14px rgba(251, 191, 36, 0.45)',
                  }}
                >
                  {item.glyph}
                </span>
                {/* Sign Name */}
                <span className="mt-1 text-[9px] sm:text-xs font-bold tracking-wider text-slate-300 transition-colors duration-200 group-hover:text-amber-200 uppercase truncate max-w-full">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
