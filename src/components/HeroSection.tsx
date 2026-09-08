import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onExploreSignsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverClick,
  onExploreSignsClick,
}) => {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden px-6 py-16 lg:px-12"
    >
      {/* Background Celestial Radial Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Central Core Ambient Pulsing Nebula */}
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-amber-400/10 blur-[120px] transition-all duration-1000 md:h-[650px] md:w-[650px]" />
        {/* Soft Secondary Glowing Rim */}
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-rose-600/15 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-teal-500/15 blur-[100px]" />

        {/* Elegant Celestial Orbit Rings */}
        <div className="absolute h-[680px] w-[680px] rounded-full border border-white/[0.05] md:h-[850px] md:w-[850px]" />
        <div className="absolute h-[520px] w-[520px] rounded-full border border-white/[0.04] stroke-dasharray md:h-[650px] md:w-[650px]" />
        <div className="absolute h-[340px] w-[340px] rounded-full border border-amber-400/[0.08]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Brand Tagline Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-200 uppercase">
            Your Story, Written in the Stars
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            DISCOVER
          </span>
          <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(244,114,182,0.3)]">
            YOUR COSMIC STORY
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-4 font-serif text-xl italic text-slate-300 sm:text-2xl md:text-3xl">
          Your zodiac sign reveals more than you think.
        </p>

        {/* Supporting Text */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Discover your personality, strengths, challenges, love style and today&apos;s horoscope.
          Calculated accurately using authentic Western planetary ephemeris.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            id="hero-primary-discover-btn"
            onClick={onDiscoverClick}
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 px-9 py-4 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-[0_0_35px_rgba(245,158,11,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-amber-200 transition-transform duration-300 group-hover:rotate-45" />
            <span>Discover My Sign</span>
            <ArrowRight className="h-4 w-4 text-amber-200 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            id="hero-explore-signs-btn"
            onClick={onExploreSignsClick}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-medium tracking-wider text-slate-300 uppercase backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
          >
            <Star className="h-4 w-4 text-amber-300" />
            <span>Explore 12 Signs</span>
          </button>
        </div>

        {/* Small Trust Markers */}
        <div className="mt-8 flex items-center gap-3 text-xs tracking-widest text-slate-400 uppercase">
          <span>Free</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Personal</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Simple</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span className="inline-flex items-center gap-1 text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            Privacy First
          </span>
        </div>

        {/* Quick Western Zodiac Glyphs Ribbon */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map(
            (glyph, i) => (
              <span
                key={i}
                className="text-lg text-slate-500/70 transition-all duration-300 hover:scale-125 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] sm:text-xl"
              >
                {glyph}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
