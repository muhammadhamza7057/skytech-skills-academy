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
 * Check if the device is a mobile viewport (<768px).
 */
export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Signature Multi-Stage Hero Choreography:
 * Stage 1: Background atmospheric image subtle scale settle (1.05 -> 1.0)
 * Stage 2: Eyebrow horizontal clip wipe reveal
 * Stage 3: Heading lines masked reveal (translateY 110% -> 0% inside overflow-hidden)
 * Stage 4: Description smooth fade + vertical settle
 * Stage 5: CTA buttons staggered entrance with subtle scale (0.97 -> 1.0)
 * Stage 6: Trust indicators stagger
 * Stage 7: Desktop subtle depth parallax on background image
 */
export function animateHeroSignature(containerRef, bgImageRef) {
  const container = containerRef?.current
  if (!container) return

  if (isReducedMotion()) {
    const all = container.querySelectorAll(
      '[data-hero-eyebrow], [data-hero-line], [data-hero-desc], [data-hero-cta], [data-hero-trust]'
    )
    gsap.set(all, { opacity: 1, y: 0, scale: 1, clearProps: 'all' })
    return
  }

  const mobile = isMobile()
  const eyebrow = container.querySelector('[data-hero-eyebrow]')
  const lines = container.querySelectorAll('[data-hero-line]')
  const desc = container.querySelector('[data-hero-desc]')
  const ctas = container.querySelectorAll('[data-hero-cta]')
  const trustItems = container.querySelectorAll('[data-hero-trust]')

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Stage 1: Background image subtle scale settle
    if (bgImageRef?.current && !mobile) {
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.06, opacity: 0.65 },
        { scale: 1.0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        0
      )
    }

    // Stage 2: Eyebrow horizontal clip wipe
    if (eyebrow) {
      tl.fromTo(
        eyebrow,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          opacity: 0,
          x: -10,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          x: 0,
          duration: mobile ? 0.45 : 0.6,
          ease: 'power3.out',
          clearProps: 'clipPath,opacity,transform',
        },
        mobile ? 0.05 : 0.1
      )
    }

    // Stage 3: Heading lines masked reveal
    if (lines.length) {
      tl.fromTo(
        lines,
        {
          y: '115%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: mobile ? 0.55 : 0.7,
          stagger: mobile ? 0.08 : 0.14,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
        mobile ? 0.15 : 0.25
      )
    }

    // Stage 4: Description smooth fade + settle
    if (desc) {
      tl.fromTo(
        desc,
        {
          opacity: 0,
          y: mobile ? 10 : 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.4 : 0.55,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        },
        mobile ? 0.35 : 0.48
      )
    }

    // Stage 5: CTA buttons staggered entrance
    if (ctas.length) {
      tl.fromTo(
        ctas,
        {
          opacity: 0,
          y: mobile ? 8 : 14,
          scale: mobile ? 0.98 : 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: mobile ? 0.38 : 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform,opacity,scale',
        },
        mobile ? 0.48 : 0.62
      )
    }

    // Stage 6: Trust indicators stagger
    if (trustItems.length) {
      tl.fromTo(
        trustItems,
        {
          opacity: 0,
          y: mobile ? 8 : 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.35 : 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        },
        mobile ? 0.58 : 0.75
      )
    }

    // Stage 7: Desktop subtle depth / micro-parallax on scroll
    if (bgImageRef?.current && !mobile) {
      gsap.to(bgImageRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, container)

  return () => ctx.revert()
}

/**
 * High-End Image Reveal Hook:
 * Directional horizontal wipe using clip-path + subtle zoom settle.
 */
export function useImageReveal(containerRef, options = {}) {
  useEffect(() => {
    const el = containerRef?.current
    if (!el) return

    if (isReducedMotion()) {
      gsap.set(el, { clipPath: 'none', opacity: 1, clearProps: 'all' })
      return
    }

    const mobile = isMobile()
    const duration = options.duration ?? (mobile ? 0.55 : 0.75)
    const start = options.start ?? 'top 85%'
    const img = el.querySelector('img')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      })

      tl.fromTo(
        el,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          opacity: 0.4,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration,
          ease: 'power3.inOut',
          clearProps: 'clipPath,opacity',
        },
        0
      )

      if (img && !mobile) {
        tl.fromTo(
          img,
          { scale: 1.06 },
          { scale: 1.0, duration: duration * 1.15, ease: 'power2.out', clearProps: 'transform' },
          0
        )
      }
    }, el)

    return () => ctx.revert()
  }, [containerRef, options.duration, options.start])
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
 * Reusable React Hook for staggered cards on scroll with tactile scale + translateY.
 */
export function useStaggerCards(containerRef, selector = '.stagger-item', options = {}, deps = []) {
  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const items = container.querySelectorAll(selector)
    if (!items.length) return

    if (isReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0, scale: 1, clearProps: 'all' })
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
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
          clearProps: 'transform,opacity,scale',
        }
      )
    }, container)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, selector, options.y, options.duration, options.stagger, options.start, ...deps])
}

/**
 * Legacy animateHero for simple container targets.
 */
export function animateHero(containerRef) {
  return animateHeroSignature(containerRef)
}
