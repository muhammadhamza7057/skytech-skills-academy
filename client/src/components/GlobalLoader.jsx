import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'

export default function GlobalLoader() {
  const [mounted, setMounted] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // If the browser already finished loading or as soon as component mounts
    const handleReady = () => {
      // Very brief delay (350ms) to allow initial paint without artificially slowing user down
      const timer = setTimeout(() => {
        setFading(true)
        const removeTimer = setTimeout(() => {
          setMounted(false)
        }, 300)
        return () => clearTimeout(removeTimer)
      }, 350)
      return () => clearTimeout(timer)
    }

    if (document.readyState === 'complete') {
      handleReady()
    } else {
      window.addEventListener('load', handleReady, { once: true })
      const fallbackTimer = setTimeout(handleReady, 600)
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy px-4 transition-opacity duration-300 ease-out ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={fading ? 'true' : 'false'}
    >
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-5">
          <img
            src={logo}
            alt="Skytech Skills Academy Logo"
            className="h-16 w-auto rounded-md object-contain shadow-md ring-1 ring-white/20 sm:h-20"
            width={56}
            height={75}
            fetchPriority="high"
          />
        </div>

        {/* Title & Tagline */}
        <h1 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
          SKYTECH SKILLS ACADEMY
        </h1>
        <p className="mt-1.5 text-xs font-medium tracking-[0.14em] text-white/75 uppercase sm:text-sm">
          Learn Practical Skills. Build Your Career.
        </p>

        {/* Subtle Progress Bar */}
        <div className="mt-7 h-1 w-36 overflow-hidden rounded-full bg-white/15 sm:w-48">
          <div className="h-full w-full animate-[progress_0.75s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue via-accent to-blue bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  )
}
