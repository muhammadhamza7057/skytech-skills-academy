import { Mail, MapPin, Phone } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import LocationMap from '../components/LocationMapLazy'
import SectionHeading from '../components/SectionHeading'
import { aboutSections, academyInfo } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'

export default function About() {
  usePageSEO({
    title: 'About',
    description:
      'Learn about Skytech Skills Academy in Dargai, Malakand — practical courses with 4+ years of experience in technology, engineering, design, and English.',
    path: '/about',
  })

  return (
    <>
      <div className="bg-surface">
        <div className="container-sky section-pad pb-12">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <SectionHeading
            eyebrow="About"
            title="A professional academy for practical skills"
            description="Skytech Skills Academy focuses on clear, career-oriented short courses that help learners build usable capabilities in technology, engineering, design, and English communication."
          />
          <div className="mt-8 inline-flex items-center rounded-md border border-border bg-white px-4 py-3">
            <p className="text-sm font-semibold text-navy">{academyInfo.experience}</p>
          </div>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-sky grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutSections.map((section) => (
            <article key={section.title} className="border-t-2 border-blue/35 pt-5">
              <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="location" className="section-pad scroll-mt-24 bg-surface">
        <div className="container-sky grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Our Location"
              title="Visit us in Dargai, Malakand"
              description="We welcome learners to our academy for course guidance, enrollment, and practical skills training."
            />
            <div className="mt-8 space-y-4">
              <div className="card-surface p-5">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Address
                    </p>
                    {academyInfo.addressLines.map((line) => (
                      <p key={line} className="mt-1 text-sm font-medium text-navy">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-surface p-5">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={academyInfo.phoneHref}
                      className="mt-1 block text-sm font-medium text-navy hover:text-blue"
                    >
                      {academyInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-surface p-5">
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Email
                    </p>
                    <a
                      href={academyInfo.emailHref}
                      className="mt-1 block text-sm font-medium break-all text-navy hover:text-blue"
                    >
                      {academyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`https://www.openstreetmap.org/directions?to=${academyInfo.location.lat}%2C${academyInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Get Directions
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <LocationMap />
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
