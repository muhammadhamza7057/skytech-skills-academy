import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import CourseCard from '../components/CourseCard'
import CourseFilter from '../components/CourseFilter'
import SectionHeading from '../components/SectionHeading'
import { useCourseFilter } from '../hooks/useCourseFilter'
import { usePageSEO } from '../hooks/usePageSEO'
import { useStaggerCards } from '../utils/motion'

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category') || ''
  const urlQuery = searchParams.get('q') || ''

  const {
    query,
    setQuery,
    category,
    setCategory,
    filteredCourses,
    clearFilters,
    hasActiveFilters,
    totalCount,
  } = useCourseFilter(urlCategory, urlQuery)

  const gridRef = useRef(null)
  useStaggerCards(gridRef, '.stagger-item', {}, [filteredCourses])

  usePageSEO({
    title: 'Courses',
    description:
      'Browse Skytech Skills Academy courses in engineering, architecture, web development, design, and English.',
    path: '/courses',
  })

  useEffect(() => {
    if (urlCategory !== category) setCategory(urlCategory)
    if (urlQuery !== query) setQuery(urlQuery)
    // Sync only when URL changes from navigation (e.g. category cards)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCategory, urlQuery])

  useEffect(() => {
    const params = {}
    if (category) params.category = category
    if (query.trim()) params.q = query.trim()
    const next = new URLSearchParams(params).toString()
    const current = searchParams.toString()
    if (next !== current) {
      setSearchParams(params, { replace: true })
    }
  }, [category, query, searchParams, setSearchParams])

  return (
    <div className="bg-surface">
      <div className="container-sky section-pad">
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Courses' },
          ]}
        />
        <SectionHeading
          eyebrow="Courses"
          title="Find the right course for your goals"
          description="Search and filter our practical short courses across technology, engineering, design, and English."
        />
        <div className="mt-8">
          <CourseFilter
            query={query}
            onQueryChange={setQuery}
            category={category}
            onCategoryChange={setCategory}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
            resultCount={filteredCourses.length}
            totalCount={totalCount}
          />
        </div>
        {filteredCourses.length ? (
          <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-border bg-white p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-navy">
              No courses found
            </h2>
            <p className="mt-2 text-sm text-muted">
              Try a different search term or clear your filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
