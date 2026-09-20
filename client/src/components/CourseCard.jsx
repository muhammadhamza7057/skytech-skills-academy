import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock3, Layers } from 'lucide-react'
import Button from './Button'
import { COURSE_FALLBACK_IMAGE } from '../data/courses'

export default function CourseCard({ course }) {
  const [imgSrc, setImgSrc] = useState(course.image)

  return (
    <article className="card-surface card-hover group flex h-full flex-col overflow-hidden transition-all duration-300">
      <Link
        to={`/course/${course.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-surface"
      >
        <img
          src={imgSrc}
          alt={`${course.name} course at Skytech Skills Academy`}
          onError={() => setImgSrc(COURSE_FALLBACK_IMAGE)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-blue uppercase">
          {course.category}
        </p>
        <h3 className="text-card-title mt-2">
          <Link
            to={`/course/${course.slug}`}
            className="transition-colors duration-200 hover:text-blue"
          >
            {course.name}
          </Link>
        </h3>
        <p className="text-card-desc mt-2.5 flex-1 line-clamp-3 leading-relaxed text-muted">
          {course.shortDescription}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-border pt-4 text-[13px] text-muted sm:text-sm">
          <p className="inline-flex items-center gap-1.5 font-medium">
            <Clock3 size={15} className="shrink-0 text-blue/80" aria-hidden="true" />
            <span>{course.duration}</span>
          </p>
          <p className="inline-flex items-center gap-1.5 font-medium">
            <Layers size={15} className="shrink-0 text-blue/80" aria-hidden="true" />
            <span>{course.level}</span>
          </p>
          <p className="col-span-2 text-[15px] font-bold text-navy sm:text-base">
            {course.fee}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Button
            to={`/course/${course.slug}`}
            variant="outline"
            className="w-full px-3 py-2.5 text-center text-sm font-semibold"
          >
            View Details
          </Button>
          <Button
            to={`/enroll?course=${course.slug}`}
            variant="primary"
            className="w-full px-3 py-2.5 text-center text-sm font-semibold"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </article>
  )
}
