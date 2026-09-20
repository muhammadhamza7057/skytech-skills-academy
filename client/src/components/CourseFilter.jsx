import { categories } from '../data/courses'
import SearchBar from './SearchBar'

export default function CourseFilter({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  onClear,
  hasActiveFilters,
  resultCount,
  totalCount,
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <SearchBar value={query} onChange={onQueryChange} />
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted">
              Category
            </span>
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full rounded-md border border-border bg-white px-3 py-3 text-sm text-ink focus:border-blue"
            >
              <option value="">All categories</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={onClear}
              className="rounded-md border border-border px-4 py-3 text-sm font-bold text-navy transition-colors hover:bg-surface"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing <span className="font-semibold text-ink">{resultCount}</span> of{' '}
        <span className="font-semibold text-ink">{totalCount}</span> courses
      </p>
    </div>
  )
}
