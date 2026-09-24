import { useEffect, useRef } from "react";

// Faint 0/1 streams drifting UP the screen. Speed picks up while the user scrolls.
const FONT_PX = 15;
const COL_WIDTH = 20; // px between columns
const TRAIL_MIN = 15;
const TRAIL_MAX = 30;
const BASE_SPEED = 38; // px/sec at rest
const SCROLL_GAIN = 0.35; // how much scroll velocity is added to the speed
const MAX_BOOST = 420; // px/sec cap on the scroll boost
const MAX_ALPHA = 0.22; // keep low so text stays readable

const rand = (min, max) => min + Math.random() * (max - min);
const bit = () => (Math.random() < 0.5 ? "0" : "1");

export default function BinaryRain({ density = 0.65 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Theme vars live on <body> (body.light overrides them), so read from body and
    // re-read whenever the theme class changes.
    const readColor = () =>
      getComputedStyle(document.body).getPropertyValue("--green").trim() ||
      "#39d353";
    let color = readColor();
    const themeObserver = new MutationObserver(() => {
      color = readColor();
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let w = 0;
    let h = 0;
    let streams = [];
    let raf = 0;
    let last = performance.now();
    let scrollV = 0; // smoothed scroll speed, px/sec
    let lastY = window.scrollY;
    let lastT = last;

    const makeStream = (x) => {
      const len = Math.floor(rand(TRAIL_MIN, TRAIL_MAX));
      return {
        x,
        len,
        y: rand(0, h), // head position; it moves up, the trail sits below it
        speed: rand(0.6, 1.4),
        chars: Array.from({ length: len }, bit),
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (const s of streams) {
        for (let i = 0; i < s.len; i++) {
          const y = s.y + i * FONT_PX;
          if (y < -FONT_PX || y > h) continue;
          ctx.globalAlpha = MAX_ALPHA * (1 - i / s.len); // head brightest, tail fades
          ctx.fillText(s.chars[i], s.x, y);
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newW = window.innerWidth;
      const widthChanged = newW !== w;
      w = newW;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_PX}px "JetBrains Mono", "Fira Code", monospace`;
      ctx.textBaseline = "top";

      // Mobile address bars change innerHeight while scrolling; only rebuild on width change.
      if (widthChanged || streams.length === 0) {
        streams = [];
        const cols = Math.floor(w / COL_WIDTH);
        for (let i = 0; i < cols; i++) {
          if (Math.random() < density)
            streams.push(makeStream(i * COL_WIDTH + 4));
        }
      }
      if (reduceMotion) draw();
    };

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max((now - lastT) / 1000, 0.008);
      const v = Math.abs(window.scrollY - lastY) / dt;
      scrollV = scrollV * 0.6 + v * 0.4;
      lastY = window.scrollY;
      lastT = now;
    };

    const frame = (now) => {
      const dt = Math.min(now - last, 50) / 1000; // clamp so a background tab doesn't cause a jump
      last = now;
      scrollV *= Math.exp(-dt * 4); // ease back to resting speed
      const boost = Math.min(scrollV * SCROLL_GAIN, MAX_BOOST);

      for (const s of streams) {
        s.y -= (BASE_SPEED + boost) * s.speed * dt;
        if (Math.random() < 0.08)
          s.chars[Math.floor(Math.random() * s.len)] = bit();
        if (s.y + s.len * FONT_PX < 0) s.y = h + rand(0, h * 0.5); // off the top: respawn below
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    />
  );
}
