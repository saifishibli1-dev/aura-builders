import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';

export type RevealVariant = 'mask' | 'stagger-words' | 'stagger-lines' | 'datum' | 'fade-up';

interface ArchitecturalRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: string; // e.g. "top 88%"
  datumLabel?: string; // Optional architectural datum coordinate or eyebrow
  className?: string;
  innerClassName?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const ArchitecturalReveal: React.FC<ArchitecturalRevealProps> = ({
  children,
  as: Component = 'div',
  variant = 'mask',
  delay = 0,
  duration = 1.15,
  threshold = 'top 88%',
  datumLabel,
  className = '',
  innerClassName = '',
  staggerDelay = 0.045,
  once = true,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const datumLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, clipPath: 'none' });
      return;
    }

    const ctx = gsap.context(() => {
      if (variant === 'mask') {
        const maskTargets = el.querySelectorAll('.arch-mask-inner');
        const targets = maskTargets.length > 0 ? maskTargets : [el];

        gsap.fromTo(
          targets,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              start: threshold,
              once,
            },
          }
        );
      } else if (variant === 'stagger-words') {
        const wordSpans = el.querySelectorAll('.arch-word-inner');
        if (wordSpans.length > 0) {
          gsap.fromTo(
            wordSpans,
            {
              yPercent: 115,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: duration * 0.9,
              delay,
              stagger: staggerDelay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: threshold,
                once,
              },
            }
          );
        }
      } else if (variant === 'datum') {
        const datumLine = datumLineRef.current;
        const textTarget = el.querySelector('.arch-datum-text') || el;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: threshold,
            once,
          },
          delay,
        });

        if (datumLine) {
          tl.fromTo(
            datumLine,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.75, ease: 'power3.inOut' }
          );
        }

        tl.fromTo(
          textTarget,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: duration * 0.85, ease: 'power4.out' },
          '-=0.4'
        );
      } else if (variant === 'fade-up') {
        gsap.fromTo(
          el,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: threshold,
              once,
            },
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [variant, delay, duration, threshold, staggerDelay, once]);

  // If variant is 'stagger-words' and children is a string, split into masked words
  if (variant === 'stagger-words' && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <Component
        ref={containerRef as any}
        className={`inline-block ${className}`}
        aria-label={children}
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden align-top mr-[0.28em] py-[0.04em]">
            <span className={`inline-block arch-word-inner ${innerClassName}`}>
              {word}
            </span>
          </span>
        ))}
      </Component>
    );
  }

  // If variant is 'mask', wrap the child in an overflow-hidden mask container
  if (variant === 'mask') {
    const InnerTag = Component === 'p' || Component === 'span' ? 'span' : 'div';
    return (
      <Component ref={containerRef as any} className={`overflow-hidden ${className}`}>
        <InnerTag className={`arch-mask-inner block ${innerClassName}`}>
          {children}
        </InnerTag>
      </Component>
    );
  }

  // If variant is 'datum' (with architectural datum rule & coordinate)
  if (variant === 'datum') {
    return (
      <div ref={containerRef as any} className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-3">
          <div
            ref={datumLineRef}
            className="h-[1px] w-8 bg-[#c4a47c]/70 shrink-0"
          />
          {datumLabel && (
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#c4a47c]">
              {datumLabel}
            </span>
          )}
        </div>
        <div className={`arch-datum-text ${innerClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  // Default 'fade-up'
  return (
    <Component ref={containerRef as any} className={className}>
      {children}
    </Component>
  );
};
