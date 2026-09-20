import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { academyInfo } from '../data/content'
import { getPopularCourses } from '../data/courses'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
  { to: '/enroll', label: 'Enroll' },
]

export default function Footer() {
  const popular = getPopularCourses().slice(0, 6)

  return (
    <footer className="bg-navy text-white">
      <div className="container-sky grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-2xl font-semibold tracking-tight">
            SKYTECH SKILLS ACADEMY
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {academyInfo.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/90">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/90">
            Popular Courses
          </h2>
          <ul className="mt-4 space-y-2">
            {popular.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/course/${course.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/90">
            Contact Information
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{academyInfo.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{academyInfo.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{academyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sky py-5 text-center text-xs text-white/55 sm:text-sm">
          © 2026 Skytech Skills Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
