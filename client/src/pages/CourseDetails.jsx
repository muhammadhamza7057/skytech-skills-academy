import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import FAQ from '../components/FAQ'
import { COURSE_FALLBACK_IMAGE, getCourseBySlug } from '../data/courses'
import { usePageSEO } from '../hooks/usePageSEO'
import { useScrollReveal, useStaggerCards } from '../utils/motion'

export default function CourseDetails() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)
  const [imgSrc, setImgSrc] = useState(course?.image)

  const heroRef = useRef(null)
  const metaRef = useRef(null)
  const detailsRef = useRef(null)
  const certFaqRef = useRef(null)

  useScrollReveal(heroRef)
  useStaggerCards(metaRef, '.stagger-item')
  useScrollReveal(detailsRef)
  useScrollReveal(certFaqRef)

  usePageSEO({
    title: course ? course.name : 'Course Not Found',
    description: course
      ? course.shortDescription
      : 'The requested course could not be found at Skytech Skills Academy.',
    path: course ? `/course/${course.slug}` : '/courses',
    image: course?.image,
  })

  if (!course) {
    return (
      <div className="container-sky section-pad text-center">
        <h1 className="font-display text-3xl font-semibold text-navy">
          Course not found
        </h1>
        <p className="mt-3 text-muted">
          The course you are looking for does not exist or may have been moved.
        </p>
        <Link to="/courses" className="btn-primary mt-6">
          Back to Courses
        </Link>
      </div>
    )
  }

  const meta = [
    { label: 'Course Fee', value: course.fee },
    { label: 'Class Mode', value: course.mode },
    ...(course.includesSummary
      ? [{ label: 'Includes', value: course.includesSummary }]
      : [{ label: 'Level', value: course.level }]),
    { label: 'Duration', value: course.duration },
  ]

  return (
    <div className="bg-white">
      <div className="bg-surface">
        <div ref={heroRef} className="container-sky section-pad pb-10">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Courses', to: '/courses' },
              { label: course.name },
            ]}
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
                {course.category}
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                {course.name}
              </h1>

              {course.includesSummary && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue border border-blue/20">
                  <span className="text-muted uppercase text-[11px] tracking-wider">Includes:</span>
                  <span className="text-navy font-bold">{course.includesSummary}</span>
                </div>
              )}

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
                {course.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={`/enroll?course=${course.slug}`} variant="primary">
                  Enroll in This Course
                </Button>
                <Button to="/courses" variant="outline">
                  Back to Courses
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-xs bg-surface">
              <img
                src={imgSrc || COURSE_FALLBACK_IMAGE}
                alt={`${course.name} course cover`}
                onError={() => setImgSrc(COURSE_FALLBACK_IMAGE)}
                loading="eager"
                decoding="async"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-sky section-pad pt-10">
        <div ref={metaRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="stagger-item rounded-xl border border-border p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-bold text-navy sm:text-base">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              What You Will Learn
            </h2>
            <ul className="mt-4 space-y-3">
              {course.whatYouLearn.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Course Outline
            </h2>
            <ol className="mt-4 space-y-3">
              {course.courseOutline.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface text-xs font-bold text-navy">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Requirements
            </h2>
            <ul className="mt-4 space-y-3">
              {course.requirements.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Target Audience
            </h2>
            <ul className="mt-4 space-y-3">
              {course.targetAudience.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Certificate Information
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {course.certificateInfo}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-navy">FAQs</h2>
          <div className="mt-4 max-w-3xl">
            <FAQ items={course.faqs} />
          </div>
        </section>
      </div>
    </div>
  )
}
