import { useLayoutEffect, useRef, useState } from "react";

export function useFitWordmark({
  fillRatio = 0.86,
  minPx = 56,
  maxVhRatio = 0.4,
} = {}) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [fontSize, setFontSize] = useState(minPx);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const fitWordmark = () => {
      const words = wordRefs.current.filter(Boolean);
      if (!words.length) return;

      const measuredFontSize = Number.parseFloat(
        window.getComputedStyle(words[0]).fontSize,
      );
      const totalWordWidth = words.reduce(
        (total, word) => total + word.getBoundingClientRect().width,
        0,
      );
      const widthAtOnePixel = totalWordWidth / measuredFontSize;
      const availableWidth = container.clientWidth * fillRatio;
      const maxFontSize = window.innerHeight * maxVhRatio;
      const nextFontSize = Math.max(
        minPx,
        Math.min(availableWidth / widthAtOnePixel, maxFontSize),
      );

      setFontSize((current) =>
        Math.abs(current - nextFontSize) < 0.5 ? current : nextFontSize,
      );
    };

    const observer = new ResizeObserver(fitWordmark);
    observer.observe(container);
    window.addEventListener("resize", fitWordmark);
    fitWordmark();
    document.fonts?.ready.then(fitWordmark);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fitWordmark);
    };
  }, [fillRatio, maxVhRatio, minPx]);

  return { containerRef, wordRefs, fontSize };
}
