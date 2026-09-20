import { lazy, Suspense } from 'react'
import { cn } from '../utils/cn'

const LocationMapInner = lazy(() => import('./LocationMap'))

export default function LocationMapLazy({
  className,
  heightClass = 'h-[320px] sm:h-[380px] lg:h-[420px]',
}) {
  return (
    <Suspense
      fallback={
        <div
          className={cn(
            'flex items-center justify-center rounded-lg border border-border bg-surface text-sm text-muted',
            heightClass,
            className
          )}
        >
          Loading map…
        </div>
      }
    >
      <LocationMapInner className={className} heightClass={heightClass} />
    </Suspense>
  )
}
