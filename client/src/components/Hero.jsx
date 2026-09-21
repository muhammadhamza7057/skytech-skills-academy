import { useEffect, useRef } from 'react'
import { ArrowRight, Briefcase, Building2, Clock3, GraduationCap, Users } from 'lucide-react'
import { trustIndicators } from '../data/content'
import Button from './Button'
import { animateHeroSignature } from '../utils/motion'

const iconMap = {
  'Practical Learning': GraduationCap,
  'Professional Instructors': Users,
  'Career-Focused Training': Briefcase,
  '7+ Years of Experience': Clock3,
  '3 Campus Branches': Building2,
}

export default function Hero() {
  const heroContainerRef = useRef(null)
  const bgImageRef = useRef(null)

  useEffect(() => {
    const cleanup = animateHeroSignature(heroContainerRef, bgImageRef)
    return () => cleanup && cleanup()
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80"
          alt="Modern architectural structure representing technical and professional education"
          className="h-full w-full object-cover object-[72%_center] sm:object-right transition-opacity duration-700 ease-out will-change-transform"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1800}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/45 sm:via-navy/88 sm:to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/25 lg:hidden" />
      </div>

      <div
        ref={heroContainerRef}
        className="container-sky relative flex min-h-[68vh] items-center py-16 sm:min-h-[74vh] sm:py-20 lg:min-h-[78vh] lg:py-24"
      >
        <div className="max-w-xl lg:max-w-2xl">
          <div>
            <p
              data-hero-eyebrow
              className="text-[12px] font-semibold tracking-[0.18em] text-white/75 uppercase sm:text-[13px] lg:text-sm"
            >
              SKYTECH SKILLS ACADEMY
            </p>

            <h1 className="mt-4 font-display text-[2.25rem] font-bold leading-[1.15] text-white sm:text-[3rem] sm:leading-[1.12] lg:text-[3.75rem] lg:leading-[1.08] xl:text-[4rem]">
              <span className="clip-text-container block">
                <span data-hero-line className="clip-text-line block">
                  Learn Practical Skills.
                </span>
              </span>
              <span className="clip-text-container block mt-2">
                <span data-hero-line className="clip-text-line block text-white/95">
                  Build Your Career.
                </span>
              </span>
            </h1>
          </div>

          <div>
            <p
              data-hero-desc
              className="mt-5 max-w-xl text-[16px] leading-[1.65] text-white/85 sm:text-[17px] lg:text-[18px] lg:leading-[1.6]"
            >
              Professional short courses in Technology, Engineering, Architecture,
              Design, Digital Skills, and English.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <div data-hero-cta className="w-full sm:w-auto">
              <Button to="/enroll" variant="primary" className="w-full sm:w-auto px-7 py-3.5 text-base">
                Enroll Now
              </Button>
            </div>
            <div data-hero-cta className="w-full sm:w-auto">
              <Button to="/courses" variant="ghostLight" className="w-full sm:w-auto px-7 py-3.5 text-base">
                Explore Courses
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div>
            <ul className="mt-11 grid gap-3.5 sm:grid-cols-2">
              {trustIndicators.map((item) => {
                const Icon = iconMap[item]
                return (
                  <li
                    key={item}
                    data-hero-trust
                    className="flex items-center gap-3 text-[14px] font-medium text-white/90 sm:text-[15px]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-transform duration-200 hover:scale-105">
                      {Icon ? <Icon size={17} aria-hidden="true" /> : null}
                    </span>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
