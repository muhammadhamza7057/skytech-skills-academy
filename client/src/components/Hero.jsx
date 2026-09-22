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
      {/* Background Image with optimized dark gradient overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60 sm:via-navy/90 sm:to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30 lg:hidden" />
      </div>

      <div
        ref={heroContainerRef}
        className="container-sky relative z-10 flex min-h-[72vh] items-center py-14 sm:py-20 lg:min-h-[82vh] lg:py-24"
      >
        <div className="w-full max-w-4xl">
          {/* Eyebrow */}
          <div>
            <p
              data-hero-eyebrow
              className="text-[12px] font-semibold tracking-[0.18em] text-blue-light uppercase sm:text-[13px] lg:text-sm"
            >
              SKYTECH SKILLS ACADEMY
            </p>

            {/* Headline */}
            <h1 className="mt-3.5 font-display text-[2.25rem] font-bold leading-[1.12] text-white sm:text-[3rem] sm:leading-[1.1] lg:text-[3.6rem] lg:leading-[1.08] xl:text-[4rem]">
              <span className="clip-text-container block">
                <span data-hero-line className="clip-text-line block">
                  Learn Practical Skills.
                </span>
              </span>
              <span className="clip-text-container block mt-1.5 sm:mt-2">
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
              className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-[17px] lg:text-[18px]"
            >
              Practical training and professional solutions in technology, architecture, and design.
            </p>
          </div>

          {/* TWO CLEAR PRIMARY PATHS: LEARNERS VS CLIENTS */}
          <div data-hero-cta className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {/* Path 1: For Learners */}
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:bg-white/15 hover:border-blue-light/50 group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-light">
                    <GraduationCap className="w-3.5 h-3.5" />
                    For Learners
                  </span>
                  <span className="text-[11px] text-white/60 font-medium">Classroom & Online</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Explore Courses
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                  Build practical skills through focused training in technology, design, architecture, and English.
                </p>
              </div>

              <Link
                to="/courses"
                className="btn-primary w-full text-center text-sm py-2.5"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Path 2: For Clients */}
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:bg-white/15 hover:border-blue-light/50 group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-light">
                    <Compass className="w-3.5 h-3.5" />
                    For Clients
                  </span>
                  <span className="text-[11px] text-white/60 font-medium">Design & Studio</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Explore Our Services
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                  Discuss architecture, design, visualization, and digital projects with our professional team.
                </p>
              </div>

              <Link
                to="/services"
                className="btn-ghost-light w-full text-center text-sm py-2.5"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Bottom Proof Strip */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white/80">
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-blue-light shrink-0" />
              7+ Years Experience
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-light shrink-0" />
              1000+ Students Trained
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span data-hero-trust className="inline-flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-light shrink-0" />
              3 Campus Branches
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
