export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="card-surface card-hover flex h-full flex-col p-5 sm:p-6">
      {Icon ? (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-blue">
          <Icon size={20} aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="text-card-title">{title}</h3>
      <p className="text-card-desc mt-2.5">{description}</p>
    </article>
  )
}
