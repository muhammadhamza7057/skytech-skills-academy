import { BookOpen, Clock3, Compass, Target } from 'lucide-react'
import { highlights } from '../data/content'
import FeatureCard from '../components/FeatureCard'
import SectionHeading from '../components/SectionHeading'

const icons = [BookOpen, Target, Compass, Clock3]

export default function AcademyHighlights() {
  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Academy Highlights"
          title="Built for practical, career-ready learning"
          description="Skytech Skills Academy helps learners develop tools and communication skills that matter in studios, offices, and professional pathways."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={icons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
