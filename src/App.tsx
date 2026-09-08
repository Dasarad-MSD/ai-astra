import React, { useState, useEffect } from 'react';
import {
  BirthDetails,
  AstrologyCalculationResult,
  ZodiacSignInfo,
} from './types';
import { calculateAstrology } from './services/astrologyCalculator';
import { ZODIAC_DATA } from './data/zodiacData';
import { CosmicCanvas } from './components/CosmicCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ZodiacGrid } from './components/ZodiacGrid';
import { BirthDetailsModal } from './components/BirthDetailsModal';
import { CalculatingScreen } from './components/CalculatingScreen';
import { ReadingResult } from './components/ReadingResult';
import { CompatibilitySection } from './components/CompatibilitySection';
import { TodayHoroscopeSection } from './components/TodayHoroscopeSection';
import { SignDetailModal } from './components/SignDetailModal';
import { DisclaimerFooter } from './components/DisclaimerFooter';

export default function App() {
  const [activeView, setActiveView] = useState<
    'home' | 'zodiac' | 'compatibility' | 'today' | 'result'
  >('home');

  const [isBirthModalOpen, setIsBirthModalOpen] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [pendingCalculation, setPendingCalculation] =
    useState<AstrologyCalculationResult | null>(null);

  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [calculationResult, setCalculationResult] =
    useState<AstrologyCalculationResult | null>(null);

  const [inspectedSign, setInspectedSign] = useState<ZodiacSignInfo | null>(null);

  // Restore session from local memory if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('astra_session');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.birthDetails && parsed.calculationResult) {
          setBirthDetails(parsed.birthDetails);
          setCalculationResult(parsed.calculationResult);
        }
      }
    } catch {
      // Ignore sessionStorage failure in restricted iframes
    }
  }, []);

  const handleBirthFormSubmit = (details: BirthDetails) => {
    setIsBirthModalOpen(false);

    // Compute astronomical result
    const result = calculateAstrology(details);
    setPendingCalculation(result);
    setBirthDetails(details);
    setIsCalculating(true);
  };

  const handleCalculationComplete = () => {
    if (pendingCalculation && birthDetails) {
      setCalculationResult(pendingCalculation);
      setActiveView('result');
      try {
        sessionStorage.setItem(
          'astra_session',
          JSON.stringify({
            birthDetails,
            calculationResult: pendingCalculation,
          })
        );
      } catch {
        // Safe fail
      }
    }
    setIsCalculating(false);
    setPendingCalculation(null);
  };

  const handleResetSession = () => {
    setBirthDetails(null);
    setCalculationResult(null);
    setPendingCalculation(null);
    setActiveView('home');
    try {
      sessionStorage.removeItem('astra_session');
    } catch {
      // Safe fail
    }
  };

  // Determine ambient background glow based on current reading or default
  const activeThemeColor = calculationResult
    ? ZODIAC_DATA[calculationResult.sunSign]?.theme.bgGlowClass || 'rgba(168, 85, 247, 0.15)'
    : 'rgba(168, 85, 247, 0.12)';

  return (
    <div className="relative min-h-screen w-full bg-[#05060d] text-slate-100 selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Interactive Cosmic Starlight & Nebula Canvas */}
      <CosmicCanvas glowColor={activeThemeColor} density={130} />

      {/* Navigation Header */}
      <Navbar
        onOpenBirthModal={() => setIsBirthModalOpen(true)}
        activeView={activeView}
        setActiveView={(v) => {
          setActiveView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        hasResult={!!calculationResult}
        onViewResult={() => {
          setActiveView('result');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* VIEW 1: HOME */}
        {activeView === 'home' && (
          <>
            <HeroSection
              onDiscoverClick={() => setIsBirthModalOpen(true)}
              onExploreSignsClick={() => {
                const el = document.getElementById('zodiac-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActiveView('zodiac');
                }
              }}
              onSelectSign={(key) => setInspectedSign(ZODIAC_DATA[key])}
            />

            <ZodiacGrid
              onSelectSign={(sign) => setInspectedSign(sign)}
              onOpenBirthModal={() => setIsBirthModalOpen(true)}
            />
          </>
        )}

        {/* VIEW 2: ZODIAC (The 12 Signs) */}
        {activeView === 'zodiac' && (
          <ZodiacGrid
            onSelectSign={(sign) => setInspectedSign(sign)}
            onOpenBirthModal={() => setIsBirthModalOpen(true)}
          />
        )}

        {/* VIEW 3: COMPATIBILITY */}
        {activeView === 'compatibility' && (
          <CompatibilitySection
            onDiscoverMySign={() => setIsBirthModalOpen(true)}
          />
        )}

        {/* VIEW 4: TODAY'S HOROSCOPE */}
        {activeView === 'today' && (
          <TodayHoroscopeSection
            onDiscoverMySign={() => setIsBirthModalOpen(true)}
          />
        )}

        {/* VIEW 5: PERSONAL READING RESULT */}
        {activeView === 'result' && calculationResult && (
          <ReadingResult
            calculation={calculationResult}
            onRecalculate={() => setIsBirthModalOpen(true)}
          />
        )}
      </main>

      {/* Birth Details Multi-Step Modal */}
      <BirthDetailsModal
        isOpen={isBirthModalOpen}
        onClose={() => setIsBirthModalOpen(false)}
        onSubmit={handleBirthFormSubmit}
        initialDetails={birthDetails}
      />

      {/* Cinematic Calculating Transition Screen */}
      {isCalculating && (
        <CalculatingScreen
          onComplete={handleCalculationComplete}
          userName={birthDetails?.name || ''}
        />
      )}

      {/* Single Sign Deep Inspector Modal */}
      <SignDetailModal
        sign={inspectedSign}
        onClose={() => setInspectedSign(null)}
        onCalculatePersonal={() => setIsBirthModalOpen(true)}
      />

      {/* Subtle Legal & Privacy Footer */}
      <DisclaimerFooter
        onResetSession={handleResetSession}
        hasStoredData={!!calculationResult}
      />
    </div>
  );
}
