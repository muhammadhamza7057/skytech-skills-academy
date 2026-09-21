import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { webItFeatures } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import { useImageReveal, useScrollReveal, useStaggerCards } from '../utils/motion'

export default function WebIT() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const listRef = useRef(null)

  useScrollReveal(sectionRef)
  useImageReveal(imgRef)
  useStaggerCards(listRef, 'li')

  return (
    <section ref={sectionRef} className="section-pad bg-surface">
      <div className="container-sky grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Digital Skills & Web"
            title="Digital skills for modern work and freelancing"
            description="From responsive websites to full-stack MERN applications, learn practical development and digital skills with a career-focused approach."
          />
          <ul ref={listRef} className="mt-8 grid grid-cols-2 gap-3">
            {webItFeatures.map((item) => (
              <li
                key={item}
                className="stagger-item rounded-lg border border-border bg-white px-4 py-3.5 text-sm font-semibold text-navy sm:text-[15px] transition-transform duration-200 hover:-translate-y-0.5 hover:border-blue/30 shadow-xs"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link to="/courses?category=Web%20%26%20IT" className="btn-secondary mt-8">
            Explore web & IT courses
          </Link>
        </div>
        <div
          ref={imgRef}
          className="relative order-1 min-h-[280px] overflow-hidden rounded-xl sm:min-h-[400px] lg:order-2 lg:min-h-[460px] shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
            alt="Developer working on web application code"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
            width={700}
            height={460}
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-navy/45 to-transparent" />
        </div>
      </div>
    </section>
  )
}
