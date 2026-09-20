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
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'text-xs font-bold uppercase tracking-[0.18em]',
            light ? 'text-white/60' : 'text-blue'
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-white/75' : 'text-muted'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
