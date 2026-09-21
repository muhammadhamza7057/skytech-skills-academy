import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { engineeringFeatures } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../utils/motion'

export default function EngineeringArchitecture() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-sky grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[460px]">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
            alt="Architectural blueprint and building design workspace"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={700}
            height={460}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/45 to-transparent" />
        </div>
        <div>
          <SectionHeading
            eyebrow="Engineering & Architecture"
            title="Technical tools for design and documentation"
            description="Build professional capability in drafting, BIM, modeling, and visualization used across architecture and engineering workflows."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {engineeringFeatures.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-surface px-4 py-3.5 text-sm font-semibold text-navy sm:text-[15px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/courses?category=Engineering%20%26%20Architecture"
            className="btn-secondary mt-8"
          >
            Explore engineering courses
          </Link>
        </div>
      </div>
    </section>
  )
}
