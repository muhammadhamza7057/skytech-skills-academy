import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  residentialProjectOverview,
  projectWorkflowJourney,
  allProjectSheets,
} from '../data/residentialProject'
import CustomProjectViewer from '../components/CustomProjectViewer'
import { usePageSEO } from '../hooks/usePageSEO'
import { useStaggerCards, useScrollReveal } from '../utils/motion'
import {
  Building2,
  Compass,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
  Droplets,
  Sparkles,
} from 'lucide-react'

const sheetFilterCategories = [
  { label: 'All Sheets (35)', value: 'all' },
  { label: 'Architectural Plans', value: 'Architectural Plans' },
  { label: 'Elevations & Sections', value: 'Elevations & Sections' },
  { label: 'Electrical & Power', value: 'Electrical & Power' },
  { label: 'Public Health & Plumbing', value: 'Public Health & Plumbing' },
  { label: 'Structural Schedules', value: 'Structural Schedules' },
]

export default function ResidentialCaseStudy() {
  usePageSEO({
    title: 'Residential Architectural Project Case Study | Skytech Skills Academy',
    description:
      'Complete 35-sheet residential architectural design & working drawing set. 3,750.50 sq. ft. double-story residence designed by Wajid Khan with 3D visualization, CAD drafting, electrical and plumbing plans.',
  })

  const [activeCategory, setActiveCategory] = useState('all')
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerIndex, setViewerIndex] = useState(0)

  const overviewGridRef = useRef(null)
  const workflowGridRef = useRef(null)
  const sheetsGridRef = useRef(null)
  const ctaBoxRef = useRef(null)

  useStaggerCards(overviewGridRef, '.overview-card')
  useStaggerCards(workflowGridRef, '.workflow-step-card')
  useStaggerCards(sheetsGridRef, '.sheet-card', {}, [activeCategory])
  useScrollReveal(ctaBoxRef)

  const filteredSheets = allProjectSheets.filter((sheet) => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'Architectural Plans') {
      return (
        sheet.discipline === 'Architectural Plans' ||
        sheet.discipline === 'Working Drawings' ||
        sheet.discipline === 'Presentation'
      )
    }
    if (activeCategory === 'Elevations & Sections') {
      return (
        sheet.discipline === 'Architectural Elevations' ||
        sheet.discipline === 'Building Sections'
      )
    }
    if (activeCategory === 'Electrical & Power') {
      return sheet.discipline === 'Electrical & Power'
    }
    if (activeCategory === 'Public Health & Plumbing') {
      return sheet.discipline === 'Public Health & Plumbing'
    }
    if (activeCategory === 'Structural Schedules') {
      return sheet.discipline === 'Structural Schedules'
    }
    return true
  })

  const openViewerAt = (sheetId) => {
    const idx = allProjectSheets.findIndex((s) => s.id === sheetId)
    if (idx !== -1) {
      setViewerIndex(idx)
      setViewerOpen(true)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep py-14 sm:py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-sky relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/25 border border-blue/40 text-xs font-semibold text-blue-light mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Architectural Project Case Study
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                {residentialProjectOverview.title}
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                {residentialProjectOverview?.summary || residentialProjectOverview?.description}
              </p>

              {/* Architectural Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    Total Covered Area
                  </span>
                  <span className="text-base sm:text-lg font-bold text-blue-light font-display">
                    {residentialProjectOverview?.specifications?.totalCoveredArea || '3,750.50 sq. ft.'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    Floors & Zoning
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    G + 1 + Mumty
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    Drawing Package
                  </span>
                  <span className="text-base sm:text-lg font-bold text-blue-light font-display">
                    35 Coordinated Sheets
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    Ground Floor
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {residentialProjectOverview?.specifications?.groundFloorArea || '1,697.75 sq. ft.'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    First Floor
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {residentialProjectOverview?.specifications?.firstFloorArea || '1,697.75 sq. ft.'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider block">
                    Architectural Designer
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-blue-300">
                    {residentialProjectOverview?.designer || 'Wajid Khan'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setViewerIndex(0)
                    setViewerOpen(true)
                  }}
                  className="btn-primary"
                >
                  <Maximize2 className="w-4 h-4" />
                  Launch Interactive Sheet Viewer (35 Sheets)
                </button>
                <a
                  href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20reviewed%20your%20Residential%20Architectural%20Project%20Case%20Study%20and%20would%20like%20to%20discuss%20a%20similar%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discuss Similar Project
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div
                onClick={() => {
                  setViewerIndex(0)
                  setViewerOpen(true)
                }}
                className="group relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black cursor-pointer"
              >
                <img
                  src={residentialProjectOverview.heroImage}
                  alt="Residential Architectural 3D Visualization Render"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-medium flex items-center gap-1.5 text-blue-light">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Click to explore full drawing set
                    </span>
                    <span className="text-xs font-mono bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                      3D Perspective
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Scope & Disciplines Breakdown */}
      <section className="section-pad bg-surface border-b border-border">
        <div className="container-sky">
          <div className="max-w-3xl mb-12">
            <p className="text-eyebrow">Technical Scope & Organization</p>
            <h2 className="text-section-title mt-2 text-navy">
              Comprehensive Architectural & Engineering Package
            </h2>
            <p className="text-section-desc mt-3">
              This complete project package was developed from initial spatial zoning through to multi-discipline municipal working drawings. Every sheet was coordinated for on-site construction feasibility.
            </p>
          </div>

          <div
            ref={overviewGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="overview-card card-surface p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Architectural Working Drawings
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Full dimensional ground and first floor layouts, mumty plan, door/window schedules, furniture spatial schemes, and roof drain slopes.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue font-semibold">
                Sheets 01 – 13
              </span>
            </div>

            <div className="overview-card card-surface p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Elevations & Cross Sections
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Front, Right, Left, and Rear 2D elevations accompanied by Section AA and Section BB articulating lintel levels, parapets, and floor heights.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue font-semibold">
                Sheets 14 – 22
              </span>
            </div>

            <div className="overview-card card-surface p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Electrical & Power Plans
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Dedicated lighting circuit layouts, ceiling fan drops, switchboard distributions, power socket matrices, and main DB schedules.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue font-semibold">
                Sheets 23 – 31
              </span>
            </div>

            <div className="overview-card card-surface p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Public Health & Plumbing
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Complete domestic cold/hot water piping schemes, gully traps, soil waste stacks, floor drains, and overhead water tank feed conduits.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue font-semibold">
                Sheets 32 – 35
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Architectural Workflow Journey */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div className="max-w-3xl mb-12">
            <p className="text-eyebrow">Project Lifecycle</p>
            <h2 className="text-section-title mt-2 text-navy">
              The 8-Phase Architectural Workflow
            </h2>
            <p className="text-section-desc mt-3">
              How Skytech took this residential project from client requirements to fully coordinated, site-executable architectural and engineering drawings.
            </p>
          </div>

          <div
            ref={workflowGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projectWorkflowJourney.map((phase) => (
              <div
                key={phase.step}
                className="workflow-step-card card-surface p-6 flex flex-col justify-between hover:border-blue/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-bold text-blue">
                      {phase.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-blue/10 text-blue px-2 py-0.5 rounded">
                      {phase.sheets}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border flex items-center gap-1.5 text-xs font-semibold text-navy/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue" />
                  <span>Phase deliverable completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sheet Gallery Section */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-sky">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-eyebrow">Document Index</p>
              <h2 className="text-section-title mt-2 text-navy">
                Complete 35 Architectural Sheets
              </h2>
              <p className="text-section-desc mt-2">
                Filter by architectural discipline and click any sheet to inspect it in high resolution using our interactive drawing viewer.
              </p>
            </div>

            <button
              onClick={() => {
                setViewerIndex(0)
                setViewerOpen(true)
              }}
              className="btn-primary shrink-0 text-xs sm:text-sm"
            >
              <Maximize2 className="w-4 h-4" />
              Open Drawing Viewer
            </button>
          </div>

          {/* Discipline Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {sheetFilterCategories.map((cat) => {
              const isSelected = activeCategory === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all border ${
                    isSelected
                      ? 'bg-navy text-white border-navy shadow-xs'
                      : 'bg-white text-muted border-border hover:bg-slate-50 hover:text-navy'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Sheets Grid */}
          <div
            ref={sheetsGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSheets.map((sheet) => (
              <div
                key={sheet.id}
                onClick={() => openViewerAt(sheet.id)}
                className="sheet-card group bg-white rounded-xl overflow-hidden border border-border hover:border-blue/40 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={sheet.image}
                    alt={sheet.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 bg-white"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-navy/90 text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                    {sheet.sheetNo || `Sheet ${sheet.id}`}
                  </div>
                  <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-navy/80 px-3 py-1 rounded-full">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-light" />
                      View Sheet
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue block mb-1">
                      {sheet.discipline}
                    </span>
                    <h3 className="text-sm font-bold text-navy group-hover:text-blue transition-colors line-clamp-1">
                      {sheet.title}
                    </h3>
                    <p className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed">
                      {sheet.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-muted">
                    <span>Drawing ID: {sheet.id}</span>
                    <span className="text-blue font-semibold group-hover:translate-x-0.5 transition-transform">
                      Inspect →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation / Call to Action */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div
            ref={ctaBoxRef}
            className="rounded-3xl bg-gradient-to-r from-navy via-navy to-navy-deep p-8 sm:p-12 text-white shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                Commission an Architectural Set
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2 mb-3">
                Need a Complete Architectural & Engineering Drawing Set?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                From initial 2D conceptual layouts to working drawings, structural cross sections, electrical layouts, and 3D visualization, Skytech delivers full packages ready for site execution across our 3 regional branches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20inquire%20about%20commissioning%20a%20complete%20architectural%20drawing%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
              <Link
                to="/services"
                className="btn-ghost-light w-full sm:w-auto text-center justify-center"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sheet Viewer Modal */}
      <CustomProjectViewer
        sheets={allProjectSheets}
        initialIndex={viewerIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </main>
  )
}
