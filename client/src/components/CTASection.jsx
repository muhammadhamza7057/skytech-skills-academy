import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

export default function CTASection({
  title,
  description,
  primaryLabel = 'Enroll Now',
  primaryTo = '/enroll',
  secondaryLabel,
  secondaryTo,
  className,
}) {
  return (
    <section className={cn('section-pad bg-navy text-white', className)}>
      <div className="container-sky max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo ? (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
