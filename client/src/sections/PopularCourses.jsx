import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getPopularCourses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import SectionHeading from '../components/SectionHeading'
import { useStaggerCards } from '../utils/motion'

export default function PopularCourses() {
  const popular = getPopularCourses()
  const gridRef = useRef(null)

  useStaggerCards(gridRef, '.stagger-item')

  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Popular Courses"
            title="Courses learners explore most"
            description="A selection of high-demand programs across technical tools, development, design, and English."
          />
          <Link to="/courses" className="btn-outline shrink-0">
            View all courses
          </Link>
        </div>
        <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
