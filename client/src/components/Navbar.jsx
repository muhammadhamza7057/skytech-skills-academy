import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
    const onScroll = () => setScrolled(window.scrollY > 12)
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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-white/95 backdrop-blur-md'
          : 'border-transparent bg-navy'
      )}
    >
      <div className="container-sky flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-extrabold tracking-wide text-white',
              scrolled || open ? 'bg-navy' : 'bg-white/10'
            )}
            aria-hidden="true"
          >
            ST
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                'block truncate text-sm font-extrabold tracking-wide sm:text-base',
                scrolled || open ? 'text-navy' : 'text-white'
              )}
            >
              SKYTECH
            </span>
            <span
              className={cn(
                'block truncate text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs',
                scrolled || open ? 'text-muted' : 'text-white/70'
              )}
            >
              Skills Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                  scrolled
                    ? isActive
                      ? 'bg-surface text-navy'
                      : 'text-ink/80 hover:bg-surface hover:text-navy'
                    : isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/enroll"
            className={cn(
              'hidden rounded-md px-4 py-2.5 text-sm font-bold transition-colors sm:inline-flex',
              scrolled || open
                ? 'bg-accent text-white hover:bg-accent-dark'
                : 'bg-accent text-white hover:bg-accent-dark'
            )}
          >
            Enroll Now
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2 lg:hidden',
              scrolled || open ? 'text-navy' : 'text-white'
            )}
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
          'border-t border-border bg-white lg:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="container-sky flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-3 text-base font-semibold',
                  isActive ? 'bg-surface text-navy' : 'text-ink hover:bg-surface'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/enroll"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-base font-bold text-white hover:bg-accent-dark"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
