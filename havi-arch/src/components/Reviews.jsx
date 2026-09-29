import { useEffect, useState } from "react";
import { reviews } from "../data/content.js";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reviews.length < 2) return undefined;

    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="scroll-mt-16 border-t border-ink/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-ink pb-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-verdigris">
              Thoughtful design, clear communication, care at every stage
            </p>
            <h2 className="font-display wide text-4xl font-bold tracking-tight md:text-6xl">
              Client words
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-graphite">
            A good project is built on trust, clear conversations and care at every stage.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <article
                key={`${review.project}-${index}`}
                className="min-w-full px-1 py-8 md:py-10"
                aria-hidden={current !== index}
              >
                <div className="mx-auto max-w-4xl">
                  <blockquote className="font-display text-2xl font-medium leading-relaxed md:text-4xl">
                    “{review.quote}”
                  </blockquote>
                  <div className="mt-8 flex flex-col gap-2 text-sm md:flex-row md:items-baseline md:justify-between">
                    <span className="font-semibold">{review.client}</span>
                    <span className="text-graphite">{review.project}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2" role="group" aria-label="Choose a review">
          {reviews.map((review, index) => (
            <button
              key={`${review.project}-${index}`}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              aria-pressed={current === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-verdigris" : "w-2 bg-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
