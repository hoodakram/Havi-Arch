import { useEffect, useState } from "react";
import { brand, navLinks } from "../data/content.js";
import { useTheme } from "../hooks/useTheme.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-concrete/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display wide text-lg font-bold tracking-tight">
          {brand.name}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-graphite transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-ink px-5 py-2.5 text-sm font-medium text-concrete transition-colors hover:bg-verdigris"
            >
              Start a project
            </a>
          </li>
          <li>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            className="relative h-10 w-10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute left-2 right-2 h-0.5 bg-ink transition-transform ${open ? "top-1/2 rotate-45" : "top-3.5"}`} />
            <span className={`absolute left-2 right-2 h-0.5 bg-ink transition-transform ${open ? "top-1/2 -rotate-45" : "bottom-3.5"}`} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-ink/10 px-5 pb-6 md:hidden">
          {[...navLinks, { label: "Start a project", href: "#contact" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-4 font-display text-2xl font-semibold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
