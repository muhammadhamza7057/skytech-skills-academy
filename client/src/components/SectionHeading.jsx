import { cn } from '../utils/cn'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl lg:max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <p className={cn('text-eyebrow', light && 'text-white/65')}>{eyebrow}</p>
      ) : null}
      <h2 className={cn('text-section-title mt-3', light && 'text-white')}>
        {title}
      </h2>
      {description ? (
        <p className={cn('text-section-desc mt-4', light && 'text-white/75')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
