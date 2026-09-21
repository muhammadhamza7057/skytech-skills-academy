import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Button from './Button'
import { cn } from '../utils/cn'
import { isMobile, isReducedMotion } from '../utils/motion'

export default function CTASection({
  title,
  description,
  primaryLabel = 'Enroll Now',
  primaryTo = '/enroll',
  secondaryLabel,
  secondaryTo,
  className,
}) {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (isReducedMotion()) {
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 1 })
      return
    }

    const mobile = isMobile()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: mobile ? 12 : 20 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }
      )

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power3.out' },
          '-=0.3'
        )
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={cn('relative isolate overflow-hidden section-pad bg-navy text-white', className)}
    >
      {/* Subtle ambient gradient destination glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div ref={contentRef} className="container-sky relative z-10 max-w-3xl text-center">
        <h2 className="font-display text-[1.75rem] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          {title}
        </h2>

        {/* Dynamic expanding accent divider */}
        <div className="mx-auto mt-4 flex justify-center">
          <div
            ref={lineRef}
            className="h-[2px] w-20 rounded-full bg-gradient-to-r from-blue via-accent to-blue origin-center"
            aria-hidden="true"
          />
        </div>

        {description ? (
          <p className="mt-4 text-[15px] leading-relaxed text-white/80 sm:text-base lg:text-[17px]">
            {description}
          </p>
        ) : null}

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Button to={primaryTo} variant="primary" className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTo ? (
            <Button to={secondaryTo} variant="ghostLight" className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
