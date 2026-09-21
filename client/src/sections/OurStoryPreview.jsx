import { useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { useImageReveal, useScrollReveal } from '../utils/motion'

export default function OurStoryPreview() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useScrollReveal(sectionRef)
  useImageReveal(imgRef)

  return (
    <section ref={sectionRef} className="section-pad bg-surface">
      <div className="container-sky grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Bridging academic learning and practical professional skills"
            description="Skytech Skills Academy was shaped around a clear need: help learners move from classroom knowledge to tools and communication skills used in real professional environments."
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base lg:text-[17px]">
            Across technology, engineering, architecture, design, digital skills, and English
            communication, our story is about practical progress — structured, human, and
            career-focused.
          </p>
          <Button to="/our-story" variant="secondary" className="mt-8 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Read our story
          </Button>
        </div>
        <div
          ref={imgRef}
          className="relative min-h-[280px] overflow-hidden rounded-xl shadow-sm sm:min-h-[380px] lg:min-h-[420px]"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Learners collaborating in a professional training environment"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
            width={600}
            height={420}
          />
        </div>
      </div>
    </section>
  )
}
