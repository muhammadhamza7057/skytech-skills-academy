import { Link } from 'react-router-dom'
import { Clock3, Layers } from 'lucide-react'
import Button from './Button'

export default function CourseCard({ course }) {
  return (
    <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
      <Link to={`/course/${course.slug}`} className="block overflow-hidden">
        <img
          src={course.image}
          alt={`${course.name} course at Skytech Skills Academy`}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-blue uppercase">
          {course.category}
        </p>
        <h3 className="text-card-title mt-2">
          <Link to={`/course/${course.slug}`} className="transition-colors hover:text-blue">
            {course.name}
          </Link>
        </h3>
        <p className="text-card-desc mt-2.5 flex-1">{course.shortDescription}</p>

        <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-border pt-4 text-[13px] text-muted sm:text-sm">
          <p className="inline-flex items-center gap-1.5">
            <Clock3 size={14} aria-hidden="true" />
            <span>{course.duration}</span>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Layers size={14} aria-hidden="true" />
            <span>{course.level}</span>
          </p>
          <p className="col-span-2 text-[15px] font-semibold text-navy sm:text-base">
            {course.fee}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <Button
            to={`/course/${course.slug}`}
            variant="outline"
            className="w-full flex-1 px-4 py-3 text-sm"
          >
            View Details
          </Button>
          <Button
            to={`/enroll?course=${course.slug}`}
            variant="primary"
            className="w-full flex-1 px-4 py-3 text-sm"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </article>
  )
}
