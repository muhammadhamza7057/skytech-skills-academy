import { useRef, useState } from 'react'
import CTASection from '../components/CTASection'
import SectionHeading from '../components/SectionHeading'
import DirectorSection from '../components/DirectorSection'
import CampusesSection from '../components/CampusesSection'
import mdImage from '../assets/MD.jpeg'
import { storyContent } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'
import { useImageReveal, useScrollReveal, useStaggerCards } from '../utils/motion'

export default function OurStory() {
  const [lang, setLang] = useState('en')
  const content = storyContent[lang]

  usePageSEO({
    title: 'Our Story & Leadership | Skytech Skills Academy',
    description:
      'The journey of Skytech Skills Academy & Architecture Services: 7+ years of hands-on training, 1000+ students trained, 3 regional campus branches, and architectural design practice led by Wajid Khan.',
    path: '/our-story',
  })

  const heroRef = useRef(null)
  const articleRef = useRef(null)
  const storyImgRef = useRef(null)
  const disciplinesRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(articleRef)
  useImageReveal(storyImgRef)
  useStaggerCards(disciplinesRef, '.stagger-item')

  return (
    <div className="bg-white">
      <div className="border-b border-border bg-surface">
        <div ref={heroRef} className="container-sky section-pad pb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Story & Origins"
              title="From practical classroom training to regional architectural practice"
              description="A grounded journey of closing the gap between academic theory, commercial design needs, and professional workplace standards across Khyber Pakhtunkhwa."
            />
            <div
              className="inline-flex rounded-lg border border-border bg-white p-1 shadow-xs self-start lg:self-auto"
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Director / Studio Actual Image */}
          <div
            ref={storyImgRef}
            className="relative min-h-[380px] overflow-hidden rounded-2xl border border-navy/20 shadow-xl sm:min-h-[480px] bg-navy"
          >
            <img
              src={mdImage}
              alt="Wajid Khan - Managing Director of Skytech"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-4 bg-navy-deep/90 backdrop-blur-md rounded-xl border border-white/10 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-light block mb-1">
                Founder & Director
              </span>
              <p className="text-base sm:text-lg font-bold text-white">Wajid Khan</p>
              <p className="text-xs text-white/75">
                Lead Architectural Designer • 7+ Years Experience • 1000+ Students Mentored
              </p>
            </div>
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

            {/* Quick Proof Pills */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-navy">7+ Years</span>
                <span className="text-xs text-muted">Technical Instruction</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-navy">1000+</span>
                <span className="text-xs text-muted">Students Trained</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-navy">3</span>
                <span className="text-xs text-muted">Campus Branches</span>
              </div>
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

      {/* Leadership Profile Section */}
      <DirectorSection />

      {/* Regional Campus Branches */}
      <CampusesSection lightBackground={true} />

      <CTASection
        title="Ready to build your practical skills?"
        description="Join learners across Dargai, Lower Dir, and Skhakot mastering technical software, architectural workflows, and English."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Enroll Now"
        secondaryTo="/enroll"
      />
    </div>
  )
}
