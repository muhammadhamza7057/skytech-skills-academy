import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Check if the user has requested reduced motion.
 */
export function isReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Check if the device is a mobile viewport.
 */
export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Subtle entrance animation for the Hero section.
 * Sequence:
 * 1. Eyebrow & Heading (0ms)
 * 2. Description (80ms)
 * 3. Buttons (160ms)
 * 4. Trust indicators (240ms)
 */
export function animateHero(containerRef) {
  if (!containerRef?.current) return
  if (isReducedMotion()) {
    gsap.set(containerRef.current.querySelectorAll('[data-hero-elem]'), {
      opacity: 1,
      y: 0,
      clearProps: 'all',
    })
    return
  }

  const elements = containerRef.current.querySelectorAll('[data-hero-elem]')
  if (!elements.length) return

  const mobile = isMobile()
  const yOffset = mobile ? 12 : 18
  const duration = mobile ? 0.4 : 0.55

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: yOffset,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: mobile ? 0.05 : 0.08,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
    }
  )
}

/**
 * Reusable React Hook for a one-time subtle scroll reveal.
 */
export function useScrollReveal(ref, options = {}) {
  useEffect(() => {
    const el = ref?.current
    if (!el) return

    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' })
      return
    }

    const mobile = isMobile()
    const yOffset = options.y ?? (mobile ? 12 : 18)
    const duration = options.duration ?? (mobile ? 0.38 : 0.48)
    const start = options.start ?? 'top 88%'

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
          clearProps: 'transform,opacity',
        }
      )
    }, el)

    return () => ctx.revert()
  }, [ref, options.y, options.duration, options.start])
}

/**
 * Reusable React Hook for staggered cards on scroll.
 */
export function useStaggerCards(containerRef, selector = '.stagger-item', options = {}, deps = []) {
  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const items = container.querySelectorAll(selector)
    if (!items.length) return

    if (isReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0, clearProps: 'all' })
      return
    }

    const mobile = isMobile()
    const yOffset = options.y ?? (mobile ? 12 : 16)
    const duration = options.duration ?? (mobile ? 0.35 : 0.45)
    const stagger = options.stagger ?? (mobile ? 0.04 : 0.06)
    const start = options.start ?? 'top 88%'

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
          clearProps: 'transform,opacity',
        }
      )
    }, container)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, selector, options.y, options.duration, options.stagger, options.start, ...deps])
}
