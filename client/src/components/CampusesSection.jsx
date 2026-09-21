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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Regional Footprint"
            title="Our Campuses & Branches"
            description="Skytech serves students and architectural clients across 3 established branch locations in Khyber Pakhtunkhwa. Visit your nearest campus for admissions, in-person training, or project consultations."
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-semibold text-blue self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4 text-blue" />
            3 Active Regional Locations
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className={`campus-card relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                campus.isMain
                  ? 'bg-gradient-to-b from-navy to-navy-deep text-white border-navy/60 shadow-xl ring-1 ring-blue/30'
                  : 'bg-white text-ink border-border hover:border-blue/40 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Header row with branch number & badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        campus.isMain
                          ? 'bg-blue/30 text-blue-light border border-blue/40'
                          : 'bg-surface text-ink border border-border'
                      }`}
                    >
                      Branch {campus.branchNumber}
                    </span>
                    {campus.isMain && (
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                        Primary HQ
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      campus.isMain ? 'text-white/60' : 'text-muted'
                    }`}
                  >
                    {campus.badge}
                  </span>
                </div>

                {/* Campus Title */}
                <h3
                  className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                    campus.isMain ? 'text-white' : 'text-navy'
                  }`}
                >
                  <Building2
                    className={`w-5 h-5 flex-shrink-0 ${
                      campus.isMain ? 'text-blue-light' : 'text-blue'
                    }`}
                  />
                  {campus.name} — {campus.city}
                </h3>

                {/* Address block */}
                <div className="flex items-start gap-2.5 text-sm mb-6">
                  <MapPin
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      campus.isMain ? 'text-white/60' : 'text-muted'
                    }`}
                  />
                  <p
                    className={`leading-relaxed ${
                      campus.isMain ? 'text-white/80' : 'text-muted'
                    }`}
                  >
                    {campus.fullAddress}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div
                className={`pt-5 mt-4 border-t flex flex-wrap gap-2.5 ${
                  campus.isMain ? 'border-white/10' : 'border-border'
                }`}
              >
                <a
                  href={campus.phoneHref}
                  className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 flex-1 ${
                    campus.isMain
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-surface hover:bg-border text-ink'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-blue" />
                  Call Campus
                </a>
                <a
                  href={`${campus.whatsappHref}?text=Hello%20Skytech,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
                    campus.name
                  )}%20in%20${encodeURIComponent(campus.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-accent hover:bg-accent-dark text-white transition-colors duration-200 flex-1 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
