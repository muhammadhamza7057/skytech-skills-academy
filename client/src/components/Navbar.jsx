import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { cn } from '../utils/cn'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy transition-[box-shadow,background-color] duration-300',
        scrolled || open
          ? 'bg-navy/98 shadow-lg shadow-navy-deep/40 backdrop-blur-md'
          : 'shadow-none'
      )}
    >
      <div className="container-sky grid h-16 grid-cols-[1fr_auto] items-center gap-3 lg:h-[76px] lg:grid-cols-[auto_1fr_auto]">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Skytech Skills Academy home"
        >
          <img
            src={logo}
            alt="Skytech Skills Academy Logo"
            className="h-[38px] w-auto rounded-sm object-contain ring-1 ring-white/15 sm:h-[44px] lg:h-[48px]"
            width={36}
            height={48}
          />
          <div className="flex flex-col">
            <span className="font-display text-[15px] font-bold tracking-tight text-white sm:text-[17px] leading-tight">
              SKYTECH
            </span>
            <span className="hidden text-[10.5px] font-medium tracking-[0.16em] text-white/70 uppercase sm:inline-block">
              Skills Academy
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center justify-center gap-1.5 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative px-3.5 py-2 text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white',
                  isActive && 'font-semibold text-white',
                  isActive &&
                    "after:absolute after:inset-x-3 after:-bottom-[10px] after:h-[2.5px] after:rounded-full after:bg-white after:content-['']"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/enroll"
            className="btn-primary hidden h-11 px-5 py-0 text-[14px] lg:inline-flex"
          >
            Enroll Now
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/10 bg-navy transition-[max-height,opacity] duration-300 ease-out lg:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
        )}
      >
        <nav
          className={cn(
            'container-sky flex flex-col gap-1 py-4',
            open && 'animate-[menuIn_0.28s_ease-out]'
          )}
          aria-label="Mobile"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3.5 py-3 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-white/15 font-semibold text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/enroll"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full py-3.5 text-center justify-center"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
