import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Laptop,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import LocationMap from '../components/LocationMapLazy'
import SectionHeading from '../components/SectionHeading'
import {
  aboutImpactMetrics,
  academyInfo,
  learningEnvironmentFeatures,
} from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'

const domainTracks = [
  {
    title: 'Engineering & Architecture',
    icon: Building2,
    description:
      'Precision drafting, BIM, and 3D architectural visualization using industry-standard tools.',
    courses: ['AutoCAD', 'Revit', '3Ds Max', 'SketchUp', 'Lumion'],
  },
  {
    title: 'Web & Digital Development',
    icon: Laptop,
    description:
      'Responsive web development and full-stack applications with modern JavaScript frameworks.',
    courses: ['HTML & CSS', 'JavaScript', 'React', 'MERN Stack', 'API Integration'],
  },
  {
    title: 'Design & Digital Media',
    icon: Layers,
    description:
      'Visual identities, marketing collateral, brand assets, and practical digital campaigns.',
    courses: ['Graphic Designing', 'Digital Marketing', 'Brand Identity', 'Social Media'],
  },
  {
    title: 'English & IELTS Preparation',
    icon: GraduationCap,
    description:
      'Spoken fluency, workplace communication, and strategic preparation for all four IELTS modules.',
    courses: ['Spoken English', 'Conversation', 'Grammar', 'IELTS Academic & General'],
  },
]

const learningPillars = [
  {
    title: 'Hands-On Tool Practice',
    description:
      'Students spend class hours directly working with software, creating technical drawings, building web components, or practicing spoken dialogue.',
  },
  {
    title: 'Milestone-Based Projects',
    description:
      'Rather than memorizing theory, learners complete real-world exercises and build portfolio assets that demonstrate their practical capability.',
  },
  {
    title: 'Accessible & Supportive Guidance',
    description:
      'Our instructors offer structured step-by-step guidance, helping beginners build confidence and experienced learners refine their technical workflows.',
  },
  {
    title: 'Career & Workplace Readiness',
    description:
      'Curricula are designed around the actual tools, standards, and communication expectations used in offices, design studios, and freelance platforms.',
  },
]

export default function About() {
  usePageSEO({
    title: 'About Skytech Skills Academy | Dargai, Malakand',
    description:
      'Learn about Skytech Skills Academy in Dargai, Malakand — 4+ years of practical experience, 100+ students trained in engineering, IT, design, and English.',
    path: '/about',
  })

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="border-b border-border bg-surface">
        <div className="container-sky section-pad pb-14">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="About Skytech Skills Academy"
              title="A professional academy for practical skills and career growth"
              description="Skytech Skills Academy is a focused technical learning center in Dargai, Malakand. We help students and professionals build usable, market-relevant capabilities in engineering software, web development, digital design, and English communication."
            />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy shadow-xs">
                <Clock3 size={16} className="text-blue" />
                {academyInfo.experience}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy shadow-xs">
                <Users size={16} className="text-blue" />
                {academyInfo.studentsTrained}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-navy shadow-xs">
                <MapPin size={16} className="text-blue" />
                Dargai, Malakand
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Impact Metrics Section */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutImpactMetrics.map((item, idx) => {
              const icons = [Clock3, Users, Laptop, Briefcase]
              const Icon = icons[idx] || CheckCircle2
              return (
                <div
                  key={item.label}
                  className="card-surface p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-blue mb-4">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <p className="font-display text-3xl font-bold text-navy sm:text-4xl">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-base font-semibold text-navy">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Are & Mission */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Bridging theory and practice for local learners"
              description="Many learners finish academic degrees with conceptual knowledge, yet find themselves unprepared for the actual software tools and communication standards required in professional offices and modern studios."
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
              <p>
                Skytech Skills Academy was founded in Dargai to solve this exact problem. Over the past four-plus years, we have provided structured, hands-on short courses that empower students to transition smoothly from learning to practical execution.
              </p>
              <p>
                Our training focuses directly on the tools professionals use every day: AutoCAD for technical drafting, Revit for BIM documentation, React and Node.js for modern web applications, design software for branding, and communicative English for interviews and international tests like IELTS.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/courses" variant="primary">
                Explore Programs
              </Button>
              <Button to="/our-story" variant="outline">
                Read Our Story
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-border shadow-md sm:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Practical training at Skytech Skills Academy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/80">
                Learning by Doing
              </p>
              <p className="mt-1 font-display text-lg font-semibold sm:text-xl">
                Practical, instructor-led training at Adnan Plaza, Dargai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <SectionHeading
            eyebrow="What We Teach"
            title="Comprehensive tracks for modern careers"
            description="Our curriculum spans engineering software, web development, creative design, and language skills — all structured for practical application."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domainTracks.map((track) => {
              const Icon = track.icon
              return (
                <div
                  key={track.title}
                  className="card-surface flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-blue">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy sm:text-xl">
                      {track.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {track.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold tracking-wider text-navy uppercase">
                      Featured Skills:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {track.courses.map((c) => (
                        <span
                          key={c}
                          className="rounded bg-surface px-2 py-1 text-xs font-medium text-navy"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Learning Approach & Why Practical Skills Matter */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Our Learning Approach"
            title="Why practical skills matter more than theory alone"
            description="In competitive job markets, employers and clients value verifiable tool proficiency and clear communication. Here is how our approach ensures readiness."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningPillars.map((pillar, idx) => (
              <div key={pillar.title} className="card-surface p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-white">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Impact Section */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-blue">
                  Student Impact & Outcomes
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                  Empowering 100+ learners to reach their goals
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy font-medium sm:text-lg">
                  {academyInfo.studentImpactStatement}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <span className="text-sm font-medium text-navy">
                      Software proficiency applied in offices and design studios
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <span className="text-sm font-medium text-navy">
                      Independent freelancing and digital client deliverables
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <span className="text-sm font-medium text-navy">
                      Academic advancement and engineering degree preparation
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <span className="text-sm font-medium text-navy">
                      Clear spoken communication and IELTS test readiness
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Academy Summary
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted">Established Experience</span>
                    <span className="text-sm font-bold text-navy">4+ Years</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted">Learners Trained</span>
                    <span className="text-sm font-bold text-navy">100+ Students</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted">Instruction Mode</span>
                    <span className="text-sm font-bold text-navy">On-Campus / Practical</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">Location</span>
                    <span className="text-sm font-bold text-navy">Dargai, Malakand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Learning Environment"
            title="A focused, supportive space to develop skills"
            description="Our training facility at Adnan Plaza is arranged to give each learner direct computer access and dedicated instructor feedback."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningEnvironmentFeatures.map((env) => (
              <div key={env.title} className="card-surface p-6">
                <h3 className="font-display text-lg font-bold text-navy">
                  {env.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {env.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Map */}
      <section id="location" className="section-pad scroll-mt-24 bg-white">
        <div className="container-sky grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Our Location"
              title="Visit Skytech Skills Academy in Dargai"
              description="Learners, parents, and professionals are welcome to visit our center for course counseling, admissions, or class schedules."
            />
            <div className="mt-8 space-y-4">
              <div className="card-surface p-5">
                <div className="flex gap-3.5">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Academy Address
                    </p>
                    {academyInfo.addressLines.map((line) => (
                      <p key={line} className="mt-1 text-sm font-semibold text-navy">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-surface p-5">
                <div className="flex gap-3.5">
                  <Phone size={20} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Phone & Call Inquiries
                    </p>
                    <a
                      href={academyInfo.phoneHref}
                      className="mt-1 block text-sm font-semibold text-navy hover:text-blue"
                    >
                      {academyInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-surface p-5">
                <div className="flex gap-3.5">
                  <MessageCircle size={20} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      WhatsApp Quick Guidance
                    </p>
                    <a
                      href={academyInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-navy hover:text-blue"
                    >
                      {academyInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-surface p-5">
                <div className="flex gap-3.5">
                  <Mail size={20} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      Email Address
                    </p>
                    <a
                      href={academyInfo.emailHref}
                      className="mt-1 block text-sm font-semibold break-all text-navy hover:text-blue"
                    >
                      {academyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
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
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <LocationMap heightClass="h-[360px] sm:h-[420px] lg:h-[480px]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start with a course that fits your career goals"
        description="Explore our complete catalog of practical short courses in Dargai or begin your enrollment today."
        primaryLabel="Browse Courses"
        primaryTo="/courses"
        secondaryLabel="Enroll Now"
        secondaryTo="/enroll"
      />
    </div>
  )
}
