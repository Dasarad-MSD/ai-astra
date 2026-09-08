import React, { useState } from 'react';
import { ZodiacSignInfo } from '../types';
import { ConstellationSvg } from './ConstellationSvg';
import { getDailyHoroscope } from '../data/horoscopeData';
import {
  X,
  Sparkles,
  Heart,
  Briefcase,
  Coins,
  CheckCircle2,
  AlertTriangle,
  Calendar,
} from 'lucide-react';

interface SignDetailModalProps {
  sign: ZodiacSignInfo | null;
  onClose: () => void;
  onCalculatePersonal: () => void;
}

export const SignDetailModal: React.FC<SignDetailModalProps> = ({
  sign,
  onClose,
  onCalculatePersonal,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'love' | 'career' | 'today'>('profile');

  if (!sign) return null;

  const horoscope = getDailyHoroscope(sign.key);

  return (
    <div
      id="sign-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="fixed inset-0 bg-[#05060d]/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0a0d1a] shadow-[0_0_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
        style={{
          boxShadow: `0 0 60px -10px ${sign.theme.bgGlowClass}`,
        }}
      >
        {/* Header Hero Banner */}
        <div
          className={`relative border-b border-white/10 p-6 sm:p-8 ${sign.theme.gradientClass}`}
        >
          {/* Constellation in background */}
          <div className="pointer-events-none absolute top-2 right-4 opacity-30">
            <ConstellationSvg
              data={sign.constellation}
              className="h-44 w-44"
              glowColor={sign.theme.primaryColor}
            />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/40 text-4xl shadow-inner"
                style={{ color: sign.theme.primaryColor }}
              >
                {sign.glyph}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-wider text-white sm:text-3xl">
                    {sign.name.toUpperCase()}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${sign.theme.badgeBg}`}
                  >
                    {sign.element}
                  </span>
                </div>
                <p className="text-xs font-semibold tracking-wider text-slate-300">
                  {sign.dateRange} • {sign.modality}
                </p>
                <p className="mt-1 text-xs text-amber-300">
                  Ruler: {sign.rulingPlanet}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="relative z-10 mt-6 flex gap-2 overflow-x-auto border-t border-white/10 pt-4">
            {(['profile', 'love', 'career', 'today'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab === 'profile'
                  ? 'Overview'
                  : tab === 'love'
                  ? 'Love'
                  : tab === 'career'
                  ? 'Career & Money'
                  : "Today's Horoscope"}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <p className="font-serif text-lg italic text-slate-200">
                  &ldquo;{sign.tagline}&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {sign.personality.summary}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {sign.personality.essence}
                </p>
              </div>

              {/* Strengths */}
              <div>
                <h4 className="mb-3 font-display text-sm font-bold tracking-wider text-emerald-400 uppercase">
                  Notable Strengths
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {sign.strengths.map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5"
                    >
                      <p className="text-xs font-bold text-white">{s.title}</p>
                      <p className="mt-1 text-xs text-slate-300">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="mb-3 font-display text-sm font-bold tracking-wider text-amber-400 uppercase">
                  Shadow Tendencies &amp; Growth
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {sign.challenges.map((c, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-3.5"
                    >
                      <p className="text-xs font-bold text-amber-200">{c.title}</p>
                      <p className="mt-1 text-xs text-slate-300">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOVE */}
          {activeTab === 'love' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-rose-500/25 bg-rose-950/20 p-5">
                <span className="text-xs font-bold tracking-wider text-rose-300 uppercase">
                  How {sign.name} Loves:
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {sign.love.howYouLove}
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/25 bg-rose-950/20 p-5">
                <span className="text-xs font-bold tracking-wider text-rose-300 uppercase">
                  What {sign.name} Needs:
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {sign.love.whatYouNeed}
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/25 bg-rose-950/20 p-5">
                <span className="text-xs font-bold tracking-wider text-rose-300 uppercase">
                  What Attracts {sign.name}:
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {sign.love.whatAttractsYou}
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/25 bg-rose-950/20 p-5">
                <span className="text-xs font-bold tracking-wider text-rose-300 uppercase">
                  Watch Out For:
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {sign.love.whatCausesProblems}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CAREER & MONEY */}
          {activeTab === 'career' && (
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-blue-400 uppercase">
                  <Briefcase className="h-4 w-4" /> Career Approach
                </h4>
                <p className="mt-2 text-sm text-slate-300">{sign.career.workStyle}</p>
                <p className="mt-2 text-xs text-slate-400">
                  <strong className="text-slate-300">Motivation:</strong> {sign.career.motivation}
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-emerald-400 uppercase">
                  <Coins className="h-4 w-4" /> Financial Instincts
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  {sign.money.spendingTendencies}
                </p>
                <div className="mt-3 rounded-xl border border-emerald-500/25 bg-emerald-950/20 p-3.5 text-xs text-emerald-200">
                  <strong>Stewardship Advice:</strong> {sign.money.practicalAdvice}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TODAY'S HOROSCOPE */}
          {activeTab === 'today' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Deterministic Western Ephemeris</span>
                <span>{horoscope.date}</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-rose-500/30 bg-[#150a18] p-4 text-xs">
                  <p className="font-bold text-rose-300 uppercase">❤️ Love</p>
                  <p className="mt-1.5 leading-relaxed text-slate-300">{horoscope.love}</p>
                </div>
                <div className="rounded-xl border border-blue-500/30 bg-[#091122] p-4 text-xs">
                  <p className="font-bold text-blue-300 uppercase">💼 Work</p>
                  <p className="mt-1.5 leading-relaxed text-slate-300">{horoscope.work}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-[#071714] p-4 text-xs">
                  <p className="font-bold text-emerald-300 uppercase">💰 Money</p>
                  <p className="mt-1.5 leading-relaxed text-slate-300">{horoscope.money}</p>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-[#120a22] p-4 text-xs">
                  <p className="font-bold text-purple-300 uppercase">🧠 Mood</p>
                  <p className="mt-1.5 leading-relaxed text-slate-300">{horoscope.mood}</p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-center">
                <span className="text-[11px] font-bold text-amber-400 uppercase">
                  Today&apos;s Advice
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-amber-100">
                  &ldquo;{horoscope.advice}&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-slate-400">
              Want to see your personal Moon and Rising signs?
            </p>
            <button
              onClick={() => {
                onClose();
                onCalculatePersonal();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-transform hover:scale-105"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Calculate My Chart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
