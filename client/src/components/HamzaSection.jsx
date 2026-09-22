import { useRef } from 'react'
import hamzaImage from '../assets/Hamza.png'
import { hamzaInfo, academyInfo } from '../data/content'
import { useImageReveal, useScrollReveal, useStaggerCards } from '../utils/motion'
import {
  Code2,
  Lightbulb,
  Search,
  PenTool,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Sparkles,
} from 'lucide-react'

export default function HamzaSection({ className = '', id = 'muhammad-hamza' }) {
  const imageContainerRef = useRef(null)
  const contentRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const flowRef = useRef(null)

  useImageReveal(imageContainerRef)
  useScrollReveal(contentRef)
  useStaggerCards(capabilitiesRef, '.capability-card')
  useStaggerCards(flowRef, '.flow-node')

  const stepIcons = [
    Search,
    Lightbulb,
    PenTool,
    Code2,
    RefreshCw,
    CheckCircle2,
  ]

  return (
    <section id={id} className={`section-pad bg-surface border-t border-border overflow-hidden scroll-mt-20 ${className}`}>
      <div className="container-sky">
        {/* Top Editorial Grid: Portrait on Left, Bio & Mindset on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle tech ambient background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue/15 via-blue-light/10 to-transparent rounded-3xl blur-xl opacity-80" />

              {/* Architectural & tech corner marks */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-blue z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-blue z-20 pointer-events-none" />

              {/* Exact Hamza Image Frame (dimensions: 1086x1448 -> aspect 3:4) */}
              <div
                ref={imageContainerRef}
                className="relative rounded-2xl overflow-hidden border border-border bg-white shadow-xl aspect-[3/4] w-full"
              >
                <img
                  src={hamzaImage}
                  alt={`${hamzaInfo.name} - ${hamzaInfo.primaryRole}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-light">
                      <Code2 className="w-3.5 h-3.5" />
                      Digital Engineering
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/15">
                      {hamzaInfo.secondaryLabel}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg leading-tight">
                    {hamzaInfo.name}
                  </h4>
                  <p className="text-white/75 text-xs mt-1">
                    {hamzaInfo.primaryRole}
                  </p>
                </div>
              </div>

              {/* Image Footer Note */}
              <div className="mt-3 flex items-center justify-between text-xs text-muted px-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Practical Digital Solutions
                </span>
                <span className="font-mono text-[11px] text-muted/80">Skytech Technology</span>
              </div>
            </div>
          </div>

          {/* Bio & Mindset Column */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag & Young Entrepreneur Label */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-semibold text-blue">
                <Code2 className="w-3.5 h-3.5" />
                Technology & Digital Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 border border-navy/15 text-xs font-semibold text-navy">
                <Sparkles className="w-3.5 h-3.5 text-blue" />
                {hamzaInfo.secondaryLabel}
              </span>
            </div>

            {/* Name */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy mb-1.5">
              {hamzaInfo.name}
            </h2>

            {/* Primary Role */}
            <p className="text-blue text-base sm:text-lg font-semibold mb-4">
              {hamzaInfo.primaryRole}
            </p>

            {/* Complementary Focus Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted mr-1">
                Focus:
              </span>
              {hamzaInfo.focus.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-border text-navy shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Main Description */}
            <p className="text-ink text-sm sm:text-base leading-relaxed mb-4">
              {hamzaInfo.description}
            </p>

            {/* Supporting Statement */}
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 border-l-2 border-blue pl-4 italic">
              &ldquo;{hamzaInfo.supportingStatement}&rdquo;
            </p>

            {/* Entrepreneurial Mindset Card */}
            <div className="rounded-xl border border-blue/20 bg-blue/5 p-4 sm:p-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                  Entrepreneurial Mindset
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                {hamzaInfo.entrepreneurialMindset}
              </p>
            </div>

            {/* Quick Actions / Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
              <a
                href={academyInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-4 sm:px-5"
              >
                <MessageSquare className="w-4 h-4" />
                Discuss a Digital Project
              </a>
              <a
                href="/courses?category=Web%20%26%20IT"
                className="btn-outline text-xs sm:text-sm py-2.5 px-4 sm:px-5"
              >
                Explore Web & IT Courses
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: From Problems to Practical Solutions (Capabilities & Flow) */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-border">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue mb-2">
              <Lightbulb className="w-4 h-4" />
              Mindset & Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
              {hamzaInfo.capabilitiesTitle}
            </h3>
            <p className="text-sm sm:text-base text-muted mt-2">
              {hamzaInfo.capabilitiesSubtitle}
            </p>
          </div>

          {/* 4 Capabilities Grid */}
          <div
            ref={capabilitiesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
          >
            {hamzaInfo.capabilities.map((cap, index) => {
              const capIcons = [Search, PenTool, Code2, RefreshCw]
              const Icon = capIcons[index % capIcons.length]
              return (
                <div
                  key={cap.title}
                  className="capability-card card-surface p-5 sm:p-6 flex flex-col justify-between hover:border-blue/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-navy mb-2 flex items-center justify-between">
                      <span>{cap.title}</span>
                      <span className="font-mono text-xs text-muted/60">0{index + 1}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-blue">
                    <span>Practical Execution</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Visual Problem -> Solution Workflow */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                  Systematic Delivery Workflow
                </span>
                <p className="text-sm sm:text-base font-bold text-navy">
                  Problem → Solution Methodology
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted italic">
                &ldquo;Good technology starts with understanding the problem.&rdquo;
              </p>
            </div>

            {/* Step Flow (Responsive: 2 cols on mobile, 3 on tablet, 6 on desktop) */}
            <div
              ref={flowRef}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative"
            >
              {hamzaInfo.flowSteps.map((step, idx) => {
                const StepIcon = stepIcons[idx] || CheckCircle2
                const isLast = idx === hamzaInfo.flowSteps.length - 1
                return (
                  <div
                    key={step.label}
                    className={`flow-node rounded-xl p-3.5 sm:p-4 text-center border transition-all duration-200 flex flex-col items-center justify-between ${
                      isLast
                        ? 'bg-blue/10 border-blue/30 text-navy font-bold ring-1 ring-blue/20'
                        : 'bg-surface border-border text-ink hover:border-blue/30'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center mb-2 text-blue shadow-2xs">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-muted block uppercase tracking-wider mb-0.5">
                      Step {step.step}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-navy mb-1">
                      {step.label}
                    </p>
                    <p className="text-[11px] text-muted leading-tight">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
