export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="h-full border-l-2 border-blue/30 pl-5">
      {Icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-surface text-blue">
          <Icon size={18} aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
    </article>
  )
}
