import { categoryCards } from '../data/content'
import CategoryCard from '../components/CategoryCard'
import SectionHeading from '../components/SectionHeading'

export default function CourseCategories() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Course Categories"
          title="Choose a path that matches your goals"
          description="Explore focused learning tracks across engineering, technology, design, and English."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card) => (
            <CategoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
