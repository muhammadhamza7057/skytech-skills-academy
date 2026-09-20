import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SectionHeading from '../components/SectionHeading'
import { storyContent } from '../data/content'
import { usePageSEO } from '../hooks/usePageSEO'
import { cn } from '../utils/cn'

export default function OurStory() {
  const [lang, setLang] = useState('en')
  const content = storyContent[lang]

  usePageSEO({
    title: 'Our Story',
    description:
      'Discover how Skytech Skills Academy bridges academic education and practical professional skills across technology, engineering, design, and English.',
    path: '/our-story',
  })

  return (
    <div className="bg-white">
      <div className="bg-surface">
        <div className="container-sky section-pad pb-10">
          <Breadcrumb
            items={[{ label: 'Home', to: '/' }, { label: 'Our Story' }]}
          />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Story"
              title="From academic knowledge to practical capability"
              description="A realistic story about closing the gap between education and the tools professionals use every day."
            />
            <div
              className="inline-flex rounded-md border border-border bg-white p-1"
              role="group"
              aria-label="Story language"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={cn(
                  'rounded px-4 py-2 text-sm font-bold transition-colors',
                  lang === 'en' ? 'bg-navy text-white' : 'text-navy hover:bg-surface'
                )}
                aria-pressed={lang === 'en'}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('ur')}
                className={cn(
                  'rounded px-4 py-2 text-sm font-bold transition-colors',
                  lang === 'ur' ? 'bg-navy text-white' : 'text-navy hover:bg-surface'
                )}
                aria-pressed={lang === 'ur'}
              >
                Read in Urdu
              </button>
            </div>
          </div>
        </div>
      </div>

      <article className="container-sky section-pad pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Professional learning environment with modern workspace"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div
            lang={lang === 'ur' ? 'ur' : 'en'}
            dir={lang === 'ur' ? 'rtl' : 'ltr'}
            className="max-w-2xl"
          >
            <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              {content.title}
            </h1>
            <div className="mt-6 space-y-5">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Technology',
            'Engineering',
            'Architecture',
            'Design',
            'Digital Skills',
            'English Communication',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-bold text-navy"
            >
              {item}
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
