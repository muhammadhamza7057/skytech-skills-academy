import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

export default function GlobalLoader() {
  const [mounted, setMounted] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const handleReady = () => {
      // 400ms duration allows the brand sequence to execute smoothly without blocking user
      const timer = setTimeout(() => {
        setFading(true)
        const removeTimer = setTimeout(() => {
          setMounted(false)
        }, 320)
        return () => clearTimeout(removeTimer)
      }, 400)
      return () => clearTimeout(timer)
    }

    if (document.readyState === 'complete') {
      handleReady()
    } else {
      window.addEventListener('load', handleReady, { once: true })
      const fallbackTimer = setTimeout(handleReady, 650)
      return () => {
        window.removeEventListener('load', handleReady)
        clearTimeout(fallbackTimer)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      id="global-loader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy px-4 transition-all duration-320 ease-out ${
        fading ? 'pointer-events-none opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
      }`}
      aria-hidden={fading ? 'true' : 'false'}
    >
      <div className="flex flex-col items-center text-center">
        {/* Logo with entrance scale and soft glow */}
        <div className="relative mb-5 transition-transform duration-500 ease-out">
          <img
            src={logo}
            alt="Skytech Skills Academy Logo"
            className="h-16 w-auto rounded-md object-contain shadow-lg ring-1 ring-white/25 sm:h-20"
            width={56}
            height={75}
            fetchPriority="high"
          />
        </div>

        {/* Title with clip wipe and tagline */}
        <h1 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
          SKYTECH SKILLS ACADEMY
        </h1>
        <p className="mt-1.5 text-xs font-medium tracking-[0.15em] text-white/75 uppercase sm:text-sm">
          Learn Practical Skills. Build Your Career.
        </p>

        {/* Progress Bar */}
        <div className="mt-7 h-1 w-36 overflow-hidden rounded-full bg-white/15 sm:w-48">
          <div className="h-full w-full animate-[progress_0.75s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue via-accent to-blue bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  )
}
