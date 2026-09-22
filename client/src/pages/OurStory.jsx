import { useRef, useState } from 'react'
import CTASection from '../components/CTASection'
import SectionHeading from '../components/SectionHeading'
import DirectorSection from '../components/DirectorSection'
import HamzaSection from '../components/HamzaSection'
import CampusesSection from '../components/CampusesSection'
import mdImage from '../assets/MD.jpeg'
import { storyContent, directorInfo } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'
import { useImageReveal, useScrollReveal, useStaggerCards } from '../utils/motion'
import {
  Compass,
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  RefreshCw,
  Target,
  Users,
} from 'lucide-react'

export default function OurStory() {
  const [lang, setLang] = useState('en')
  const content = storyContent[lang]

  usePageSEO({
    title: 'Our Story, Leadership & Mission | Skytech Skills Academy',
    description:
      'The journey of Skytech Skills Academy & Professional Services: practical technical education, architectural design leadership by Wajid Khan, and software engineering problem solving by Muhammad Hamza.',
    path: '/our-story',
  })

  const heroRef = useRef(null)
  const whoWeAreRef = useRef(null)
  const articleRef = useRef(null)
  const storyImgRef = useRef(null)
  const disciplinesRef = useRef(null)
  const peopleRef = useRef(null)
  const peopleCardsRef = useRef(null)
  const beliefsRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(whoWeAreRef)
  useScrollReveal(articleRef)
  useImageReveal(storyImgRef)
  useStaggerCards(disciplinesRef, '.stagger-item')
  useScrollReveal(peopleRef)
  useStaggerCards(peopleCardsRef, '.pillar-card')
  useStaggerCards(beliefsRef, '.belief-card')

  return (
    <div className="bg-white">
      {/* 1. Professional Hero: Our Story & Purpose */}
      <div className="border-b border-border bg-surface">
        <div ref={heroRef} className="container-sky section-pad pb-12 sm:pb-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Story & Origins"
              title="From practical classroom training to regional architectural practice & digital solutions"
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

      {/* 2. Who We Are Section */}
      <section ref={whoWeAreRef} className="border-b border-border bg-white py-12 sm:py-16">
        <div className="container-sky">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              A Practical Skills Academy & Professional Services Platform
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
              Skytech is built around a clear standard: closing the distance between theoretical education and real workplace capability. We operate across 3 regional campus branches in Malakand and Dir, providing both career-focused training and commercial professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface p-6 border-border hover:border-blue/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Practical Skills Training</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Hands-on training in AutoCAD, Revit, 3ds Max, Web Development, and English — preparing learners for studios, companies, and freelancing.
              </p>
            </div>

            <div className="card-surface p-6 border-border hover:border-blue/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Architectural Design Practice</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Full-cycle residential and commercial architectural planning, structural drafting, and photorealistic 3D rendering for regional clients.
              </p>
            </div>

            <div className="card-surface p-6 border-border hover:border-blue/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Digital Problem Solving</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Modern software engineering and full-stack development designed to convert real-world challenges into practical, efficient digital tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey: Bilingual Story & Disciplines */}
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
              <p className="text-base sm:text-lg font-bold text-white">{directorInfo.name}</p>
              <p className="text-xs text-white/75">
                Lead Architectural Designer • {directorInfo.experience} • 1000+ Students Mentored
              </p>
            </div>
          </div>

          <div
            lang={lang === 'ur' ? 'ur' : 'en'}
            dir={lang === 'ur' ? 'rtl' : 'ltr'}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Our Journey
            </span>
            <h2 className={cn(
              "font-display font-bold text-navy",
              lang === 'ur' ? "text-3xl sm:text-4xl leading-relaxed" : "text-3xl sm:text-4xl tracking-tight"
            )}>
              {content.title}
            </h2>
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

        {/* Core Disciplines of Skytech */}
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

      {/* 4. The People Behind Skytech: Two Complementary Worlds */}
      <section className="bg-surface border-y border-border section-pad">
        <div className="container-sky">
          <div ref={peopleRef} className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-semibold text-blue mb-3">
              <Users className="w-3.5 h-3.5" />
              The People Behind Skytech
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy">
              Two Complementary Areas of Expertise
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
              Skytech brings together two distinct yet complementary fields under one roof: architectural design and software engineering. This dual focus ensures that our students and clients benefit from real-world practical skills, modern technology, and concrete problem solving.
            </p>
          </div>

          {/* Dual Pillars Grid */}
          <div ref={peopleCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pillar 1: Wajid Khan - Architecture & Design */}
            <div className="pillar-card rounded-2xl bg-white border border-border p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-blue/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue bg-blue/10 px-2.5 py-1 rounded-md">
                    <Compass className="w-3.5 h-3.5" />
                    Architecture & Design
                  </span>
                  <span className="text-xs font-mono font-semibold text-muted">
                    7+ Years Exp.
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-1">
                  Wajid Khan
                </h3>
                <p className="text-sm font-semibold text-blue mb-4">
                  Architectural Designer
                </p>

                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-6">
                  Leads Skytech’s architectural practice, AutoCAD/BIM education, and 3D visualization studio with 7+ years of hands-on field experience.
                </p>

                {/* Focus List */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                    Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Architecture',
                      'Design',
                      'Drafting',
                      'Visualization',
                      'Practical Design Experience',
                    ].map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface text-navy font-medium border border-border"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#wajid-khan"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue hover:text-navy transition-colors pt-4 border-t border-border"
              >
                <span>View Architecture Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Pillar 2: Muhammad Hamza - Technology & Digital Solutions */}
            <div className="pillar-card rounded-2xl bg-white border border-border p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-blue/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue bg-blue/10 px-2.5 py-1 rounded-md">
                    <Code2 className="w-3.5 h-3.5" />
                    Technology & Digital Solutions
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy bg-navy/5 border border-navy/15 px-2 py-0.5 rounded">
                    Young Entrepreneur
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-1">
                  Muhammad Hamza
                </h3>
                <p className="text-sm font-semibold text-blue mb-4">
                  Full-Stack Developer | Software Engineer
                </p>

                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-6">
                  Focuses on turning real-world problems into practical digital solutions using modern full-stack web technologies and an entrepreneurial mindset.
                </p>

                {/* Focus List */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                    Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Software Engineering',
                      'Full-Stack Development',
                      'Digital Solutions',
                      'Problem Solving',
                    ].map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface text-navy font-medium border border-border"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#muhammad-hamza"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue hover:text-navy transition-colors pt-4 border-t border-border"
              >
                <span>View Technology & Problem-Solving Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wajid Khan — Architecture & Design Leadership */}
      <DirectorSection id="wajid-khan" />

      {/* 6 & 7. Muhammad Hamza — Technology & Digital Solutions & Problem Solver Flow */}
      <HamzaSection id="muhammad-hamza" />

      {/* 8. What We Believe */}
      <section className="section-pad bg-white border-t border-border">
        <div className="container-sky">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue mb-2 block">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              What We Believe
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
              Four core principles define how we teach our students, build software, and deliver architectural projects.
            </p>
          </div>

          <div ref={beliefsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="belief-card card-surface p-6 border-border hover:border-blue/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Practical Learning</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                True competence comes from doing. Every lesson connects directly to usable tools, live project standards, and realistic exercises.
              </p>
            </div>

            <div className="belief-card card-surface p-6 border-border hover:border-blue/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Continuous Improvement</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We believe in iterative refinement — whether revising a 3D architectural plan or refining full-stack software for performance and clarity.
              </p>
            </div>

            <div className="belief-card card-surface p-6 border-border hover:border-blue/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Useful Skills</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We prioritize practical skills that empower learners to find employment, succeed on freelancing platforms, and grow professionally.
              </p>
            </div>

            <div className="belief-card card-surface p-6 border-border hover:border-blue/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Real-World Application</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Every project and piece of code exists to solve a real problem for people, businesses, and communities in Khyber Pakhtunkhwa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Campus Branches */}
      <CampusesSection lightBackground={true} />

      {/* 9. Closing CTA: Explore Courses or Discuss a Project */}
      <CTASection
        title="Ready to build practical skills or discuss a professional project?"
        description="Whether you are preparing for a technical career or need architectural planning and digital solutions, Skytech is ready to collaborate."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Architecture & Design Services"
        secondaryTo="/services"
      />
    </div>
  )
}
