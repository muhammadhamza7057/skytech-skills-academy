import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock3 } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-lg hover:shadow-navy/5">
      <Link to={`/course/${course.slug}`} className="block overflow-hidden">
        <img
          src={course.image}
          alt={`${course.name} course at Skytech Skills Academy`}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">
          {course.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-navy">
          <Link to={`/course/${course.slug}`} className="hover:text-blue">
            {course.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {course.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div>
            <p className="text-sm font-bold text-navy">{course.fee}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
              <Clock3 size={12} aria-hidden="true" />
              {course.duration}
            </p>
          </div>
          <Link
            to={`/course/${course.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-blue hover:text-navy"
          >
            Details
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
