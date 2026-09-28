export default function WordmarkBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="grid-layer grid-layer--fine" />
      <div className="grid-layer grid-layer--bold" />
      <div className="scan-line" />

      <svg
        className="absolute inset-0 h-full w-full text-verdigris/50"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1">
          <path className="draw-line" pathLength="1" d="M0 120H1200" />
          <path className="draw-line" pathLength="1" d="M600 0V240" style={{ animationDelay: "180ms" }} />
          <rect className="draw-line" pathLength="1" x="370" y="20" width="460" height="200" style={{ animationDelay: "320ms" }} />
          <circle className="draw-line" pathLength="1" cx="600" cy="120" r="76" style={{ animationDelay: "460ms" }} />
          <path className="draw-line" pathLength="1" d="M600 44A76 76 0 0 1 676 120H600V44Z" style={{ animationDelay: "600ms" }} />
        </g>

        <g className="compass-spin compass-spin--a" transform="translate(86 48)" stroke="currentColor" strokeWidth="1.5">
          <circle r="20" />
          <path d="M0-28V28M-28 0H28M-19.8-19.8 19.8 19.8M19.8-19.8-19.8 19.8" />
          <circle r="3" fill="currentColor" />
        </g>
        <g className="compass-spin compass-spin--b" transform="translate(1114 192)" stroke="currentColor" strokeWidth="1.5">
          <circle r="20" />
          <path d="M0-28V28M-28 0H28M-19.8-19.8 19.8 19.8M19.8-19.8-19.8 19.8" />
          <circle r="3" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
