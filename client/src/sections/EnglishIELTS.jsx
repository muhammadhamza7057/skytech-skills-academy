import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { englishFeatures } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal, useStaggerCards } from '../utils/motion'

export default function EnglishIELTS() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useScrollReveal(sectionRef)
  useStaggerCards(cardsRef, '.stagger-item')

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-sky">
        <SectionHeading
          eyebrow="English & IELTS"
          title="Communicate clearly. Prepare with purpose."
          description="Strengthen spoken English for everyday and professional use, and prepare for IELTS with structured practice across all four modules."
          align="center"
          className="mx-auto"
        />
        <div ref={cardsRef} className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Conversational English Card */}
          <div className="stagger-item card-surface p-6 sm:p-8 transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-md">
            <h3 className="font-display text-2xl font-semibold text-navy sm:text-[1.75rem]">
              English
            </h3>
            <p className="mt-2 text-[15px] text-muted sm:text-base">
              Build fluency and confidence for conversation, study, and workplace communication.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {englishFeatures.english.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-surface px-4 py-3.5 text-sm font-semibold text-navy sm:text-[15px] transition-transform duration-200 hover:-translate-y-0.5 hover:border-blue/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic IELTS Card */}
          <div className="stagger-item rounded-xl border border-navy/20 bg-navy p-6 text-white sm:p-8 shadow-md transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-deep/25 ring-1 ring-white/10">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-[1.75rem]">
              IELTS
            </h3>
            <p className="mt-2 text-[15px] text-white/75 sm:text-base">
              Practice Reading, Writing, Listening, and Speaking with strategy-focused guidance.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {englishFeatures.ielts.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-white/10 px-4 py-3.5 text-sm font-semibold text-white sm:text-[15px] transition-colors duration-200 hover:bg-white/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-9 text-center">
          <Link to="/courses?category=English%20%26%20IELTS" className="btn-outline transition-transform duration-200 active:scale-[0.98]">
            Explore English & IELTS courses
          </Link>
        </div>
      </div>
    </section>
  )
}
