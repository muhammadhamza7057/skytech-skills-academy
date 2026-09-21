import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Building2,
  Compass,
} from 'lucide-react'
import Button from '../components/Button'
import CampusesSection from '../components/CampusesSection'
import CTASection from '../components/CTASection'
import LocationMap from '../components/LocationMapLazy'
import SectionHeading from '../components/SectionHeading'
import { academyInfo } from '../data/content'
import { campuses } from '../data/campuses'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'
import { useScrollReveal, useStaggerCards } from '../utils/motion'
import { validateContact } from '../utils/validation'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const isArchitectureRequested =
    searchParams.get('purpose') === 'architecture' ||
    searchParams.get('service') === 'architecture'

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: isArchitectureRequested
      ? 'Architecture & Design Services'
      : 'Course Enrollment & Counseling',
    subject: isArchitectureRequested ? 'Architecture Design Inquiry' : '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const formMapRef = useRef(null)

  useScrollReveal(heroRef)
  useStaggerCards(cardsRef, '.stagger-item')
  useScrollReveal(formMapRef)

  usePageSEO({
    title: 'Contact Skytech | Academy Admissions & Architecture Services',
    description:
      'Contact Skytech Skills Academy & Architecture Services across our 3 campus branches in Dargai, Khall (Lower Dir), and Skhakot. Call +92 342 2421701 or message on WhatsApp for admissions and project consultations.',
    path: '/contact',
  })

  const update = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSubmitted(true)
  }

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      subtitle: 'Admissions & project lines',
      value: academyInfo.phone,
      href: academyInfo.phoneHref,
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      subtitle: 'Fast response & consultations',
      value: academyInfo.whatsapp,
      href: isArchitectureRequested
        ? 'https://wa.me/923422421701?text=Hello%20Skytech,%20I%20am%20inquiring%20about%20Architecture%20%26%20Design%20Services.'
        : academyInfo.whatsappHref,
      external: true,
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Formal inquiries & blueprints',
      value: academyInfo.email,
      href: academyInfo.emailHref,
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: '3 Branch Campuses',
      subtitle: 'Dargai, Lower Dir, Skhakot',
      value: 'Main: Adnan Plaza, Dargai',
      href: '#campuses',
      external: false,
      actionText: 'View All Branches',
    },
  ]

  return (
    <div className="bg-white">
      {/* Contact Hero Header */}
      <section className="border-b border-border bg-surface">
        <div ref={heroRef} className="container-sky section-pad pb-14">
          <SectionHeading
            eyebrow="Admissions & Architecture Consultations"
            title="Let's Discuss Your Education or Architecture Project"
            description="Have questions regarding our technical courses, certifications, or architectural design and 3D rendering services? Reach out to our directors and guidance team across our 3 regional branch locations."
          />
        </div>
      </section>

      {/* 4 Contact Information Cards */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="stagger-item card-surface group flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy">
                      {card.title}
                    </h3>
                    <p className="text-xs font-medium text-muted">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 text-sm font-bold text-navy break-words">
                      {card.value}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-border pt-4">
                    <span className="text-xs font-semibold text-blue group-hover:underline">
                      {card.actionText} →
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Interaction: Form + Academy Details */}
      <section className="section-pad bg-surface border-y border-border">
        <div ref={formMapRef} className="container-sky">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Form Column */}
            <div className="card-surface p-6 sm:p-10 lg:col-span-7">
              {submitted ? (
                <div className="rounded-xl border border-green-200 bg-green-50/70 p-6 sm:p-8" role="status">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <CheckCircle2 size={28} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy">
                        Inquiry Prepared Successfully
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-muted">
                        Thank you, <strong className="text-navy">{values.name}</strong>. Your inquiry regarding{' '}
                        <strong className="text-navy">{values.purpose}</strong> has been logged. For immediate scheduling or technical discussion, chat directly with us on WhatsApp.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button
                          href={academyInfo.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="accent"
                        >
                          <MessageCircle size={18} />
                          Chat on WhatsApp
                        </Button>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false)
                            setValues({
                              name: '',
                              email: '',
                              phone: '',
                              purpose: 'Course Enrollment & Counseling',
                              subject: '',
                              message: '',
                            })
                          }}
                          className="btn-outline"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy">
                      Send Us an Inquiry
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                      Select your inquiry topic below and our team will get back to you promptly.
                    </p>
                  </div>

                  {/* Purpose Selector */}
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Inquiry Purpose <span className="text-accent">*</span>
                    </span>
                    <select
                      className="input-field cursor-pointer"
                      value={values.purpose}
                      onChange={(e) => update('purpose', e.target.value)}
                    >
                      <option value="Course Enrollment & Counseling">
                        Course Enrollment & Career Counseling
                      </option>
                      <option value="Architecture & Design Services">
                        Architecture & Design Services (Commercial / Residential)
                      </option>
                      <option value="Project Discussion & 3D Visuals">
                        Project Discussion & 3D Visualization
                      </option>
                      <option value="Campus Visit & General Inquiry">
                        Campus Visit & General Inquiry
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Your Full Name <span className="text-accent">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Ahmad Khan"
                      className={cn('input-field', errors.name && 'border-accent ring-1 ring-accent')}
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                      autoComplete="name"
                    />
                    {errors.name ? (
                      <span className="mt-1 block text-xs font-semibold text-accent" role="alert">
                        {errors.name}
                      </span>
                    ) : null}
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-ink">
                        Email Address <span className="text-accent">*</span>
                      </span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className={cn('input-field', errors.email && 'border-accent ring-1 ring-accent')}
                        value={values.email}
                        onChange={(e) => update('email', e.target.value)}
                        autoComplete="email"
                      />
                      {errors.email ? (
                        <span className="mt-1 block text-xs font-semibold text-accent" role="alert">
                          {errors.email}
                        </span>
                      ) : null}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-ink">
                        Phone / WhatsApp <span className="text-accent">*</span>
                      </span>
                      <input
                        type="tel"
                        placeholder="0342 1234567"
                        className={cn('input-field', errors.phone && 'border-accent ring-1 ring-accent')}
                        value={values.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        autoComplete="tel"
                      />
                      {errors.phone ? (
                        <span className="mt-1 block text-xs font-semibold text-accent" role="alert">
                          {errors.phone}
                        </span>
                      ) : null}
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Subject / Details <span className="text-accent">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder={
                        values.purpose.includes('Architecture')
                          ? 'e.g. 3D Elevation & Floor Plan for Residential Plot'
                          : 'e.g. AutoCAD Course Timings & Fee'
                      }
                      className={cn('input-field', errors.subject && 'border-accent ring-1 ring-accent')}
                      value={values.subject}
                      onChange={(e) => update('subject', e.target.value)}
                    />
                    {errors.subject ? (
                      <span className="mt-1 block text-xs font-semibold text-accent" role="alert">
                        {errors.subject}
                      </span>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Message <span className="text-accent">*</span>
                    </span>
                    <textarea
                      rows={5}
                      placeholder={
                        values.purpose.includes('Architecture')
                          ? 'Describe your project requirements, location, plot size, or visual deliverables needed...'
                          : 'Tell us what you would like to know about our courses and schedule...'
                      }
                      className={cn('input-field', errors.message && 'border-accent ring-1 ring-accent')}
                      value={values.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                    {errors.message ? (
                      <span className="mt-1 block text-xs font-semibold text-accent" role="alert">
                        {errors.message}
                      </span>
                    ) : null}
                  </label>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-semibold"
                  >
                    <Send size={16} />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Academy Details & Campuses Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="card-surface p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-2">
                  <Building2 className="w-4 h-4 text-blue" />
                  3 Regional Campus Locations
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-4">
                  Visit Your Nearest Branch
                </h3>

                <div className="space-y-4 text-sm">
                  {campuses.map((campus) => (
                    <div
                      key={campus.id}
                      className="p-3.5 rounded-xl border border-border bg-surface"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-navy">
                          {campus.branchNumber}. {campus.name} ({campus.city})
                        </span>
                        <span className="text-[11px] font-semibold text-blue bg-blue/10 px-2 py-0.5 rounded">
                          {campus.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed mb-2">
                        {campus.address}
                      </p>
                      <div className="flex items-center gap-3 pt-2 border-t border-border/60 text-xs">
                        <a href={campus.phoneHref} className="text-blue font-medium hover:underline">
                          {campus.phone}
                        </a>
                        <span className="text-border">•</span>
                        <a
                          href={campus.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 font-medium hover:underline"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-3 pt-2">
                    <Clock3 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <div>
                      <strong className="text-navy block font-semibold text-xs uppercase tracking-wider">
                        Consultation & Visiting Hours:
                      </strong>
                      <span className="text-xs text-muted">
                        Monday - Saturday (Morning & Evening sessions available across all branches)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <LocationMap heightClass="h-[280px] sm:h-[320px]" />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={academyInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  className="w-full justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp Direct
                </Button>
                <Button
                  to="/services"
                  variant="outline"
                  className="w-full justify-center"
                >
                  <Compass size={18} />
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Grid Section */}
      <CampusesSection lightBackground={false} />

      {/* Bottom CTA */}
      <CTASection
        title="Ready to begin your training or architectural project?"
        description="Choose from practical short courses or hire our architectural design studio for your next project."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Architecture Services"
        secondaryTo="/services"
      />
    </div>
  )
}
