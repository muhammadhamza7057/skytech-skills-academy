import { Award, Layers, Route, Wrench } from 'lucide-react'
import { whyChoose } from '../data/content'
import FeatureCard from '../components/FeatureCard'
import SectionHeading from '../components/SectionHeading'

const icons = [Wrench, Layers, Route, Award]

export default function WhyChooseSkytech() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Why Choose Skytech"
          title="A focused academy for professional growth"
          description="We keep learning clear, practical, and career-oriented — without overcrowding your path with unnecessary noise."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whyChoose.map((item, index) => (
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
