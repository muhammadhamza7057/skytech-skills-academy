import { Link } from 'react-router-dom'
import { englishFeatures } from '../data/content'
import SectionHeading from '../components/SectionHeading'

export default function EnglishIELTS() {
  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <SectionHeading
          eyebrow="English & IELTS"
          title="Communicate clearly. Prepare with purpose."
          description="Strengthen spoken English for everyday and professional use, and prepare for IELTS with structured practice across all four modules."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-navy">English</h3>
            <p className="mt-2 text-sm text-muted">
              Build fluency and confidence for conversation, study, and workplace communication.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {englishFeatures.english.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm shadow-navy/5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-navy p-6 text-white sm:p-8">
            <h3 className="font-display text-2xl font-semibold">IELTS</h3>
            <p className="mt-2 text-sm text-white/70">
              Practice Reading, Writing, Listening, and Speaking with strategy-focused guidance.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {englishFeatures.ielts.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/courses?category=English%20%26%20IELTS"
            className="inline-flex rounded-md border border-border px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-surface"
          >
            Explore English & IELTS courses
          </Link>
        </div>
      </div>
    </section>
  )
}
