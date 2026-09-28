import { process } from "../data/content.js";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display wide max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          How a project runs
        </h2>

        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
          {process.map((step, i) => (
            <li key={step.title} className="relative md:border-l md:border-ink/20 md:px-6 first:md:border-l-0 first:md:pl-0">
              <span className="font-display condensed text-6xl font-light text-verdigris">{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-graphite">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
