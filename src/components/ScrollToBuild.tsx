import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, ChevronRight, Layers, Ruler } from 'lucide-react';

interface StageInfo {
  index: number;
  label: string;
  tagline: string;
  elevation: string;
  specs: { label: string; value: string }[];
  description: string;
}

const STAGES: StageInfo[] = [
  {
    index: 1,
    label: 'Foundation & Earthwork',
    tagline: 'Every project starts at level ground.',
    elevation: '+0\' 00" Slab Grade',
    specs: [
      { label: 'Concrete Spec', value: '5,500 PSI High-Early' },
      { label: 'Piling Depth', value: '38 ft into Bedrock' },
      { label: 'Rebar Grid', value: '#7 Grade 60 Epoxy' },
      { label: 'Tolerance', value: '±1.5mm Laser Level' }
    ],
    description: 'Deep foundation friction pilings, hydrostatic waterproofing, and monolithic post-tensioned structural slab engineered for 100-year seismic resilience.'
  },
  {
    index: 2,
    label: 'Structural Framing',
    tagline: 'Framed by hand. Checked twice.',
    elevation: '+14\' 06" Plate Height',
    specs: [
      { label: 'Timber Species', value: 'FSC Douglas Fir #1' },
      { label: 'Steel Moment', value: '74 Tons Blackened Steel' },
      { label: 'Fasteners', value: 'Simpson Strong-Tie HD' },
      { label: 'Deflection Target', value: 'L/720 Over-Engineered' }
    ],
    description: 'Heavy timber joinery married to rigid steel moment frames, creating sweeping 45-foot column-free living spans and opening clear sightlines to the horizons.'
  },
  {
    index: 3,
    label: 'Envelope & Glazing',
    tagline: 'Weather-tight envelope. Engineered tolerances.',
    elevation: '+24\' 00" Roof Parapet',
    specs: [
      { label: 'Airtightness', value: '0.45 ACH50 Passive Standard' },
      { label: 'Glazing System', value: 'Sky-Frame Triple-Pane' },
      { label: 'R-Value', value: 'R-38 Continuous Exterior' },
      { label: 'Rainscreen', value: 'Clear Vertical Cedar' }
    ],
    description: 'Continuous exterior insulation, self-adhering vapor-permeable air barriers, and custom Swiss motorized glass walls tested to withstand 110 mph driving rain.'
  },
  {
    index: 4,
    label: 'Move-In Completion',
    tagline: 'Move-in ready. Right on schedule.',
    elevation: '+28\' 06" Total Height',
    specs: [
      { label: 'Millwork', value: 'Hand-Crafted Rift White Oak' },
      { label: 'Flooring', value: 'Honed Roman Classico Travertine' },
      { label: 'Air Commission', value: '100% HEPA Balancing' },
      { label: 'Warranty', value: '10-Year Structural Guarantee' }
    ],
    description: 'Museum-grade architectural finishes, integrated invisible audio, ambient architectural cove illumination, and landscaped reflection courtyards ready for occupancy.'
  }
];

export const ScrollToBuild: React.FC<{ onRequestConsultation?: () => void }> = ({ onRequestConsultation }) => {
  const [progress, setProgress] = useState<number>(15);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const animRef = useRef<number | null>(null);

  // Active stage based on progress (0-100)
  const activeStageIndex = progress < 28 ? 0 : progress < 58 ? 1 : progress < 85 ? 2 : 3;
  const currentStage = STAGES[activeStageIndex];

  // Auto-play animation
  useEffect(() => {
    if (isPlaying) {
      let lastTime = performance.now();
      const step = (time: number) => {
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        setProgress((prev) => {
          const next = prev + delta * 14;
          if (next >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return next;
        });
        animRef.current = requestAnimationFrame(step);
      };
      animRef.current = requestAnimationFrame(step);
    } else if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying]);

  const handleStageClick = (idx: number) => {
    const targets = [15, 42, 70, 98];
    setProgress(targets[idx]);
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0d10] border-t border-b border-[#21252d] overflow-hidden">
      {/* Background architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c4a47c] mb-3">
              <Layers className="w-4 h-4" />
              <span>Interactive Architectural Construction Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white max-w-2xl text-balance">
              We build what lasts.
            </h2>
            <p className="mt-3 text-base text-[#9fa6b2] max-w-xl">
              Drag the timeline or select a milestone below to watch an architectural residence rise from raw foundation earth to final move-in perfection.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1c2027] border border-[#2f3542] hover:border-[#c4a47c] text-xs font-medium text-white transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#c4a47c]" /> : <Play className="w-3.5 h-3.5 text-[#c4a47c]" />}
              <span>{isPlaying ? 'Pause Build' : 'Auto Play Build'}</span>
            </button>
            <button
              onClick={() => {
                setProgress(10);
                setIsPlaying(false);
              }}
              className="p-2.5 rounded-sm bg-[#1c2027] border border-[#2f3542] hover:border-neutral-500 text-[#9fa6b2] hover:text-white transition-all cursor-pointer"
              title="Reset to Ground Zero"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* The Main Interactive Visual Stage */}
        <div className="relative w-full rounded-sm border border-[#252a34] bg-[#12151b] overflow-hidden shadow-2xl">
          {/* Top HUD Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#171b22] border-b border-[#232832] text-xs font-mono">
            <div className="flex items-center gap-4 text-[#8a92a0]">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c4a47c] animate-pulse"></span>
                PHASE 0{currentStage.index}
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Ruler className="w-3 h-3 text-[#c4a47c]" />
                {currentStage.elevation}
              </span>
            </div>
            <div className="text-right text-[#c4a47c] font-medium">
              Progress: <span className="tabular-nums text-white font-bold">{Math.round(progress)}%</span> Complete
            </div>
          </div>

          {/* Visual Canvas Viewport */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] bg-[#0d0f14] overflow-hidden flex items-center justify-center">
            
            {/* Visual Layer 1: Construction Framing Photo (fades in during phase 1 & 2) */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 ease-out"
              style={{
                opacity: progress < 25 ? 0.3 : progress < 75 ? 0.95 : 0.05,
              }}
            >
              <img
                src="/src/assets/images/construction_framing_craft_1790156533745.jpg"
                alt="Timber and steel architectural framing"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-[#0d0f14]/80" />
            </div>

            {/* Visual Layer 2: Completed Residence (fades in as progress approaches 100) */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 ease-out"
              style={{
                opacity: progress < 45 ? 0 : Math.min(1, (progress - 45) / 45),
              }}
            >
              <img
                src="/src/assets/images/hero_modern_residence_1790156520352.jpg"
                alt="Completed modern luxury residence at dusk"
                className="w-full h-full object-cover filter brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-[#0d0f14]/60" />
            </div>

            {/* Architectural Laser & Blueprint Overlay Lines that adapt to progress */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Foundation rebar guide line */}
              <div 
                className="absolute bottom-16 left-8 right-8 border-b border-dashed border-[#c4a47c]/40 transition-all duration-300"
                style={{ opacity: progress > 5 ? 1 : 0.2 }}
              >
                <span className="text-[10px] font-mono text-[#c4a47c]/80 uppercase tracking-widest pl-2">
                  Structural Datum 0.00 — Friction Piling Array (32x Cast-in-Place)
                </span>
              </div>

              {/* Floor 2 Beam Line */}
              <div 
                className="absolute bottom-56 left-8 right-8 border-b border-dashed border-[#38bdf8]/30 transition-all duration-300"
                style={{ opacity: progress > 35 ? 1 : 0 }}
              >
                <span className="text-[10px] font-mono text-[#38bdf8]/80 uppercase tracking-widest pl-2">
                  Level 02 — W18x86 Structural Steel Cantilever Arm
                </span>
              </div>

              {/* Dynamic Laser Elevation Scan Line */}
              <div 
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c4a47c] to-transparent shadow-[0_0_12px_#c4a47c] transition-all duration-200"
                style={{
                  bottom: `${15 + (progress * 0.75)}%`
                }}
              />
            </div>

            {/* Central Cinematic Typography Banner (The core moment from Video 1) */}
            <div className="relative z-10 text-center px-4 max-w-3xl pointer-events-none">
              <div className="inline-block px-3 py-1 rounded-sm bg-[#0e1013]/90 border border-[#c4a47c]/40 text-[#c4a47c] text-xs font-mono tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md">
                Phase 0{currentStage.index} — {currentStage.label}
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium tracking-tight text-white drop-shadow-2xl">
                {currentStage.tagline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#d1d5db] font-light max-w-xl mx-auto drop-shadow-md bg-black/40 p-2 rounded backdrop-blur-sm">
                {currentStage.description}
              </p>
            </div>

            {/* Live Telemetry Card (Bottom Left) */}
            <div className="absolute bottom-6 left-6 z-20 hidden md:block bg-[#12151b]/95 backdrop-blur-md border border-[#2b313d] p-4 rounded-sm shadow-xl max-w-xs">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9fa6b2] mb-2 flex items-center justify-between">
                <span>Engineering Data</span>
                <span className="text-[#10b981] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> QA Approved
                </span>
              </div>
              <div className="space-y-1.5">
                {currentStage.specs.map((item, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-[#717886]">{item.label}:</span>
                    <span className="font-mono text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Trigger (Bottom Right) */}
            {progress >= 85 && (
              <div className="absolute bottom-6 right-6 z-20 animate-fade-in">
                <button
                  onClick={onRequestConsultation}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold tracking-wide uppercase transition-all rounded-sm shadow-xl cursor-pointer"
                >
                  <span>Commission Your Residence</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Scrub Controller Bar */}
          <div className="p-6 bg-[#15181f] border-t border-[#232832]">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8a92a0]">
                Interactive Scrub:
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => {
                  setProgress(Number(e.target.value));
                  setIsPlaying(false);
                }}
                className="w-full h-1.5 bg-[#262c38] rounded-lg appearance-none cursor-pointer accent-[#c4a47c]"
              />
            </div>

            {/* 4 Discrete Stage Selectors */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
              {STAGES.map((s, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={s.index}
                    onClick={() => handleStageClick(idx)}
                    className={`text-left p-3 rounded-sm border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1e232c] border-[#c4a47c] text-white shadow-md'
                        : 'bg-[#101217] border-[#222731] text-[#7d8594] hover:border-[#353d4c] hover:text-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isActive ? 'text-[#c4a47c] font-bold' : 'text-[#586170]'}>
                        STAGE 0{s.index}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]"></span>}
                    </div>
                    <div className="text-xs font-medium truncate">{s.label}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
