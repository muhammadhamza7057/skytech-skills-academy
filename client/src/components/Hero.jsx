import { ArrowRight, Briefcase, Clock3, GraduationCap, Users } from 'lucide-react'
import { trustIndicators } from '../data/content'
import Button from './Button'

const iconMap = {
  'Practical Learning': GraduationCap,
  'Professional Instructors': Users,
  'Career-Focused Training': Briefcase,
  '4+ Years of Experience': Clock3,
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80"
          alt="Modern architectural structure representing technical and professional education"
          className="h-full w-full object-cover object-[72%_center] sm:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/45 sm:via-navy/88 sm:to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/25 lg:hidden" />
      </div>

      <div className="container-sky relative flex min-h-[68vh] items-center py-16 sm:min-h-[74vh] sm:py-20 lg:min-h-[78vh] lg:py-24">
        <div className="max-w-xl fade-up lg:max-w-2xl">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-white/75 uppercase sm:text-[13px] lg:text-sm">
            SKYTECH SKILLS ACADEMY
          </p>
          <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] text-white sm:text-[2.75rem] lg:text-[3.75rem] lg:leading-[1.08]">
            Learn Practical Skills.
            <span className="mt-1.5 block">Build Your Career.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/85 sm:text-base lg:text-[18px] lg:leading-[1.6]">
            Professional short courses in technology, engineering, architecture,
            design, digital skills, and English.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button to="/courses" variant="blue" className="w-full sm:w-auto">
              Explore Courses
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button to="/enroll" variant="ghostLight" className="w-full sm:w-auto">
              Enroll Now
            </Button>
          </div>

          <ul className="mt-11 grid gap-3.5 sm:grid-cols-2">
            {trustIndicators.map((item) => {
              const Icon = iconMap[item]
              return (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] font-medium text-white/90 sm:text-[15px]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    {Icon ? <Icon size={17} aria-hidden="true" /> : null}
                  </span>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
