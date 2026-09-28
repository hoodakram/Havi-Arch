import { useMemo, useState } from "react";
import { projects } from "../data/content.js";

const filters = ["All", "Residential", "Commercial", "Renovation"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.type === active)),
    [active]
  );

  return (
    <section id="work" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-ink pb-6 md:flex-row md:items-end">
          <h2 className="font-display wide text-4xl font-bold tracking-tight md:text-6xl">Selected work</h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`px-4 py-2 text-sm transition-colors ${
                  active === f ? "bg-ink text-concrete" : "text-graphite hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-12">
          {list.map((p, i) => {
            // Asymmetric rhythm: large, then offset pairs
            const layout =
              i % 3 === 0
                ? "md:col-span-12"
                : i % 3 === 1
                ? "md:col-span-7"
                : "md:col-span-5 md:mt-24";
            const ratio = i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]";
            return (
              <article key={p.name} className={`group ${layout}`}>
                <div className={`overflow-hidden bg-slab ${ratio}`}>
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold md:text-2xl">{p.name}</h3>
                  <span className="text-sm text-graphite">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-graphite">
                  {p.type}, {p.place}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
