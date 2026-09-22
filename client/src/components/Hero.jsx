import { useEffect, useRef } from 'react'
import { ArrowRight, Compass, GraduationCap, Clock3, Users, Building2 } from 'lucide-react'
import { animateHeroSignature } from '../utils/motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const heroContainerRef = useRef(null)
  const bgImageRef = useRef(null)

  useEffect(() => {
    const cleanup = animateHeroSignature(heroContainerRef, bgImageRef)
    return () => cleanup && cleanup()
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Background Image with refined dark gradient overlay showcasing architecture */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80"
          alt="Modern architectural structure representing technical and professional education"
          className="h-full w-full object-cover object-[72%_center] sm:object-[78%_center] lg:object-right transition-opacity duration-700 ease-out will-change-transform"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1800}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55 sm:from-navy sm:via-navy/88 sm:via-48% sm:to-navy/25 lg:via-navy/85 lg:via-45% lg:to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/30 lg:hidden" />
      </div>

      <div
        ref={heroContainerRef}
        className="container-sky relative z-10 flex min-h-[calc(100vh-4.5rem)] lg:min-h-[78vh] xl:min-h-[82vh] items-center pt-20 pb-12 sm:py-14 lg:py-16 xl:py-20"
      >
        <div className="w-full max-w-2xl lg:max-w-[42rem] xl:max-w-[44rem]">
          {/* Eyebrow */}
          <div>
            <p
              data-hero-eyebrow
              className="text-[11px] font-bold tracking-[0.2em] text-blue-light uppercase sm:text-xs lg:text-[13px]"
            >
              SKYTECH SKILLS ACADEMY
            </p>

            {/* Headline */}
            <h1 className="mt-3 sm:mt-3.5 font-display text-[2.2rem] font-bold leading-[1.12] text-white sm:text-[2.75rem] sm:leading-[1.1] lg:text-[3.25rem] lg:leading-[1.08] xl:text-[3.5rem] tracking-tight">
              <span className="clip-text-container block">
                <span data-hero-line className="clip-text-line block">
                  Learn Practical Skills.
                </span>
              </span>
              <span className="clip-text-container block mt-1 sm:mt-1.5">
                <span data-hero-line className="clip-text-line block text-white/95">
                  Build Your Career.
                </span>
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <div>
            <p
              data-hero-desc
              className="mt-3.5 sm:mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base lg:text-[17px]"
            >
              Practical training and professional solutions in technology, architecture, and design.
            </p>
          </div>

          {/* TWO CLEAR PRIMARY PATHS: LEARNERS VS CLIENTS */}
          <div data-hero-cta className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5 w-full">
            {/* Path 1: For Learners */}
            <div className="rounded-xl lg:rounded-2xl border border-white/[0.14] bg-navy-deep/45 sm:bg-white/[0.06] backdrop-blur-md p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-200 hover:bg-white/[0.09] hover:border-white/[0.24] hover:-translate-y-0.5 shadow-lg shadow-navy-deep/20 group">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/[0.08]">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-light">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>For Learners</span>
                  </span>
                  <span className="text-[11px] text-white/60 font-medium tracking-wide">
                    Classroom & Online
                  </span>
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                  Explore Courses
                </h3>
                <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed mt-1.5 mb-5 flex-1">
                  Build practical skills through focused training in technology, design, architecture, and English.
                </p>
              </div>

              <Link
                to="/courses"
                className="btn-primary w-full text-center text-xs sm:text-sm py-2.5 px-4 group/btn justify-center"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Path 2: For Clients */}
            <div className="rounded-xl lg:rounded-2xl border border-white/[0.14] bg-navy-deep/45 sm:bg-white/[0.06] backdrop-blur-md p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-200 hover:bg-white/[0.09] hover:border-white/[0.24] hover:-translate-y-0.5 shadow-lg shadow-navy-deep/20 group">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/[0.08]">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-light">
                    <Compass className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>For Clients</span>
                  </span>
                  <span className="text-[11px] text-white/60 font-medium tracking-wide">
                    Design & Studio
                  </span>
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-tight">
                  Explore Our Services
                </h3>
                <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed mt-1.5 mb-5 flex-1">
                  Discuss architecture, design, visualization, and digital projects with our professional team.
                </p>
              </div>

              <Link
                to="/services"
                className="btn-ghost-light w-full text-center text-xs sm:text-sm py-2.5 px-4 group/btn justify-center"
              >
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Bottom Proof Strip */}
          <div className="mt-6 sm:mt-7 pt-5 border-t border-white/[0.12] flex flex-wrap items-center gap-y-2 gap-x-5 sm:gap-x-6 text-xs sm:text-[13px] text-white/80 font-medium">
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-blue-light shrink-0" aria-hidden="true" />
              <span>7+ Years Experience</span>
            </span>
            <span className="hidden sm:inline text-white/25 select-none" aria-hidden="true">•</span>
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-light shrink-0" aria-hidden="true" />
              <span>1000+ Students Trained</span>
            </span>
            <span className="hidden sm:inline text-white/25 select-none" aria-hidden="true">•</span>
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-light shrink-0" aria-hidden="true" />
              <span>3 Campus Branches</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
