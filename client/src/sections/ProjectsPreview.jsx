import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'
import SectionHeading from '../components/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Realized Architecture"
            title="Featured Architectural Projects"
            description="Explore photorealistic 3D exterior concepts, elevation studies, and interior spaces crafted by our design studio."
          />
          <Link
            to="/services#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-light transition-colors self-start md:self-auto group"
          >
            <span>Explore All 9 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProjectGallery limit={3} showHeader={false} />

        <div className="mt-10 text-center">
          <Link
            to="/services#portfolio"
            className="btn-outline"
          >
            <span>View Full Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
