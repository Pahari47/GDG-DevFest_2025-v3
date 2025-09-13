import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PixelLoader({
  gridSize = 12,
  pixelColor = "#000000",
  animationStepDuration = 1.2,
  duration = 1500,
  onFinish,
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel-block", "absolute", "hidden");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }

    const pixels = pixelGridEl.querySelectorAll(".pixel-block");
    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    const startTimer = setTimeout(() => {
      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      });

      const endTimer = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
        if (onFinish) onFinish();
      }, duration);

      return () => clearTimeout(endTimer);
    }, 500);

    return () => clearTimeout(startTimer);
  }, [gridSize, pixelColor, animationStepDuration, duration, onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50 overflow-hidden"
    >
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Responsive Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold sujoy text-white text-center px-4">
        Devfest 2025
      </h1>
    </div>
  );
}
