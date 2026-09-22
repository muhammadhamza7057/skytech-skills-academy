import { useRef } from 'react'
import { Clock3, Users, Target, Compass } from 'lucide-react'
import { highlights } from '../data/content'
import FeatureCard from '../components/FeatureCard'
import SectionHeading from '../components/SectionHeading'
import { useStaggerCards } from '../utils/motion'

const icons = [Clock3, Users, Target, Compass]

export default function AcademyHighlights() {
  const gridRef = useRef(null)
  useStaggerCards(gridRef, '.stagger-item')

  return (
    <section className="section-pad bg-white border-b border-border">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Key Trust Signals"
          title="Grounded Experience. Real Capabilities."
          description="Verified facts behind Skytech's training programs and professional design studio across Khyber Pakhtunkhwa."
        />
        <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
