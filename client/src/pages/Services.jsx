import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  architectureServices,
  architectureProcess,
  whyWorkWithUs,
} from '../data/services'
import SectionHeading from '../components/SectionHeading'
import ProjectGallery from '../components/ProjectGallery'
import CampusesSection from '../components/CampusesSection'
import { usePageSEO } from '../hooks/usePageSEO'
import { useStaggerCards, useScrollReveal } from '../utils/motion'
import residentialHero from '../assets/residential_project_hero.webp'
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Maximize2,
} from 'lucide-react'

export default function Services() {
  usePageSEO({
    title: 'Architecture & Design Services | Skytech Skills Academy',
    description:
      'Professional architectural planning, 2D drafting, 3D visualization, exterior & interior design services by Skytech. 7+ years of experience across 3 campus branches.',
  })

  const servicesGridRef = useRef(null)
  const processGridRef = useRef(null)
  const whyGridRef = useRef(null)
  const ctaBoxRef = useRef(null)

  useStaggerCards(servicesGridRef, '.service-detail-card')
  useStaggerCards(processGridRef, '.process-step-card')
  useStaggerCards(whyGridRef, '.why-card')
  useScrollReveal(ctaBoxRef)

  return (
    <main className="min-h-screen bg-white">
      {/* Services Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep py-16 sm:py-24 text-white">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-sky relative z-10">
          <div className="max-w-3xl">
            

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Architectural Design, 2D Drafting & 3D Visualization Services
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              Skytech pairs over 7 years of hands-on technical expertise with modern design software to deliver precision floor plans, complete working drawings, and photorealistic 3D renders for residential and commercial projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20inquire%20about%20architectural%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                Discuss Your Project on WhatsApp
              </a>
              <Link to="/projects" className="btn-ghost-light">
                <span>Explore Project Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-blue-light">
                  7+ Years
                </span>
                <span className="text-xs text-white/70">
                  Practical Architectural Practice
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-blue-light">
                  3 Branches
                </span>
                <span className="text-xs text-white/70">
                  Dargai, Lower Dir, Skhakot
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-blue-light">
                  Full Pipeline
                </span>
                <span className="text-xs text-white/70">
                  AutoCAD, Revit, Lumion, 3Ds Max
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Architectural Project Case Study Spotlight Banner */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container-sky">
          <div className="relative rounded-2xl bg-white border border-border hover:border-blue/40 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-xl bg-slate-900 aspect-[16/10]">
                <img
                  src={residentialHero}
                  alt="Featured Residential Architectural Project 3D Visualization"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-light" />
                  Featured Technical Case Study
                </div>
              </div>

              {/* Information & Links */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue font-semibold mb-2">
                    <span>35 Complete Sheets</span>
                    <span>•</span>
                    <span>3,750.50 Sq. Ft.</span>
                    <span>•</span>
                    <span>Residential Working Set</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3">
                    Featured Case Study: Residential Architectural & Working Drawing Set
                  </h2>

                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    A complete architectural design package created by Wajid Khan. Explore the full documentation including dimensional 2D floor plans, 4 exterior elevations, structural sections, complete electrical circuit layouts, and public health plumbing schemes.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      2D Architectural Plans
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Exterior Elevations
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Electrical Wiring Layouts
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Public Health Plumbing
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    to="/projects/residential-architectural-project"
                    className="btn-primary text-sm py-2.5"
                  >
                    <Maximize2 className="w-4 h-4" />
                    Open Case Study & Interactive Viewer
                  </Link>
                  <Link
                    to="/projects"
                    className="btn-secondary text-sm py-2.5"
                  >
                    <span>View All Portfolio Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Architecture Services Section */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Specialized Services"
            title="Comprehensive Architectural Solutions"
            description="From initial layout sketches to high-resolution exterior renders and construction-ready drafts, we provide end-to-end design services."
          />

          <div
            ref={servicesGridRef}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {architectureServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="service-detail-card group card-surface card-hover overflow-hidden flex flex-col justify-between"
                >
                  {/* Real Image Header */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-navy/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/20 flex items-center gap-1">
                      <Icon className="w-3 h-3 text-blue-light" />
                      <span>{service.badge || 'Professional'}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-blue transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-navy/70 mb-2.5">
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-1.5 pt-2 border-t border-border">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-ink/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5-Step Architectural Design Process */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Structured Process"
            title="Our 5-Step Architectural Workflow"
            description="We apply a disciplined, transparent approach to ensure your design is functional, aesthetically elevated, and delivered on schedule."
          />

          <div
            ref={processGridRef}
            className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {architectureProcess.map((step) => (
              <div
                key={step.step}
                className="process-step-card bg-white rounded-2xl p-6 border border-border shadow-xs hover:border-blue/40 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-bold text-blue">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted bg-surface px-2 py-0.5 rounded border border-border">
                    Phase {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase (9 Projects with Lightbox) */}
      <section id="portfolio" className="section-pad bg-white">
        <div className="container-sky">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-eyebrow">Design Portfolio</p>
              <h2 className="text-section-title mt-2 text-navy">
                Selected Architectural Works
              </h2>
              <p className="text-section-desc mt-2">
                Browse actual exterior renders, elevation studies, and spatial visualizations developed by the Skytech architectural team. Click any project to open full-resolution render details.
              </p>
            </div>
            <Link
              to="/projects"
              className="btn-primary shrink-0 text-xs sm:text-sm"
            >
              <span>View Dedicated Portfolio Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <ProjectGallery />
          </div>
        </div>
      </section>

      {/* Why Work With Skytech Architecture */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Work With Skytech Architecture"
            description="Clients trust us for grounded technical knowledge, photorealistic precision, and direct communication throughout every project stage."
          />

          <div
            ref={whyGridRef}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {whyWorkWithUs.map((reason, idx) => (
              <div
                key={idx}
                className="why-card card-surface p-6 sm:p-7 hover:border-blue/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses Section for in-person consultation */}
      <CampusesSection lightBackground={false} />

      {/* Project Consultation Box */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div
            ref={ctaBoxRef}
            className="relative rounded-3xl bg-gradient-to-r from-navy via-navy to-navy-deep p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                Ready to Start Your Project?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-4">
                Let's Discuss Your Architectural Plans & Visuals
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                Whether you need preliminary 2D drawings, full municipal drafting, or realistic 3D exterior renders, our design team is ready to assist you across our 3 regional campus branches.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageSquare className="w-4 h-4" />
                  Direct WhatsApp Discussion
                </a>
                <Link
                  to="/contact?purpose=architecture"
                  className="btn-ghost-light"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
