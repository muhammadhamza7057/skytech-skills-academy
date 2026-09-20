import { academyInfo } from '../data/content'
import { WhatsAppIcon } from './BrandIcons'

export default function WhatsAppFloat() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 sm:right-6 sm:bottom-7">
      <a
        href={academyInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="pointer-events-auto group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/25 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue sm:h-14 sm:w-14"
        style={{ width: '3.35rem', height: '3.35rem' }}
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Chat with us on WhatsApp
        </span>
        <WhatsAppIcon size={26} />
      </a>
    </div>
  )
}
