import React, { useState } from 'react';
import { Sparkles, Menu, X, Compass, HeartHandshake, Calendar, Star } from 'lucide-react';

interface NavbarProps {
  onOpenBirthModal: () => void;
  activeView: 'home' | 'zodiac' | 'compatibility' | 'today' | 'result';
  setActiveView: (view: 'home' | 'zodiac' | 'compatibility' | 'today' | 'result') => void;
  hasResult: boolean;
  onViewResult?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBirthModal,
  activeView,
  setActiveView,
  hasResult,
  onViewResult,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: {
    key: 'home' | 'zodiac' | 'compatibility' | 'today';
    label: string;
    mobileLabel?: string;
  }[] = [
    { key: 'home', label: 'Home' },
    { key: 'zodiac', label: 'Zodiac' },
    { key: 'compatibility', label: 'Compatibility' },
    { key: 'today', label: "Today's Horoscope", mobileLabel: 'Today' },
  ];

  const handleNavClick = (key: 'home' | 'zodiac' | 'compatibility' | 'today') => {
    setActiveView(key);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="astra-header"
      className="sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#05060d]/80 backdrop-blur-xl transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <button
          id="astra-brand-logo-btn"
          onClick={() => setActiveView('home')}
          className="group flex items-center gap-3.5 text-left focus:outline-none"
        >
          {/* Constellation Star Logo Glyph */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-purple-500/10 to-blue-500/10 shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5 text-amber-300 transition-transform duration-500 group-hover:rotate-45"
            >
              <path
                d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
                fill="currentColor"
                fillOpacity="0.25"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping opacity-75" />
          </div>

          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-bold tracking-[0.25em] text-white transition-colors group-hover:text-amber-200">
                ASTRA
              </span>
            </div>
            <p className="hidden text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase sm:block">
              Western Astrology
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeView === link.key;
            return (
              <button
                id={`nav-link-${link.key}`}
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={`group relative text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isActive
                    ? 'font-medium text-amber-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {hasResult && onViewResult && (
            <button
              id="nav-my-reading-btn"
              onClick={onViewResult}
              className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-4 py-2 text-xs font-medium tracking-wider text-purple-200 uppercase backdrop-blur-md transition-all duration-200 hover:border-purple-400 hover:bg-purple-900/50 hover:text-white"
            >
              <Star className="h-3.5 w-3.5 text-purple-300" />
              My Reading
            </button>
          )}

          <button
            id="nav-discover-sign-btn"
            onClick={onOpenBirthModal}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-purple-600/20 px-6 py-2.5 text-xs font-semibold tracking-widest text-amber-200 uppercase backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-300 transition-transform duration-300 group-hover:rotate-12" />
            <span>Discover My Sign</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {hasResult && onViewResult && (
            <button
              onClick={onViewResult}
              className="rounded-full border border-purple-500/40 bg-purple-950/50 px-3 py-1.5 text-[11px] font-medium tracking-wider text-purple-200 uppercase"
            >
              Reading
            </button>
          )}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#05060d]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeView === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.key)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'border border-amber-400/30 bg-amber-500/10 font-medium text-amber-200'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.mobileLabel || link.label}</span>
                  {link.key === 'home' && <Compass className="h-4 w-4 text-slate-500" />}
                  {link.key === 'zodiac' && <Star className="h-4 w-4 text-slate-500" />}
                  {link.key === 'compatibility' && <HeartHandshake className="h-4 w-4 text-slate-500" />}
                  {link.key === 'today' && <Calendar className="h-4 w-4 text-slate-500" />}
                </button>
              );
            })}

            <div className="pt-2">
              <button
                id="mobile-nav-discover-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBirthModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-500/30 to-orange-500/30 py-3 text-xs font-semibold tracking-widest text-amber-100 uppercase"
              >
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>Discover My Sign</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
