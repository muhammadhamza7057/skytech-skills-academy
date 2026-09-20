import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  accent: 'btn-accent',
  blue: 'btn-blue',
  ghostLight: 'btn-ghost-light',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const classes = cn(variants[variant] || variants.primary, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href || as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
