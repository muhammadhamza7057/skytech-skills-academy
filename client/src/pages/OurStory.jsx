import { useRef, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'
import SectionHeading from '../components/SectionHeading'
import { storyContent } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'
import { useScrollReveal, useStaggerCards } from '../utils/motion'

export default function OurStory() {
  const [lang, setLang] = useState('en')
  const content = storyContent[lang]

  usePageSEO({
    title: 'Our Story | Skytech Skills Academy',
    description:
      'Discover how Skytech Skills Academy bridges academic education and practical professional skills across technology, engineering, design, and English in Dargai.',
    path: '/our-story',
  })

  const heroRef = useRef(null)
  const articleRef = useRef(null)
  const disciplinesRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(articleRef)
  useStaggerCards(disciplinesRef, '.stagger-item')

  return (
    <div className="bg-white">
      <div className="border-b border-border bg-surface">
        <div ref={heroRef} className="container-sky section-pad pb-12">
          <Breadcrumb
            items={[{ label: 'Home', to: '/' }, { label: 'Our Story' }]}
          />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Story"
              title="From academic knowledge to practical capability"
              description="A realistic story about closing the gap between theory-heavy classrooms and the software tools used in offices and studios every day."
            />
            <div
              className="inline-flex rounded-lg border border-border bg-white p-1 shadow-xs"
              role="group"
              aria-label="Story language"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={cn(
                  'rounded-md px-4 py-2 text-sm font-bold transition-colors',
                  lang === 'en' ? 'bg-navy text-white' : 'text-navy hover:bg-surface'
                )}
                aria-pressed={lang === 'en'}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('ur')}
                className={cn(
                  'rounded-md px-4 py-2 text-sm font-bold transition-colors',
                  lang === 'ur' ? 'bg-navy text-white' : 'text-navy hover:bg-surface'
                )}
                aria-pressed={lang === 'ur'}
              >
                اردو میں پڑھیں (Urdu)
              </button>
            </div>
          </div>
        </div>
      </div>

      <article ref={articleRef} className="container-sky section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-border shadow-sm sm:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Professional learning environment with modern workspace at Skytech"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          </div>
          <div
            lang={lang === 'ur' ? 'ur' : 'en'}
            dir={lang === 'ur' ? 'rtl' : 'ltr'}
            className="max-w-2xl"
          >
            <h1 className={cn(
              "font-display font-bold text-navy",
              lang === 'ur' ? "text-3xl sm:text-4xl leading-relaxed" : "text-3xl sm:text-4xl tracking-tight"
            )}>
              {content.title}
            </h1>
            <div className="mt-6 space-y-5">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={cn(
                    "text-muted",
                    lang === 'ur'
                      ? "text-lg sm:text-xl leading-[2] font-normal"
                      : "text-base sm:text-[17px] leading-relaxed"
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <p className="text-center text-xs font-bold tracking-[0.16em] uppercase text-blue">
            Core Disciplines of Skytech
          </p>
          <div ref={disciplinesRef} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Engineering Drafting & CAD',
              'Architectural BIM & Modeling',
              '3D Visualization & Rendering',
              'Modern Web Development',
              'Graphic Design & Branding',
              'English & IELTS Communication',
            ].map((item) => (
              <div
                key={item}
                className="stagger-item card-surface px-5 py-4 text-center text-sm font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </article>

      <CTASection
        title="Ready to build your practical skills?"
        description="Join learners in Dargai mastering technical software, modern development, design, and English."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Enroll Now"
        secondaryTo="/enroll"
      />
    </div>
  )
}
