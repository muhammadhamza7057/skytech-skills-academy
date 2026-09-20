import { useState } from 'react'
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import LocationMap from '../components/LocationMapLazy'
import SectionHeading from '../components/SectionHeading'
import { academyInfo } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'
import { validateContact } from '../utils/validation'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  usePageSEO({
    title: 'Contact Skytech Skills Academy | Dargai, Malakand',
    description:
      'Contact Skytech Skills Academy in Dargai, Malakand. Call +92 342 2421701 or message on WhatsApp for course guidance, schedules, and admissions.',
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
      subtitle: 'Course inquiries & timings',
      value: academyInfo.phone,
      href: academyInfo.phoneHref,
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      subtitle: 'Fast response & counseling',
      value: academyInfo.whatsapp,
      href: academyInfo.whatsappHref,
      external: true,
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Formal inquiries & syllabus',
      value: academyInfo.email,
      href: academyInfo.emailHref,
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Visit Academy',
      subtitle: 'Dargai, Malakand',
      value: 'Adnan Plaza, Opposite Lahori Sweets',
      href: `https://www.openstreetmap.org/directions?to=${academyInfo.location.lat}%2C${academyInfo.location.lng}`,
      external: true,
      actionText: 'Get Directions',
    },
  ]

  return (
    <div className="bg-white">
      {/* Contact Hero Header — Clean, dedicated heading without duplicate Home navigation */}
      <section className="border-b border-border bg-surface">
        <div className="container-sky section-pad pb-14">
          <SectionHeading
            eyebrow="Contact Skytech Skills Academy"
            title="Let's Talk About Your Learning Path"
            description="Have questions regarding our technical short courses, fee structure, class timings, or admissions? Reach out to our instructors and guidance team in Dargai, Malakand."
          />
        </div>
      </section>

      {/* 4 Contact Information Cards */}
      <section className="section-pad bg-white">
        <div className="container-sky">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="card-surface group flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-md"
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
                  <span className="mt-5 inline-flex items-center text-xs font-bold tracking-wider text-blue uppercase group-hover:underline">
                    {card.actionText} →
                  </span>
                </a>
              )
            })}
          </div>

          {/* Main Grid: Contact Form & Map */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Contact Form */}
            <div className="card-surface p-6 sm:p-8 lg:p-10 shadow-xs">
              {submitted ? (
                <div role="status" className="py-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={28} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy">
                        Message Prepared Successfully
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-muted">
                        Thank you, <strong className="text-navy">{values.name}</strong>. Your inquiry has been prepared. For immediate course registration and prompt responses, message us directly on WhatsApp.
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
                            setValues({ name: '', email: '', phone: '', subject: '', message: '' })
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
                      Send Us a Message
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                      Fill in the details below and we will get back to you with program information.
                    </p>
                  </div>

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
                      Subject / Course of Interest <span className="text-accent">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. AutoCAD Course Timings"
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
                      placeholder="Tell us what you would like to know about our courses..."
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
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Academy Details & Map */}
            <div className="space-y-6">
              <div className="card-surface p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-navy">
                  Academy Location & Hours
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We welcome prospective students for in-person campus visits, program counseling, and practical lab tours.
                </p>

                <div className="mt-5 space-y-3.5 border-t border-border pt-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-blue" />
                    <div>
                      <strong className="text-navy block font-semibold">Address:</strong>
                      <span className="text-muted">{academyInfo.address}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 size={18} className="mt-0.5 shrink-0 text-blue" />
                    <div>
                      <strong className="text-navy block font-semibold">Office Hours:</strong>
                      <span className="text-muted">Monday - Saturday (Morning & Evening sessions available)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polished Location Map */}
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <LocationMap heightClass="h-[300px] sm:h-[360px]" />
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
                  to="/enroll"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Enroll Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to begin your training at Skytech?"
        description="Choose from practical short courses in CAD drafting, BIM, modern web stacks, graphic design, and IELTS."
        primaryLabel="Explore Courses"
        primaryTo="/courses"
        secondaryLabel="Enroll Now"
        secondaryTo="/enroll"
      />
    </div>
  )
}
