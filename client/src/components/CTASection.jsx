import Button from './Button'
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
        <h2 className="font-display text-[1.75rem] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-base lg:text-[17px]">
            {description}
          </p>
        ) : null}
        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTo ? (
            <Button to={secondaryTo} variant="ghostLight">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
