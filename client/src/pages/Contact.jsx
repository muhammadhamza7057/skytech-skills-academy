import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import LocationMap from '../components/LocationMapLazy'
import SectionHeading from '../components/SectionHeading'
import { academyInfo } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { validateContact } from '../utils/validation'
import { cn } from '../utils/cn'

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
    title: 'Contact',
    description:
      'Contact Skytech Skills Academy in Dargai, Malakand. Call +92 342 2421701 or email skytechskills@gmail.com for course guidance and enrollment.',
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

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: academyInfo.phone,
      href: academyInfo.phoneHref,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: academyInfo.whatsapp,
      href: academyInfo.whatsappHref,
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: academyInfo.email,
      href: academyInfo.emailHref,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: academyInfo.address,
      href: '/about#location',
      internal: true,
    },
  ]

  return (
    <div className="bg-surface">
      <div className="container-sky section-pad">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Reach us for course information, enrollment guidance, or a visit to our academy in Dargai, Malakand."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map(({ icon: Icon, label, value, href, external, internal }) => {
            const content = (
              <div className="flex h-full items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-blue">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold break-words text-navy">{value}</p>
                </div>
              </div>
            )

            if (internal) {
              return (
                <a
                  key={label}
                  href={href}
                  className="card-surface p-5 transition-colors hover:border-blue/30"
                >
                  {content}
                </a>
              )
            }

            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="card-surface p-5 transition-colors hover:border-blue/30"
              >
                {content}
              </a>
            )
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-surface p-5 sm:p-8">
            {submitted ? (
              <div role="status">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue" size={24} aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy">
                      Message ready
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Thank you, {values.name}. This contact form is a frontend
                      demonstration and has not been connected to a backend yet. For a
                      quick response, message us on WhatsApp.
                    </p>
                    <Button
                      href={academyInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="accent"
                      className="mt-5"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-navy">
                  Send a message
                </h2>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">
                    Name <span className="text-accent">*</span>
                  </span>
                  <input
                    className={cn('input-field', errors.name && 'border-accent')}
                    value={values.name}
                    onChange={(e) => update('name', e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name ? (
                    <span className="mt-1 block text-xs text-accent" role="alert">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Email <span className="text-accent">*</span>
                    </span>
                    <input
                      type="email"
                      className={cn('input-field', errors.email && 'border-accent')}
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                      autoComplete="email"
                    />
                    {errors.email ? (
                      <span className="mt-1 block text-xs text-accent" role="alert">
                        {errors.email}
                      </span>
                    ) : null}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink">
                      Phone <span className="text-accent">*</span>
                    </span>
                    <input
                      className={cn('input-field', errors.phone && 'border-accent')}
                      value={values.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      autoComplete="tel"
                    />
                    {errors.phone ? (
                      <span className="mt-1 block text-xs text-accent" role="alert">
                        {errors.phone}
                      </span>
                    ) : null}
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">
                    Subject <span className="text-accent">*</span>
                  </span>
                  <input
                    className={cn('input-field', errors.subject && 'border-accent')}
                    value={values.subject}
                    onChange={(e) => update('subject', e.target.value)}
                  />
                  {errors.subject ? (
                    <span className="mt-1 block text-xs text-accent" role="alert">
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
                    className={cn('input-field', errors.message && 'border-accent')}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                  {errors.message ? (
                    <span className="mt-1 block text-xs text-accent" role="alert">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Our location</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {academyInfo.address}
              </p>
            </div>
            <LocationMap heightClass="h-[280px] sm:h-[340px] lg:h-[380px]" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={academyInfo.whatsappHref} target="_blank" rel="noopener noreferrer" variant="accent">
                WhatsApp Us
              </Button>
              <Button to="/enroll" variant="primary">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
