import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-ink py-24 text-concrete md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="font-display wide text-4xl font-bold tracking-tight md:col-span-6 md:text-6xl">
            What we design
          </h2>
          <p className="max-w-md leading-relaxed text-concrete/70 md:col-span-5 md:col-start-8 md:self-end">
            One studio from first sketch to handover, so the building, interiors and details are
            thought through together.
          </p>
        </div>

        <div className="mt-16 border-t border-concrete/20">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid gap-4 border-b border-concrete/20 py-10 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-display text-3xl font-semibold md:col-span-4 md:text-4xl">{s.title}</h3>
              <p className="max-w-md leading-relaxed text-concrete/80 md:col-span-4">{s.text}</p>
              <ul className="space-y-2 text-sm text-verdigris-light md:col-span-4">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-verdigris-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
