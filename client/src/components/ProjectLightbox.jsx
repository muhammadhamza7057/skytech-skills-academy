import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function ProjectLightbox({ project, projects, onClose, onSelectProject }) {
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onSelectProject(prevProject)
      if (e.key === 'ArrowRight') onSelectProject(nextProject)
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, prevProject, nextProject, onClose, onSelectProject])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Preview`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
        aria-label="Close project preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onSelectProject(prevProject)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => onSelectProject(nextProject)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Project Image */}
        <div className="lg:w-3/5 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-xs font-mono text-slate-300 px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
            <Maximize2 className="w-3.5 h-3.5 text-blue-light" />
            {project.category}
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-light bg-blue/20 border border-blue/40 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {currentIndex + 1} / {projects.length}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technical Specifications */}
            {project.specs && project.specs.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Specifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-300 bg-slate-800 border border-slate-700/60 px-2.5 py-1 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/923422421701?text=Hello%20Skytech%20Architecture,%20I%20would%20like%20to%20inquire%20about%20a%20project%20similar%20to%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center py-2.5 text-sm"
            >
              Discuss Similar Project
            </a>
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
