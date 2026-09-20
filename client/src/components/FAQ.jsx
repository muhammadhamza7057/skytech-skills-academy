import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../utils/cn'

function FAQItem({ item, open, onToggle }) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy"
        >
          {item.question}
          <ChevronDown
            size={18}
            className={cn(
              'shrink-0 text-muted transition-transform',
              open && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-4 text-sm leading-relaxed text-muted"
      >
        {item.answer}
      </div>
    </div>
  )
}

export default function FAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!items.length) return null

  return (
    <div>
      {items.map((item, index) => (
        <FAQItem
          key={item.question}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
