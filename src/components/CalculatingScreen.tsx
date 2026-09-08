import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface CalculatingScreenProps {
  onComplete: () => void;
  userName: string;
}

const STAGES = [
  'READING YOUR STARS',
  'MAPPING YOUR BIRTH SKY',
  'YOUR STORY IS READY',
];

const GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export const CalculatingScreen: React.FC<CalculatingScreenProps> = ({
  onComplete,
  userName,
}) => {
  const [stageIndex, setStageIndex] = useState(0);
  const [currentGlyphIndex, setCurrentGlyphIndex] = useState(0);

  useEffect(() => {
    // Cycle glyphs rapidly for cosmic feel
    const glyphInterval = setInterval(() => {
      setCurrentGlyphIndex((prev) => (prev + 1) % GLYPHS.length);
    }, 140);

    // Cycle through stages
    const timer1 = setTimeout(() => setStageIndex(1), 800);
    const timer2 = setTimeout(() => setStageIndex(2), 1600);
    const timer3 = setTimeout(() => onComplete(), 2400);

    return () => {
      clearInterval(glyphInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      id="calculating-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060d]/95 px-6 backdrop-blur-2xl"
    >
      {/* Background Pulsing Cosmic Rings */}
      <div className="pointer-events-none absolute flex items-center justify-center">
        <div className="h-80 w-80 animate-ping rounded-full border border-amber-400/20 opacity-30 duration-1000" />
        <div className="absolute h-96 w-96 rounded-full border border-purple-500/20" />
        <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-500/15" />
        <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-purple-600/30 via-amber-500/20 to-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Central Zodiac Wheel Ring */}
        <div className="relative mb-8 flex h-36 w-36 items-center justify-center rounded-full border-2 border-amber-400/40 bg-black/50 shadow-[0_0_50px_rgba(245,158,11,0.3)] backdrop-blur-xl">
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-2 animate-spin rounded-full border border-dashed border-amber-300/40 duration-700" />

          {/* Central flashing glyph */}
          <span className="font-display text-5xl text-amber-200 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all">
            {GLYPHS[currentGlyphIndex]}
          </span>
        </div>

        {/* User Name Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1">
          <Sparkles className="h-3 w-3 text-amber-300" />
          <span className="text-xs font-semibold tracking-widest text-amber-200 uppercase">
            {userName ? `For ${userName}` : 'Mapping Sky'}
          </span>
        </div>

        {/* Current Calculating Stage */}
        <h2 className="min-h-[2.5rem] font-display text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">
          {STAGES[stageIndex]}
        </h2>

        <p className="mt-3 text-xs tracking-widest text-slate-400 uppercase">
          Aligning Western Tropical coordinates &amp; ephemeris
        </p>

        {/* Step Indicator Dots */}
        <div className="mt-8 flex gap-2.5">
          {STAGES.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === stageIndex
                  ? 'w-8 bg-amber-400 shadow-[0_0_10px_#f59e0b]'
                  : i < stageIndex
                  ? 'w-2 bg-amber-600'
                  : 'w-2 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
