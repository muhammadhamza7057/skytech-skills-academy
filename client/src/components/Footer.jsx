import { Link } from 'react-router-dom'
import { Mail, Phone, Building2 } from 'lucide-react'
import logo from '../assets/logo.png'
import { academyInfo } from '../data/content'
import { campuses } from '../data/campuses'
import { FacebookIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/services', label: 'Architecture Services' },
  { to: '/projects', label: 'Project Portfolio' },
  { to: '/projects/residential-architectural-project', label: 'Residential Case Study' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
  { to: '/enroll', label: 'Enroll Now' },
]

const popularCourses = [
  { slug: 'autocad', name: 'AutoCAD Architectural & MEP' },
  { slug: 'revit', name: 'Revit Architectural' },
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
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Skytech Skills Academy Logo"
              className="h-12 w-auto rounded-sm object-contain "
              width={36}
              height={48}
            />
            <div>
              <p className="font-display text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
                SKYTECH
              </p>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
                Academy & Architecture
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
            {academyInfo.tagline}. Professional IT & Engineering Learning Center and Commercial Architectural Design Studio.
          </p>
          <p className="mt-3 text-[13px] font-medium text-blue-light">
            7+ Years of Experience • 1000+ Students Trained • 3 Regional Campuses
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            {facebookHref ? (
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Skytech on Facebook"
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
                title="Skytech on Facebook"
                aria-label="Skytech on Facebook"
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
              aria-label="Visit Skytech on TikTok"
              title="TikTok"
              className={socialIconClass}
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Navigation
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

        {/* Popular Courses */}
        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Programs & Tools
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
            <li className="pt-2">
              <Link
                to="/services"
                className="text-[13px] font-semibold text-blue-light transition-colors hover:text-white flex items-center gap-1.5"
              >
                <span>Architectural Design Services</span>
                <span>→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Campus Branches */}
        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:text-[13px]">
            Our 3 Campuses & Contact
          </h2>
          <ul className="mt-4 space-y-3 text-[14px] text-white/70 sm:text-[15px]">
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-blue-light" aria-hidden="true" />
              <a href={academyInfo.phoneHref} className="hover:text-white">
                {academyInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon size={17} className="mt-0.5 shrink-0 text-blue-light" />
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
              <Mail size={17} className="mt-0.5 shrink-0 text-blue-light" aria-hidden="true" />
              <a href={academyInfo.emailHref} className="break-all hover:text-white">
                {academyInfo.email}
              </a>
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-white/10">
            <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-light" />
              Regional Branches
            </h3>
            <div className="space-y-2 text-xs text-white/70">
              {campuses.map((c) => (
                <div key={c.id}>
                  <span className="text-white font-medium">{c.name} ({c.city}): </span>
                  <span>{c.address}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sky flex flex-col gap-2 py-5 text-center text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-[14px]">
          <p>© 2026 Skytech Skills Academy & Architecture Services. All rights reserved.</p>
          <p>Dargai (Main) • Lower Dir (Khall) • Skhakot</p>
        </div>
      </div>
    </footer>
  )
}
