import { Link } from 'react-router-dom'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { academyInfo } from '../data/content'
import SectionHeading from '../components/SectionHeading'

const items = [
  { icon: Phone, label: 'Phone', value: academyInfo.phone },
  { icon: Mail, label: 'Email', value: academyInfo.email },
  { icon: MapPin, label: 'Address', value: academyInfo.address },
  { icon: Clock3, label: 'Opening Hours', value: academyInfo.hours },
]

export default function ContactPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your learning path"
          description="Reach out for course guidance, enrollment questions, or general information. Contact details will be updated as the academy finalizes its public channels."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-border p-5">
              <Icon size={18} className="text-blue" aria-hidden="true" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold text-navy">{value}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-md border border-border px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-surface"
        >
          Go to contact page
        </Link>
      </div>
    </section>
  )
}
