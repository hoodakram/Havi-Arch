import { brand } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <h2 className="font-display wide text-4xl font-bold tracking-tight md:text-6xl">Start a project</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-graphite">
            Reach out with a few details about your site and brief — we reply within two working days to arrange a first meeting.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <dl className="space-y-8">
            <div className="border-b border-ink/30 pb-6">
              <dt className="text-sm text-graphite">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${brand.email}`} className="text-2xl transition-colors hover:text-verdigris">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div className="border-b border-ink/30 pb-6">
              <dt className="text-sm text-graphite">Phone</dt>
              <dd className="mt-2 text-2xl">{brand.phone}</dd>
            </div>
            <div className="border-b border-ink/30 pb-6">
              <dt className="text-sm text-graphite">Studio</dt>
              <dd className="mt-2 text-2xl">{brand.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}