import { Link } from 'react-router-dom'
import { getPopularCourses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import SectionHeading from '../components/SectionHeading'

export default function PopularCourses() {
  const popular = getPopularCourses()

  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Popular Courses"
            title="Courses learners explore most"
            description="A selection of high-demand programs across technical tools, development, design, and English."
          />
          <Link
            to="/courses"
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-surface"
          >
            View all courses
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
