import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { academyInfo } from '../data/content'
import { FacebookIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
  { to: '/enroll', label: 'Enroll Now' },
]

const popularCourses = [
  { slug: 'autocad', name: 'AutoCAD' },
  { slug: 'revit', name: 'Revit' },
  { slug: 'mern-stack', name: 'MERN Stack' },
  { slug: 'web-development', name: 'Web Development' },
  { slug: 'graphic-designing', name: 'Graphic Designing' },
  { slug: 'spoken-english', name: 'Spoken English' },
  { slug: 'ielts-preparation', name: 'IELTS Preparation' },
]

const socialIconClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-200 hover:bg-white/20'

export default function Footer() {
  const facebookHref = academyInfo.social.facebook?.href

  return (
    <footer className="bg-navy text-white">
      <div className="container-sky grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Skytech Skills Academy Logo"
              className="h-12 w-auto rounded-sm object-contain ring-1 ring-white/15"
              width={36}
              height={48}
            />
            <div>
              <p className="font-display text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
                SKYTECH
              </p>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
                Skills Academy
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
            {academyInfo.tagline}. Practical short courses in technology,
            engineering, design, and English.
          </p>
          <p className="mt-3 text-[14px] font-medium text-white/85 sm:text-[15px]">
            {academyInfo.experience} • {academyInfo.studentsTrained}
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            {facebookHref ? (
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Skytech Skills Academy on Facebook"
                title="Facebook"
                className={socialIconClass}
              >
                <FacebookIcon size={18} />
              </a>
            ) : (
              <span
                tabIndex={0}
                role="button"
                className={`${socialIconClass} cursor-pointer hover:bg-white/20`}
                title="Skytech Skills Academy on Facebook"
                aria-label="Skytech Skills Academy on Facebook"
              >
                <FacebookIcon size={18} />
              </span>
            )}
            <a
              href={academyInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              className={socialIconClass}
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href={academyInfo.social.tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Skytech Skills Academy on TikTok"
              title="TikTok"
              className={socialIconClass}
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[14px] text-white/70 transition-colors hover:text-white sm:text-[15px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Popular Courses
          </h2>
          <ul className="mt-4 space-y-2.5">
            {popularCourses.map((course) => (
              <li key={course.slug}>
                <Link
                  to={`/course/${course.slug}`}
                  className="text-[14px] text-white/70 transition-colors hover:text-white sm:text-[15px]"
                >
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Contact Information
          </h2>
          <ul className="mt-4 space-y-3.5 text-[14px] text-white/70 sm:text-[15px]">
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-white/80" aria-hidden="true" />
              <a href={academyInfo.phoneHref} className="hover:text-white">
                {academyInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon size={17} className="mt-0.5 shrink-0 text-white/80" />
              <a
                href={academyInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {academyInfo.whatsapp}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-white/80" aria-hidden="true" />
              <a href={academyInfo.emailHref} className="break-all hover:text-white">
                {academyInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-white/80" aria-hidden="true" />
              <Link to="/about#location" className="hover:text-white">
                {academyInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sky flex flex-col gap-2 py-5 text-center text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-[14px]">
          <p>© 2026 Skytech Skills Academy. All rights reserved.</p>
          <p>Dargai, Malakand, Khyber Pakhtunkhwa</p>
        </div>
      </div>
    </footer>
  )
}
