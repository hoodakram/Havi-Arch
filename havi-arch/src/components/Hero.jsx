import { hero } from "../data/content.js";
import { useFitWordmark } from "../hooks/useFitWordmark.js";
import { useParallax } from "../hooks/useParallax.js";

export default function Hero() {
  const words = ["HAVI", "ARCH"];
  const { containerRef, wordRefs, fontSize } = useFitWordmark({
    fillRatio: 0.86,
    minPx: 56,
    maxVhRatio: 0.4,
  });
  const imageRef = useParallax(0.12);

  return (
    <section id="top" className="blueprint relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-line hero-line-1" />
        <div className="hero-line hero-line-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="enter font-display text-3xl font-medium leading-[1.1] tracking-tight md:col-span-7 md:text-5xl" style={{ animationDelay: "60ms" }}>
            {hero.statement}
          </h1>
          <div className="md:col-span-4 md:col-start-9">
            <p className="enter max-w-sm leading-relaxed text-graphite" style={{ animationDelay: "160ms" }}>
              {hero.sub}
            </p>
            <div className="enter mt-6 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-concrete transition-all hover:-translate-y-0.5 hover:bg-verdigris"
              >
                See our work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="border border-ink px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-concrete"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wordmark — the signature element */}
      <div ref={containerRef} className="relative z-10 mt-14 overflow-hidden px-3 md:mt-20 md:px-6" aria-hidden="true">
        <p
          className="font-display wide flex items-baseline justify-between whitespace-nowrap font-extrabold leading-[0.8] tracking-tighter"
          style={{ fontSize }}
        >
          {words.map((w, i) => (
            <span key={w} className="overflow-hidden">
              <span
                ref={(el) => (wordRefs.current[i] = el)}
                className="rise inline-block"
                style={{ animationDelay: `${380 + i * 140}ms` }}
              >
                {w}
              </span>
            </span>
          ))}
        </p>
      </div>

      <figure className="relative z-10 mt-2 overflow-hidden">
        <div className="h-[55vh] w-full overflow-hidden md:h-[80vh]">
          <img
            ref={imageRef}
            src={hero.image}
            alt={hero.imageAlt}
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/25 via-transparent to-transparent" />

        <figcaption className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center gap-3 text-xs text-concrete md:inset-x-10">
          <span className="draft-tick h-3 w-px bg-concrete" style={{ animationDelay: "700ms" }} />
          <span className="draft-line h-px flex-1 origin-left bg-concrete/70" style={{ animationDelay: "760ms" }} />
          <span className="enter" style={{ animationDelay: "820ms" }}>
            Architecture, interiors and renovation
          </span>
          <span className="draft-line h-px flex-1 origin-right bg-concrete/70" style={{ animationDelay: "760ms" }} />
          <span className="draft-tick h-3 w-px bg-concrete" style={{ animationDelay: "700ms" }} />
        </figcaption>
      </figure>
    </section>
  );
}