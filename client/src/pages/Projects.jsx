import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProjectGallery from '../components/ProjectGallery'
import CampusesSection from '../components/CampusesSection'
import { usePageSEO } from '../hooks/usePageSEO'
import { useScrollReveal } from '../utils/motion'
import residentialHero from '../assets/residential_project_hero.webp'
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Maximize2,
  FileCheck2,
} from 'lucide-react'

export default function Projects() {
  usePageSEO({
    title: 'Architecture & Design Project Portfolio | Skytech Skills Academy',
    description:
      'Explore Skytech architectural works: residential villas, exterior 3D visualizations, interior suites, Islamic community architecture, and complete 35-sheet working drawing packages.',
  })

  const ctaBoxRef = useRef(null)
  useScrollReveal(ctaBoxRef)

  return (
    <main className="min-h-screen bg-white">
      {/* Projects Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep py-16 sm:py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-sky relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/25 border border-blue/40 text-xs font-semibold text-blue-light mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Design Studio & Technical Portfolio
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
              Architectural Works & Project Showcase
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              Explore realized 3D visualizations, residential villas, neoclassical facades, master interior suites, and comprehensive working drawing sets produced by Skytech's architectural design team.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="btn-primary"
              >
                Browse All Projects
              </a>
              <Link
                to="/projects/residential-architectural-project"
                className="btn-ghost-light"
              >
                <span>Featured 35-Sheet Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Featured 35-Sheet Architectural Case Study */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="container-sky">
          <div className="relative rounded-2xl bg-white border border-border hover:border-blue/40 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Image */}
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

              {/* Right Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue font-semibold mb-2">
                    <span>35 Technical Sheets</span>
                    <span>•</span>
                    <span>3,750.50 Sq. Ft.</span>
                    <span>•</span>
                    <span>G + 1 + Mumty</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3">
                    Residential Architectural Design & Working Drawing Set
                  </h2>

                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    A comprehensive double-story residential design designed by Wajid Khan. Explore the full documentation including 2D floor plans, 4 exterior elevations, structural sections, complete electrical circuit layouts, and public health plumbing schemes.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Architectural Plans
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      2D Elevations & Sections
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Electrical Wiring Schemes
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      Public Health Plumbing
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                      3D Visualization
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    to="/projects/residential-architectural-project"
                    className="btn-primary text-sm py-2.5"
                  >
                    <Maximize2 className="w-4 h-4" />
                    Open Case Study & Drawing Viewer
                  </Link>
                  <a
                    href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20discuss%20an%20architectural%20project%20similar%20to%20your%20featured%20case%20study."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-pad bg-white">
        <div className="container-sky">
          <SectionHeading
            eyebrow="Architectural Gallery"
            title="Selected Architectural & Interior Projects"
            description="Filter through our portfolio of exterior residential facades, luxury classical villas, master suite interior architecture, and Islamic community complexes."
          />

          <div className="mt-10">
            <ProjectGallery initialFilter="all" />
          </div>
        </div>
      </section>

      {/* Campuses Consultation Section */}
      <CampusesSection lightBackground={false} />

      {/* Project Inquiry CTA */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div
            ref={ctaBoxRef}
            className="rounded-3xl bg-gradient-to-r from-navy via-navy to-navy-deep p-8 sm:p-12 text-white shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                Commission Design & Drafting
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2 mb-3">
                Have an Architectural Project in Mind?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Whether you need preliminary spatial floor plans, municipal working drawings, or photorealistic 3D visualization, our architecture team is available for in-person consultation at our 3 campus branches and online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Consultation
              </a>
              <Link
                to="/services"
                className="btn-ghost-light w-full sm:w-auto text-center justify-center"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
