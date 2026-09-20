import { Mail, MapPin, Phone } from 'lucide-react'
import { academyInfo } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { WhatsAppIcon } from '../components/BrandIcons'

const items = [
  {
    icon: Phone,
    label: 'Phone',
    value: academyInfo.phone,
    href: academyInfo.phoneHref,
  },
  {
    icon: WhatsAppIcon,
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
    label: 'Location',
    value: academyInfo.address,
    href: '/about#location',
  },
]

export default function ContactPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-sky">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your learning path"
          description="Call, WhatsApp, or visit us in Dargai for course guidance and enrollment support."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="card-surface card-hover p-5 sm:p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-blue">
                <Icon size={20} aria-hidden="true" />
              </span>
              <p className="mt-4 text-[12px] font-semibold tracking-[0.12em] text-muted uppercase">
                {label}
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-snug text-navy sm:text-base">
                {value}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
          <Button to="/contact" variant="secondary">
            Go to contact page
          </Button>
          <Button
            href={academyInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  )
}
