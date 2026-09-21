import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { COURSE_FALLBACK_IMAGE } from '../data/courses'

export default function CategoryCard({ title, description, image, href }) {
  const [imgSrc, setImgSrc] = useState(image)

  return (
    <Link
      to={href}
      className="stagger-item card-shimmer group relative block min-h-[250px] overflow-hidden rounded-xl bg-navy focus-visible:outline-offset-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-deep/30 ring-1 ring-white/10 sm:min-h-[280px]"
    >
      <img
        src={imgSrc}
        alt=""
        onError={() => setImgSrc(COURSE_FALLBACK_IMAGE)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
        width={450}
        height={280}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/85 to-navy/30 transition-opacity duration-300 group-hover:via-navy/75" />
      <div className="relative flex h-full min-h-[250px] flex-col justify-end p-5 text-white sm:min-h-[280px] sm:p-6">
        <h3 className="font-display text-xl font-bold text-white sm:text-[1.35rem] transition-transform duration-200 group-hover:translate-x-1">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-[15px]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white sm:text-[15px]">
          View courses
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1.5 text-blue-light"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
