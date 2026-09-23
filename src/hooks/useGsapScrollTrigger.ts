import { useEffect, RefObject } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';

interface UseGsapScrollTriggerOptions {
  triggerThreshold?: string; // Default: 'top 88%'
  once?: boolean;
}

/**
 * Custom React hook that sets up GSAP ScrollTrigger animations across
 * elements marked with architectural reveal classes:
 * - `.gsap-mask-text`: Masked text reveal rising from baseline
 * - `.gsap-stagger-group`: Staggered fade & rise of child elements
 * - `.gsap-datum-rule`: Architectural datum line expansion
 * - `.gsap-fade-up`: Smooth subtle translation & opacity
 */
export function useGsapScrollTrigger(
  scopeRef?: RefObject<HTMLElement | null>,
  deps: any[] = [],
  options: UseGsapScrollTriggerOptions = {}
) {
  const { triggerThreshold = 'top 88%', once = true } = options;

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scope = scopeRef?.current || document.body;

    const ctx = gsap.context(() => {
      // 1. Mask reveal on headings and primary text
      const maskElements = scope.querySelectorAll<HTMLElement>('.gsap-mask-text');
      maskElements.forEach((el) => {
        // If not already wrapped, ensure inner wrapper exists
        let inner = el.querySelector<HTMLElement>('.gsap-mask-inner');
        if (!inner) {
          const content = el.innerHTML;
          const tag = el.tagName.toLowerCase() === 'p' ? 'span' : 'div';
          el.innerHTML = `<${tag} class="gsap-mask-inner inline-block w-full">${content}</${tag}>`;
          inner = el.querySelector<HTMLElement>('.gsap-mask-inner');
        }

        if (inner) {
          gsap.fromTo(
            inner,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.15,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: el,
                start: triggerThreshold,
                once,
              },
            }
          );
        }
      });

      // 2. Staggered groups (e.g., stats, badge + title + description + buttons)
      const staggerGroups = scope.querySelectorAll<HTMLElement>('.gsap-stagger-group');
      staggerGroups.forEach((group) => {
        const children = group.children;
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.95,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: group,
                start: triggerThreshold,
                once,
              },
            }
          );
        }
      });

      // 3. Architectural datum lines
      const datumLines = scope.querySelectorAll<HTMLElement>('.gsap-datum-rule');
      datumLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: line,
              start: triggerThreshold,
              once,
            },
          }
        );
      });

      // 4. Subtle individual fade-up
      const fadeElements = scope.querySelectorAll<HTMLElement>('.gsap-fade-up');
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: triggerThreshold,
              once,
            },
          }
        );
      });

      // Refresh ScrollTrigger after DOM measurement
      ScrollTrigger.refresh();
    }, scope);

    return () => {
      ctx.revert();
    };
  }, deps);
}
