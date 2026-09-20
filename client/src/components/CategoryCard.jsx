import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CategoryCard({ title, description, image, href }) {
  return (
    <Link
      to={href}
      className="group relative block min-h-[250px] overflow-hidden rounded-xl focus-visible:outline-offset-4 sm:min-h-[280px]"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20 transition-opacity duration-300 group-hover:via-navy/60" />
      <div className="relative flex h-full min-h-[250px] flex-col justify-end p-5 text-white sm:min-h-[280px] sm:p-6">
        <h3 className="font-display text-xl font-semibold sm:text-[1.35rem]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-[15px]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white sm:text-[15px]">
          View courses
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
