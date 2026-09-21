import { useState, useRef } from 'react'
import { projects, projectFilters } from '../data/projects'
import ProjectLightbox from './ProjectLightbox'
import { useStaggerCards } from '../utils/motion'
import { Maximize2, Layers } from 'lucide-react'

export default function ProjectGallery({ initialFilter = 'all', limit, showHeader = false }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [selectedProject, setSelectedProject] = useState(null)
  const gridRef = useRef(null)

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    return (
      project.categoryFilter === activeFilter ||
      (project.tags && project.tags.includes(activeFilter))
    )
  })

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  useStaggerCards(gridRef, '.project-card', {}, [activeFilter, displayedProjects.length])

  return (
    <div className="w-full">
      {showHeader && (
        <div className="mb-8">
          <p className="text-eyebrow">Portfolio Showcase</p>
          <h2 className="text-section-title mt-2 text-slate-900">
            Selected Architectural Works
          </h2>
          <p className="text-section-desc mt-3">
            Realized 3D visualizations, structural drafts, and exterior designs executed by Skytech's architectural design team.
          </p>
        </div>
      )}

      {/* Filter Tabs */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectFilters.map((tab) => {
            const isActive = activeFilter === tab.value
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="project-card group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Container with 4:3 Aspect Ratio */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="flex items-center justify-between w-full text-white">
                  <span className="text-xs font-medium flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-primary-400" />
                    Click to view full render
                  </span>
                  <span className="text-xs font-mono bg-white/20 px-2 py-0.5 rounded">
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/60 shadow-xs">
                {project.category}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                  <span className="font-mono text-primary-600 font-semibold">
                    {project.id}
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Specs Pills */}
              {project.specs && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                  {project.specs.slice(0, 2).map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          projects={displayedProjects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />
      )}
    </div>
  )
}
