import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search courses...' }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Search courses</span>
      <Search
        size={18}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-white py-3 pr-4 pl-10 text-sm text-ink placeholder:text-muted focus:border-blue"
      />
    </label>
  )
}
