import { useMemo, useState } from 'react'
import { courses } from '../data/courses'

export function useCourseFilter(initialCategory = '', initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState(initialCategory)

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return courses.filter((course) => {
      const matchesCategory = !category || course.category === category
      const matchesQuery =
        !normalizedQuery ||
        course.name.toLowerCase().includes(normalizedQuery) ||
        course.shortDescription.toLowerCase().includes(normalizedQuery) ||
        course.category.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const clearFilters = () => {
    setQuery('')
    setCategory('')
  }

  const hasActiveFilters = Boolean(query.trim() || category)

  return {
    query,
    setQuery,
    category,
    setCategory,
    filteredCourses,
    clearFilters,
    hasActiveFilters,
    totalCount: courses.length,
  }
}
