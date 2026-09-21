import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { architectureServices } from '../data/services'
import SectionHeading from '../components/SectionHeading'
import { useStaggerCards } from '../utils/motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ArchitectureServicesPreview() {
  const containerRef = useRef(null)
  useStaggerCards(containerRef, '.service-card')

  // Pick top 4 featured services
  const featuredServices = architectureServices.slice(0, 4)

  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-sky">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Commercial & Residential Practice"
            title="Professional Architectural & Design Services"
            description="Beyond training, Skytech's experienced architectural team delivers complete planning, drafting, and photorealistic 3D visualization for builders, homeowners, and commercial clients."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-light transition-colors self-start md:self-auto group"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="service-card card-surface card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-card-title mb-2.5">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="space-y-1.5 mb-4">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue hover:text-blue-light transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-navy p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-light">
              Need Architectural Plans or 3D Visuals?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Consult with Skytech's Architectural Designers Today
            </h4>
            <p className="text-sm text-white/75 mt-1 max-w-xl">
              From initial 2D floor plans to to-scale construction drawings and ultra-realistic exterior renders.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/services" className="btn-primary">
              View Services & Portfolio
            </Link>
            <a
              href="https://wa.me/923422421701?text=Hello%20Skytech,%20I%20would%20like%20to%20discuss%20an%20architectural%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
