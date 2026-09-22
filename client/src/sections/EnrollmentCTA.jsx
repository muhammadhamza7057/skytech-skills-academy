import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Compass, MessageSquare } from 'lucide-react'
import { useScrollReveal } from '../utils/motion'
import { academyInfo } from '../data/content'

export default function EnrollmentCTA() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef)

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-20 lg:py-24 text-white">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue/20 via-navy/60 to-navy pointer-events-none" />

      <div ref={containerRef} className="container-sky relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-light block mb-2">
            Get Started with Skytech
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Skills for Learners. Professional Solutions for Clients.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            Choose the path that fits your goals today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Card 1: For Students */}
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-blue-light/40 hover:bg-white/10 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3 text-blue-light text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                For Students
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to Start Learning?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Explore our catalog of hands-on short courses in engineering drafting, BIM, web development, graphic design, and English communication.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <Link
                to="/courses"
                className="btn-primary text-sm py-2.5 px-5 w-full sm:w-auto text-center"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/enroll"
                className="btn-ghost-light text-sm py-2.5 px-5 w-full sm:w-auto text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Card 2: For Clients */}
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-blue-light/40 hover:bg-white/10 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3 text-blue-light text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                For Clients
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Project in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Discuss your architectural design, 2D municipal drafting, photorealistic 3D visualization, or digital solutions directly with our studio team.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <Link
                to="/services"
                className="btn-primary text-sm py-2.5 px-5 w-full sm:w-auto text-center"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={academyInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light text-sm py-2.5 px-5 w-full sm:w-auto text-center"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
