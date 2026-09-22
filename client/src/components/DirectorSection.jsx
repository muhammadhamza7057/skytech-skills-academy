import { useRef } from 'react'
import { directorInfo } from '../data/content'
import mdImage from '../assets/MD.jpeg'
import { useImageReveal, useScrollReveal } from '../utils/motion'
import { CheckCircle2, MessageSquare, Phone, Compass, Award, ShieldCheck } from 'lucide-react'

export default function DirectorSection({ className = '', id = 'wajid-khan' }) {
  const imageContainerRef = useRef(null)
  const contentRef = useRef(null)

  useImageReveal(imageContainerRef)
  useScrollReveal(contentRef)

  return (
    <section id={id} className={`section-pad bg-navy text-white overflow-hidden scroll-mt-20 ${className}`}>
      <div className="container-sky">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Director Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle ambient glow behind */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue/40 to-blue-light/20 rounded-3xl blur-xl opacity-70" />

              {/* Blueprint corner accent */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-light z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-blue-light z-20 pointer-events-none" />

              {/* Image Frame with useImageReveal */}
              <div
                ref={imageContainerRef}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-navy-deep shadow-2xl aspect-[4/5]"
              >
                <img
                  src={mdImage}
                  alt={`${directorInfo.name} - ${directorInfo.role}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-light text-xs font-semibold uppercase tracking-wider mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    Architecture & Design Leadership
                  </div>
                  <h4 className="text-white font-bold text-lg">{directorInfo.name}</h4>
                  <p className="text-white/65 text-xs">{directorInfo.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director Details Column */}
          <div ref={contentRef} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/20 border border-blue/40 text-xs font-semibold text-blue-light mb-4">
              <Award className="w-4 h-4 text-blue-light" />
              Architecture & Design • 7+ Years Experience
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              {directorInfo.name}
            </h2>

            <p className="text-blue-light text-base sm:text-lg font-medium mb-3">
              Architectural Designer • {directorInfo.experience}
            </p>

            {/* Complementary Focus Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 mr-1">
                Focus:
              </span>
              {(directorInfo.focus || [
                'Architecture',
                'Design',
                'Drafting',
                'Visualization',
                'Practical Design Experience',
              ]).map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white/10 text-blue-light border border-white/15"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              {directorInfo.bio}
            </p>

            {/* Core Specialties */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-light" />
                Practice Disciplines & Competencies
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {directorInfo.specialties.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-light flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={directorInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                Consult with Director
              </a>
              <a
                href={directorInfo.phoneHref}
                className="btn-ghost-light"
              >
                <Phone className="w-4 h-4 text-blue-light" />
                {directorInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
