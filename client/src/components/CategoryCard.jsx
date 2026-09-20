import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CategoryCard({ title, description, image, href }) {
  return (
    <Link
      to={href}
      className="group relative block min-h-[260px] overflow-hidden rounded-xl focus-visible:outline-offset-4"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6 text-white">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
          View courses
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
