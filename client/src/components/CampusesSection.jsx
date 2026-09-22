import { useRef } from 'react'
import { campuses } from '../data/campuses'
import { MapPin, Phone, MessageSquare, Building2, CheckCircle2 } from 'lucide-react'
import { useStaggerCards } from '../utils/motion'
import SectionHeading from './SectionHeading'

export default function CampusesSection({ className = '', lightBackground = false }) {
  const containerRef = useRef(null)
  useStaggerCards(containerRef, '.campus-card')

  return (
    <section
      id="campuses"
      className={`section-pad ${
        lightBackground ? 'bg-surface' : 'bg-white'
      } ${className}`}
    >
      <div className="container-sky">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <SectionHeading
            eyebrow="Regional Footprint"
            title="Our Campuses & Branches"
            description="Skytech serves students and architectural clients across 3 established branch locations in Khyber Pakhtunkhwa. Visit your nearest campus for admissions, in-person training, or project consultations."
          />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-medium text-blue self-start md:self-auto shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue shrink-0" aria-hidden="true" />
            <span>3 Active Regional Locations</span>
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch"
        >
          {campuses.map((campus) => {
            const isLastOnTablet = !campus.isMain && campus.branchNumber === '03'

            return (
              <div
                key={campus.id}
                className={`campus-card relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white text-ink border shadow-xs hover:shadow-md hover:-translate-y-1 ${
                  isLastOnTablet ? 'md:col-span-2 lg:col-span-1 md:max-w-lg md:w-full md:mx-auto lg:max-w-none' : ''
                } ${
                  campus.isMain
                    ? 'border-[#C5D5E8] border-t-4 border-t-navy hover:border-blue/50'
                    : 'border-[#D8E2EF] border-t-4 border-t-transparent hover:border-blue/40'
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Header row with branch number & badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#F1F5F9] text-navy border border-[#E2E8F0]">
                        Branch {campus.branchNumber}
                      </span>
                      {campus.isMain && (
                        <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-[#EAF2FB] text-[#1557A6] border border-[#D0E2F7]">
                          PRIMARY HQ
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#64748B]">
                      {campus.badge}
                    </span>
                  </div>

                  {/* Campus Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-blue shrink-0" aria-hidden="true" />
                    <span>
                      {campus.name} — {campus.city}
                    </span>
                  </h3>

                  {/* Address block */}
                  <div className="flex items-start gap-2.5 text-sm mb-6 flex-1">
                    <MapPin className="w-4 h-4 text-blue shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                      {campus.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 sm:pt-5 mt-auto border-t border-[#E2E8F0] flex flex-wrap gap-2.5">
                  <a
                    href={campus.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-[#F8FAFC] hover:bg-[#EDF2F7] text-navy border border-[#D8E2EF] transition-colors duration-200 flex-1 shadow-2xs group/call"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue shrink-0 transition-transform duration-200 group-hover/call:scale-110" aria-hidden="true" />
                    <span>Call Campus</span>
                  </a>
                  <a
                    href={`${campus.whatsappHref}?text=Hello%20Skytech,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
                      campus.name
                    )}%20in%20${encodeURIComponent(campus.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-accent hover:bg-accent-dark text-white transition-colors duration-200 flex-1 shadow-xs group/wa"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/wa:scale-110" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
