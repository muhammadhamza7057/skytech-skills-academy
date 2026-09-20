import Breadcrumb from '../components/Breadcrumb'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { aboutSections } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'

export default function About() {
  usePageSEO({
    title: 'About',
    description:
      'Learn about Skytech Skills Academy — a professional center for practical courses in technology, engineering, design, and English.',
    path: '/about',
  })

  return (
    <>
      <div className="bg-surface">
        <div className="container-sky section-pad">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <SectionHeading
            eyebrow="About"
            title="A professional academy for practical skills"
            description="Skytech Skills Academy focuses on clear, career-oriented short courses that help learners build usable capabilities in technology, engineering, design, and English communication."
          />
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-sky grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutSections.map((section) => (
            <article key={section.title} className="border-t-2 border-blue/40 pt-5">
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Start with a course that fits your goals"
        description="Browse our programs or begin enrollment when you are ready."
        primaryLabel="View Courses"
        primaryTo="/courses"
        secondaryLabel="Enroll Now"
        secondaryTo="/enroll"
      />
    </>
  )
}
