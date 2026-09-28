import { brand, navLinks } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-concrete">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <p className="font-display wide text-3xl font-bold">{brand.name}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-concrete/70">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-concrete">{l.label}</a></li>
            ))}
            <li><a href="#contact" className="hover:text-concrete">Contact</a></li>
          </ul>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-concrete/15 pt-6 text-xs text-concrete/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <a href="#top" className="hover:text-concrete">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
