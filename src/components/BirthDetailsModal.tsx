import React, { useState, useEffect, useRef } from 'react';
import {
  BirthDetails,
  VerifiedLocation,
} from '../types';
import {
  searchBirthplaceLocations,
  FEATURED_LOCATIONS,
} from '../services/geocodingService';
import { ANDHRA_PRADESH_CITIES, APCityLocation } from '../data/andhraPradeshCities';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Search,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Building2,
  ChevronDown,
  ChevronUp,
  Compass,
} from 'lucide-react';

interface BirthDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: BirthDetails) => void;
  initialDetails?: BirthDetails | null;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const BirthDetailsModal: React.FC<BirthDetailsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialDetails,
}) => {
  // Step state: 1 = Name, 2 = Date, 3 = Time, 4 = Birthplace
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [name, setName] = useState('');
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(8); // August (1-based)
  const [year, setYear] = useState<number>(1998);

  const [birthTimeKnown, setBirthTimeKnown] = useState<boolean>(true);
  const [hour12, setHour12] = useState<number>(7);
  const [minute, setMinute] = useState<number>(30);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const [locationQuery, setLocationQuery] = useState('');
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [locationResults, setLocationResults] = useState<VerifiedLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<VerifiedLocation | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Andhra Pradesh city browsing filters
  const [apRegionTab, setApRegionTab] = useState<
    'major' | 'coastal' | 'rayalaseema' | 'uttarandhra' | 'godavari' | 'all'
  >('major');
  const [isAPBrowserExpanded, setIsAPBrowserExpanded] = useState(false);

  const [formError, setFormError] = useState<string | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize with initial details if available
  useEffect(() => {
    if (initialDetails) {
      setName(initialDetails.name || '');
      setDay(initialDetails.day || 15);
      setMonth(initialDetails.month || 8);
      setYear(initialDetails.year || 1998);
      setBirthTimeKnown(initialDetails.birthTimeKnown);
      if (initialDetails.hour12 !== undefined) setHour12(initialDetails.hour12);
      if (initialDetails.minute !== undefined) setMinute(initialDetails.minute);
      if (initialDetails.period) setPeriod(initialDetails.period);
      if (initialDetails.location) {
        setSelectedLocation(initialDetails.location);
        setLocationQuery(initialDetails.location.displayName);
      }
    }
  }, [initialDetails]);

  // Debounced real geocoding search
  useEffect(() => {
    if (!locationQuery || locationQuery.trim().length < 2) {
      setLocationResults([]);
      setSearchError(null);
      return;
    }

    if (selectedLocation && selectedLocation.displayName === locationQuery) {
      return;
    }

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      setIsSearchingLocation(true);
      setSearchError(null);
      try {
        const results = await searchBirthplaceLocations(locationQuery);
        setLocationResults(results);
        if (results.length === 0) {
          setSearchError("We couldn't find that location. Try entering the village, town or district name.");
        }
      } catch {
        setSearchError("We couldn't find that location. Try entering the village, town or district name.");
      } finally {
        setIsSearchingLocation(false);
      }
    }, 400);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [locationQuery, selectedLocation]);

  if (!isOpen) return null;

  // Validation per step
  const validateAndNext = () => {
    setFormError(null);

    if (currentStep === 1) {
      if (!name.trim()) {
        setFormError('Please enter your name to personalize your reading.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate date
      const d = parseInt(String(day), 10);
      const m = parseInt(String(month), 10);
      const y = parseInt(String(year), 10);

      if (isNaN(d) || isNaN(m) || isNaN(y) || d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2026) {
        setFormError('Please enter a valid date of birth.');
        return;
      }

      // Validate leap year / month days
      const daysInMonth = new Date(y, m, 0).getDate();
      if (d > daysInMonth) {
        setFormError(`Please enter a valid date of birth (${MONTHS[m - 1]} has ${daysInMonth} days in ${y}).`);
        return;
      }

      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!selectedLocation) {
        setFormError('Please search and select a verified birthplace from the list.');
        return;
      }

      // Ready to calculate!
      onSubmit({
        name: name.trim(),
        day,
        month,
        year,
        birthTimeKnown,
        hour12: birthTimeKnown ? hour12 : undefined,
        minute: birthTimeKnown ? minute : undefined,
        period: birthTimeKnown ? period : undefined,
        location: selectedLocation,
      });
    }
  };

  const handleSelectLocation = (loc: VerifiedLocation) => {
    setSelectedLocation(loc);
    setLocationQuery(loc.displayName);
    setLocationResults([]);
    setSearchError(null);
    setFormError(null);
  };

  return (
    <div
      id="birth-details-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-[#05060d]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-[#0a0d1a] shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/25 via-purple-600/25 to-blue-600/25 blur-3xl" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold tracking-wide text-white">
                ASTRA COSMIC CHART
              </h2>
              <p className="text-xs text-slate-400">Step {currentStep} of 4</p>
            </div>
          </div>

          <button
            id="close-birth-modal-btn"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500 transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {formError && (
            <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-rose-500/40 bg-rose-950/40 p-3.5 text-xs text-rose-200">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>{formError}</span>
            </div>
          )}

          {/* STEP 1: NAME */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
                  Step 1
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-white sm:text-3xl">
                  WHAT SHOULD WE CALL YOU?
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  We use your name to personalize your Western astrology reading.
                </p>
              </div>

              <div className="pt-4">
                <label
                  htmlFor="birth-name-input"
                  className="mb-2 block text-xs font-semibold tracking-wider text-slate-300 uppercase"
                >
                  Your Name
                </label>
                <input
                  id="birth-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && validateAndNext()}
                  className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-lg font-medium text-white placeholder-slate-500 focus:border-amber-400 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                />
              </div>
            </div>
          )}

          {/* STEP 2: DATE OF BIRTH */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
                  Step 2
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-white sm:text-3xl">
                  WHEN WERE YOU BORN?
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Please provide your date of birth in <strong>DD / MM / YYYY</strong> format.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4">
                {/* DAY */}
                <div>
                  <label className="mb-2 block text-center text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Day (DD)
                  </label>
                  <select
                    id="birth-day-select"
                    value={day}
                    onChange={(e) => setDay(parseInt(e.target.value, 10))}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3.5 text-center text-base font-semibold text-white focus:border-amber-400 focus:outline-none"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d} className="bg-[#0f1222] text-white">
                        {String(d).padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MONTH */}
                <div>
                  <label className="mb-2 block text-center text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Month (MM)
                  </label>
                  <select
                    id="birth-month-select"
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value, 10))}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3.5 text-center text-base font-semibold text-white focus:border-amber-400 focus:outline-none"
                  >
                    {MONTHS.map((mName, idx) => (
                      <option key={idx + 1} value={idx + 1} className="bg-[#0f1222] text-white">
                        {mName.slice(0, 3)} ({String(idx + 1).padStart(2, '0')})
                      </option>
                    ))}
                  </select>
                </div>

                {/* YEAR */}
                <div>
                  <label className="mb-2 block text-center text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Year (YYYY)
                  </label>
                  <select
                    id="birth-year-select"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value, 10))}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3.5 text-center text-base font-semibold text-white focus:border-amber-400 focus:outline-none"
                  >
                    {Array.from({ length: 90 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y} className="bg-[#0f1222] text-white">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Verified Date Preview */}
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-400">
                <Calendar className="h-4 w-4 text-amber-400" />
                <span>
                  Selected Date:{' '}
                  <strong className="text-white">
                    {String(day).padStart(2, '0')} {MONTHS[month - 1]} {year}
                  </strong>
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: BIRTH TIME */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
                  Step 3
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-white sm:text-3xl">
                  WHAT TIME WERE YOU BORN?
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Birth time is optional. Used to calculate your exact Rising Sign (Ascendant).
                </p>
              </div>

              {birthTimeKnown ? (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-center gap-3">
                    {/* Hour */}
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[11px] font-semibold text-slate-400 uppercase">
                        Hour
                      </span>
                      <select
                        id="birth-hour-select"
                        value={hour12}
                        onChange={(e) => setHour12(parseInt(e.target.value, 10))}
                        className="h-14 w-20 rounded-2xl border border-white/15 bg-white/[0.05] text-center font-display text-xl font-bold text-white focus:border-amber-400 focus:outline-none"
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                          <option key={h} value={h} className="bg-[#0f1222] text-white">
                            {String(h).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <span className="mt-5 font-display text-2xl text-slate-500">:</span>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[11px] font-semibold text-slate-400 uppercase">
                        Minutes
                      </span>
                      <select
                        id="birth-minute-select"
                        value={minute}
                        onChange={(e) => setMinute(parseInt(e.target.value, 10))}
                        className="h-14 w-20 rounded-2xl border border-white/15 bg-white/[0.05] text-center font-display text-xl font-bold text-white focus:border-amber-400 focus:outline-none"
                      >
                        {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                          <option key={m} value={m} className="bg-[#0f1222] text-white">
                            {String(m).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* AM / PM Toggle */}
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[11px] font-semibold text-slate-400 uppercase">
                        AM / PM
                      </span>
                      <div className="flex h-14 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05]">
                        <button
                          type="button"
                          id="period-am-btn"
                          onClick={() => setPeriod('AM')}
                          className={`px-4 text-sm font-bold tracking-wider transition-colors ${
                            period === 'AM'
                              ? 'bg-amber-500 text-black shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          AM
                        </button>
                        <button
                          type="button"
                          id="period-pm-btn"
                          onClick={() => setPeriod('PM')}
                          className={`px-4 text-sm font-bold tracking-wider transition-colors ${
                            period === 'PM'
                              ? 'bg-amber-500 text-black shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          PM
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-xs text-slate-400">
                    Example format: <span className="font-semibold text-white">07 : 35 PM</span>
                  </p>

                  {/* Skip Button */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      id="skip-birth-time-btn"
                      onClick={() => setBirthTimeKnown(false)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-slate-300 uppercase hover:border-white/25 hover:text-white"
                    >
                      I Don&apos;t Know My Birth Time
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5 text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-amber-200">
                    Don&apos;t know your exact birth time? No problem.
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    &ldquo;You can continue without it. Some parts of a birth chart, such as your Rising Sign,
                    depend on the exact birth time, so we won&apos;t guess them.&rdquo;
                  </p>
                  <button
                    type="button"
                    onClick={() => setBirthTimeKnown(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 underline underline-offset-4 hover:text-amber-300"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    I remember my birth time
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: BIRTHPLACE SEARCH */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
                  Step 4
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-white sm:text-3xl">
                  WHERE WERE YOU BORN?
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Select your city in Andhra Pradesh below or search any global location.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative pt-1">
                <div className="relative flex items-center">
                  <Search className="pointer-events-none absolute left-4 h-4 w-4 text-slate-400" />
                  <input
                    id="birthplace-search-input"
                    type="text"
                    value={locationQuery}
                    onChange={(e) => {
                      setLocationQuery(e.target.value);
                      setSelectedLocation(null);
                    }}
                    placeholder="Search e.g. Visakhapatnam, Vijayawada, Rajahmundry, Dwarapudi..."
                    className="w-full rounded-2xl border border-white/15 bg-white/[0.04] py-3 pr-4 pl-11 text-xs sm:text-sm font-medium text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                  />
                  {isSearchingLocation && (
                    <div className="absolute right-4 h-4 w-4 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
                  )}
                </div>

                {/* Selected Verified Location Pill */}
                {selectedLocation && (
                  <div className="mt-3 flex items-start justify-between rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3.5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold tracking-wide text-emerald-200">
                            {selectedLocation.villageOrCity}
                          </p>
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                            Verified Ephemeris
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          {selectedLocation.displayName}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">
                          Lat: {selectedLocation.latitude.toFixed(4)}, Lon:{' '}
                          {selectedLocation.longitude.toFixed(4)} • {selectedLocation.timezone}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLocation(null);
                        setLocationQuery('');
                      }}
                      className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-slate-400 hover:border-white/25 hover:text-white"
                    >
                      Change
                    </button>
                  </div>
                )}

                {/* Search Error */}
                {searchError && (
                  <p className="mt-2 text-xs leading-relaxed text-rose-300">
                    {searchError}
                  </p>
                )}

                {/* Autocomplete Dropdown List */}
                {locationResults.length > 0 && !selectedLocation && (
                  <div className="mt-2 max-h-56 overflow-y-auto rounded-2xl border border-white/15 bg-[#0e1224] p-2 shadow-2xl">
                    <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Matching Locations:
                    </p>
                    {locationResults.map((loc, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectLocation(loc)}
                        className="flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition-colors hover:bg-white/10"
                      >
                        <div className="flex items-start gap-2.5">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                          <div>
                            <p className="font-semibold text-white">
                              {loc.villageOrCity}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {loc.displayName}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 rounded bg-white/5 px-2 py-0.5 text-[9px] text-amber-300">
                          {loc.districtOrState || 'India'}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Interactive Andhra Pradesh Cities Directory */}
              {!selectedLocation && locationResults.length === 0 && (
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-amber-400" />
                      <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                        Cities & Towns in Andhra Pradesh
                      </span>
                    </div>
                    <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                      {ANDHRA_PRADESH_CITIES.length}+ Locations
                    </span>
                  </div>

                  {/* Region Filter Tabs */}
                  <div className="flex flex-wrap gap-1 border-b border-white/[0.07] pb-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setApRegionTab('major')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'major'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ⭐ Major Cities
                    </button>
                    <button
                      type="button"
                      onClick={() => setApRegionTab('coastal')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'coastal'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Coastal Andhra
                    </button>
                    <button
                      type="button"
                      onClick={() => setApRegionTab('rayalaseema')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'rayalaseema'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Rayalaseema
                    </button>
                    <button
                      type="button"
                      onClick={() => setApRegionTab('uttarandhra')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'uttarandhra'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Uttarandhra
                    </button>
                    <button
                      type="button"
                      onClick={() => setApRegionTab('godavari')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'godavari'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Godavari & Mandals
                    </button>
                    <button
                      type="button"
                      onClick={() => setApRegionTab('all')}
                      className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                        apRegionTab === 'all'
                          ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      All AP
                    </button>
                  </div>

                  {/* Filtered City Buttons Grid */}
                  <div className="max-h-48 overflow-y-auto pr-1">
                    <div className="flex flex-wrap gap-1.5">
                      {ANDHRA_PRADESH_CITIES.filter((city) => {
                        if (apRegionTab === 'major') return city.category === 'Major City';
                        if (apRegionTab === 'coastal') return city.region === 'Coastal Andhra';
                        if (apRegionTab === 'rayalaseema') return city.region === 'Rayalaseema';
                        if (apRegionTab === 'uttarandhra') return city.region === 'Uttarandhra';
                        if (apRegionTab === 'godavari') {
                          return (
                            city.district.includes('Godavari') ||
                            city.district.includes('Konaseema') ||
                            city.district === 'Kakinada'
                          );
                        }
                        return true;
                      }).map((city, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectLocation(city)}
                          className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-200 transition-all hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-white"
                        >
                          <span className="font-medium text-white group-hover:text-amber-300">
                            {city.villageOrCity}
                          </span>
                          <span className="rounded bg-white/5 px-1 py-0.2 text-[9px] text-slate-400 group-hover:text-slate-300">
                            {city.district}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            {currentStep > 1 ? (
              <button
                id="birth-modal-back-btn"
                type="button"
                onClick={() => {
                  setFormError(null);
                  setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
                }}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wider text-slate-300 uppercase hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              id="birth-modal-next-btn"
              type="button"
              onClick={validateAndNext}
              className="flex items-center gap-2 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span>{currentStep === 4 ? 'Calculate My Zodiac' : 'Continue'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
