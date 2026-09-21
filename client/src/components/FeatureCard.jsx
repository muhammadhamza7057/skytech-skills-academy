export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="stagger-item card-surface flex h-full flex-col p-5 sm:p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md">
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
