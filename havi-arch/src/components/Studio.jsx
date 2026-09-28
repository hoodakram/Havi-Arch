import { studio } from "../data/content.js";

export default function Studio() {
  return (
    <section id="studio" className="scroll-mt-16 bg-slab py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <img src={studio.image} alt={studio.imageAlt} loading="lazy" className="aspect-4/5 w-full object-cover" />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <h2 className="font-display wide text-4xl font-bold tracking-tight md:text-5xl">The studio</h2>
          {studio.text.map((t) => (
            <p key={t.slice(0, 20)} className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
              {t}
            </p>
          ))}
          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/20 pt-8 sm:grid-cols-3">
            {studio.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-graphite">{f.label}</dt>
                <dd className="mt-1 font-display text-xl font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
