export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatCourseCount(count) {
  return `${count} course${count === 1 ? '' : 's'}`
}
