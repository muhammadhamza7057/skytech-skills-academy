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
          description="Explore focused learning tracks across IT, digital skills, web development, engineering, English, and IELTS."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((card) => (
            <CategoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
