import React from 'react';
import { ShieldCheck, RotateCcw } from 'lucide-react';

interface DisclaimerFooterProps {
  onResetSession: () => void;
  hasStoredData: boolean;
}

export const DisclaimerFooter: React.FC<DisclaimerFooterProps> = ({
  onResetSession,
  hasStoredData,
}) => {
  return (
    <footer
      id="astra-footer"
      className="relative z-10 w-full border-t border-white/10 bg-[#04050a] px-6 py-12 text-slate-400 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-xl font-bold tracking-[0.2em] text-white">
                ASTRA
              </span>
              <span className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300">
                Western Ephemeris
              </span>
            </div>
            <p className="mt-1 font-serif text-xs italic text-slate-400">
              YOUR STORY, WRITTEN IN THE STARS.
            </p>
          </div>

          {/* Privacy & Session Reset */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Private session • Zero persistent tracking</span>
            </span>

            {hasStoredData && (
              <button
                id="footer-reset-session-btn"
                onClick={onResetSession}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors hover:bg-rose-950/40 hover:text-rose-200"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset Details / Start Over</span>
              </button>
            )}
          </div>
        </div>

        {/* Legal Disclaimer Mandate */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs leading-relaxed text-slate-500">
          <p className="max-w-2xl mx-auto">
            ASTRA provides astrology-based interpretations for reflection and entertainment. Astrology is not scientifically established as a method for predicting future events or determining personality.
          </p>
          <p className="mt-2 text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} ASTRA • Authentic Western Astrology
          </p>
        </div>
      </div>
    </footer>
  );
};
