import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../utils/gsapSetup';

interface ArchitecturalLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

const PHASES = [
  { percent: 24, label: 'ESTABLISHING GEOTECHNICAL LEVEL DATUM', coord: '+0\' 00"' },
  { percent: 52, label: 'SYNCHRONIZING STRUCTURAL STEEL & HEAVY TIMBER', coord: '+14\' 06"' },
  { percent: 81, label: 'COMPUTING CONTINUOUS AIR & THERMAL ENVELOPE', coord: '+28\' 00"' },
  { percent: 100, label: 'VERIFYING 1/16" TOLERANCE · MOVE-IN READY', coord: '+36\' 00"' },
];

export const ArchitecturalLoader: React.FC<ArchitecturalLoaderProps> = ({
  onComplete,
  forceShow = false,
}) => {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const bottomPanelRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const datumLineRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion && !forceShow) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const duration = forceShow ? 2.2 : 2.5;
    const progressObj = { value: 0 };

    // GSAP context for clean garbage collection
    const ctx = gsap.context(() => {
      // 1. Initial entrance of framing & center elements
      gsap.fromTo(
        centerContentRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
      );

      // 2. Blueprint SVG line drawing
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength?.() || 400;
        gsap.fromTo(
          pathRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut' }
        );
      }

      if (circleRef.current) {
        const length = circleRef.current.getTotalLength?.() || 260;
        gsap.fromTo(
          circleRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 2.0, ease: 'power2.inOut' }
        );
      }

      // 3. Laser Datum line expansion
      if (datumLineRef.current) {
        gsap.fromTo(
          datumLineRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: duration, ease: 'power1.inOut' }
        );
      }

      // 4. Progress counter animation
      gsap.to(progressObj, {
        value: 100,
        duration,
        ease: 'power2.inOut',
        onUpdate: () => {
          const currentVal = Math.floor(progressObj.value);
          setProgress(currentVal);

          if (currentVal >= 80) setPhaseIndex(3);
          else if (currentVal >= 50) setPhaseIndex(2);
          else if (currentVal >= 22) setPhaseIndex(1);
          else setPhaseIndex(0);
        },
        onComplete: () => {
          triggerExitSequence();
        },
      });
    }, containerRef);

    // Escape key handler to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerExitSequence();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ctx.revert();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [forceShow]);

  const triggerExitSequence = () => {
    if (isDismissing) return;
    setIsDismissing(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          onComplete?.();
        },
      });

      // Subtle scale and fade out of center elements
      tl.to(centerContentRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.45,
        ease: 'power2.in',
      });

      // Split shutter panel retraction (top panel slides up, bottom slides down)
      tl.to(
        topPanelRef.current,
        {
          yPercent: -100,
          duration: 0.95,
          ease: 'power4.inOut',
        },
        '-=0.15'
      );

      tl.to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 0.95,
          ease: 'power4.inOut',
        },
        '<'
      );
    }, containerRef);
  };

  if (!isVisible) return null;

  const currentPhase = PHASES[phaseIndex] || PHASES[0];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto select-none"
      role="dialog"
      aria-label="Loading Vander and Cole Architectural Experience"
      aria-busy="true"
    >
      {/* Top Split Panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#090b0e] border-b border-[#c4a47c]/25 z-10"
      >
        {/* Subtle Architectural Drafting Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #c4a47c 1px, transparent 1px),
              linear-gradient(to bottom, #c4a47c 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Top telemetry bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#8c94a2] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] animate-pulse" />
            <span className="text-white/80">Vander &amp; Cole · Architectural Builder</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[#727a88]">
            <span>SEATTLE · MARIN COUNTY</span>
            <span>LIC. WA: VANDERC921K · CA: 981240</span>
          </div>
          <button
            onClick={triggerExitSequence}
            className="px-2.5 py-1 text-[10px] text-[#c4a47c] border border-[#c4a47c]/40 hover:bg-[#c4a47c]/10 rounded-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Skip [ESC]
          </button>
        </div>
      </div>

      {/* Bottom Split Panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#090b0e] border-t border-[#c4a47c]/25 z-10"
      >
        {/* Subtle Architectural Drafting Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #c4a47c 1px, transparent 1px),
              linear-gradient(to bottom, #c4a47c 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Bottom coordinates bar */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#727a88] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#c4a47c]">DATUM ELEVATION</span>
            <span className="text-white font-semibold">{currentPhase.coord}</span>
          </div>
          <div className="text-[10px] text-[#8c94a2]">
            TOLERANCE SPEC: <span className="text-[#c4a47c]">1/16" LASER CALIBRATED</span>
          </div>
        </div>
      </div>

      {/* Center Interactive & Visual Content (Layered above panels) */}
      <div
        ref={centerContentRef}
        className="relative z-20 flex flex-col items-center justify-center max-w-xl px-6 text-center"
      >
        {/* Architectural Wireframe Emblem */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <svg
            className="w-full h-full text-[#c4a47c]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            {/* Outer drafting compass circle */}
            <circle
              ref={circleRef}
              cx="50"
              cy="50"
              r="44"
              strokeDasharray="4 3"
              className="opacity-40"
            />
            {/* Square blueprint grid boundary */}
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              stroke="#c4a47c"
              strokeWidth="0.75"
              className="opacity-50"
            />
            {/* Precision crosshairs */}
            <line x1="50" y1="6" x2="50" y2="94" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
            <line x1="6" y1="50" x2="94" y2="50" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
            {/* Intersecting Architectural "V & C" Path */}
            <path
              ref={pathRef}
              d="M32 34 L50 68 L68 34 M38 52 L62 52"
              stroke="#c4a47c"
              strokeWidth="2.2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>

          {/* Center glowing focal point */}
          <div className="absolute w-2 h-2 rounded-full bg-[#c4a47c] shadow-[0_0_12px_#c4a47c]" />
        </div>

        {/* Brand Display Wordmark */}
        <div className="overflow-hidden mb-3">
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-[0.3em] uppercase">
            Vander &amp; Cole
          </h1>
        </div>

        <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#9ea6b5] mb-8">
          Architectural Construction · Est. 2002
        </p>

        {/* Laser Datum Progress Gauge */}
        <div className="w-full max-w-md space-y-3">
          {/* Laser Rail Track */}
          <div className="relative w-full h-[2px] bg-[#1d222b] overflow-hidden rounded-full">
            <div
              ref={datumLineRef}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#91724c] via-[#c4a47c] to-[#e4cbab] shadow-[0_0_8px_#c4a47c]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Micro Telemetry Output */}
          <div className="flex items-baseline justify-between pt-1">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8c94a2] block">
                {currentPhase.label}
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-mono font-light text-white tabular-nums tracking-tight">
                {progress.toString().padStart(2, '0')}
                <span className="text-xs text-[#c4a47c] font-normal ml-0.5">%</span>
              </span>
            </div>
          </div>
        </div>

        {/* Subtle instruction footnote */}
        <div className="mt-8 text-[10px] font-mono text-[#5b6370] uppercase tracking-widest">
          Precision General Contractor · Seattle &amp; Marin
        </div>
      </div>
    </div>
  );
};
