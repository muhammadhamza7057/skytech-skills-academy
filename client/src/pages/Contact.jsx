import { useState } from 'react'
import { CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SectionHeading from '../components/SectionHeading'
import { academyInfo } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { validateContact } from '../utils/validation'

const inputClass =
  'w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-blue'

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
      'Contact Skytech Skills Academy for course guidance and enrollment questions. Placeholder contact details are shown until official channels are published.',
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
    { icon: Phone, label: 'Phone', value: academyInfo.phone },
    { icon: MessageCircle, label: 'WhatsApp', value: academyInfo.whatsapp },
    { icon: Mail, label: 'Email', value: academyInfo.email },
    { icon: MapPin, label: 'Address', value: academyInfo.address },
    { icon: Clock3, label: 'Opening Hours', value: academyInfo.hours },
  ]

  return (
    <div className="bg-surface">
      <div className="container-sky section-pad">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Send a message for course information or enrollment guidance. Official contact details will be published here when available."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-border bg-white p-5">
                <div className="flex items-start gap-3">
                  <Icon size={18} className="mt-0.5 text-blue" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </aside>

          <div className="rounded-xl border border-border bg-white p-5 sm:p-8">
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
                      demonstration and has not been connected to a backend yet.
                    </p>
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
                    className={`${inputClass} ${errors.name ? 'border-accent' : ''}`}
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
                      className={`${inputClass} ${errors.email ? 'border-accent' : ''}`}
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
                      className={`${inputClass} ${errors.phone ? 'border-accent' : ''}`}
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
                    className={`${inputClass} ${errors.subject ? 'border-accent' : ''}`}
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
                    className={`${inputClass} ${errors.message ? 'border-accent' : ''}`}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                  {errors.message ? (
                    <span className="mt-1 block text-xs text-accent" role="alert">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                <button
                  type="submit"
                  className="inline-flex rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
