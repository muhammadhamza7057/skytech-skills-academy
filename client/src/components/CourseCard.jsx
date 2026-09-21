import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3 } from 'lucide-react'
import Button from './Button'
import { COURSE_FALLBACK_IMAGE } from '../data/courses'

export default function CourseCard({ course }) {
  const [imgSrc, setImgSrc] = useState(course.image)

  return (
    <article className="stagger-item card-surface card-shimmer group flex h-full flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-250 ease-out hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-lg hover:shadow-navy/10">
      <Link
        to={`/course/${course.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100"
      >
        <img
          src={imgSrc}
          alt={`${course.name} course at Skytech Skills Academy`}
          onError={() => setImgSrc(COURSE_FALLBACK_IMAGE)}
          className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.038]"
          loading="lazy"
          decoding="async"
          width={600}
          height={375}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-blue uppercase">
          {course.category}
        </p>
        <h3 className="text-card-title mt-2">
          <Link
            to={`/course/${course.slug}`}
            className="inline-flex items-center gap-1.5 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue"
          >
            <span>{course.name}</span>
            <ArrowRight
              size={15}
              className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              aria-hidden="true"
            />
          </Link>
        </h3>

        {/* Additional Course Content Highlight */}
        {course.cardHighlight && (
          <div className="mt-2">
            <span className="inline-block rounded-md bg-blue/10 px-2.5 py-1 text-xs font-semibold text-blue border border-blue/20">
              {course.cardHighlight}
            </span>
          </div>
        )}

        <p className="text-card-desc mt-2.5 flex-1 line-clamp-3 leading-relaxed text-muted">
          {course.shortDescription}
        </p>

        <div className="mt-5 border-t border-border pt-4 text-[13px] text-muted sm:text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200/80">
              {course.mode}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
              <Clock3 size={14} className="shrink-0 text-blue/80" aria-hidden="true" />
              <span>{course.duration}</span>
            </span>
          </div>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Course Fee
            </span>
            <p className="text-base font-bold text-navy sm:text-lg">
              {course.fee}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Button
            to={`/course/${course.slug}`}
            variant="outline"
            className="w-full px-3 py-2.5 text-center text-sm font-semibold transition-transform duration-200 active:scale-[0.98]"
          >
            View Details
          </Button>
          <Button
            to={`/enroll?course=${course.slug}`}
            variant="primary"
            className="w-full px-3 py-2.5 text-center text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </article>
  )
}
