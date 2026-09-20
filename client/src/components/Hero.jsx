import { Link } from 'react-router-dom'
import { ArrowRight, Award, Briefcase, GraduationCap, Users } from 'lucide-react'
import { trustIndicators } from '../data/content'

const iconMap = {
  'Practical Learning': GraduationCap,
  'Professional Instructors': Users,
  'Career-Focused Training': Briefcase,
  'Certificate of Completion': Award,
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80"
          alt="Modern architectural structure representing engineering and design education"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/45 sm:to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40 lg:hidden" />
      </div>

      <div className="container-sky relative grid min-h-[78vh] items-center py-16 sm:min-h-[82vh] sm:py-20 lg:min-h-[88vh] lg:py-24">
        <div className="max-w-2xl animate-[fadeUp_0.7s_ease-out]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70 sm:text-sm">
            SKYTECH SKILLS ACADEMY
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Learn Practical Skills.
            <span className="mt-2 block text-white">Build Your Career.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Professional short courses designed to help learners develop practical
            skills in technology, engineering, design and English.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-light"
            >
              Explore Courses
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/enroll"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Enroll Now
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustIndicators.map((item) => {
              const Icon = iconMap[item]
              return (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/90"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
