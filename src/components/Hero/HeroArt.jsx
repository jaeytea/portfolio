import { useMemo } from "react";

/**
 * HeroArt — pixel-art retro computer with a smiling face.
 * 38x38 grid, 5 greys. Drawn as merged SVG rects (crisp at any size).
 *
 * Props:
 *   size      CSS width (number = px, or any CSS length). Default "100%"
 *   animated  blink every few seconds (respects prefers-reduced-motion). Default true
 *   title     accessible label. Default "Smiling retro computer"
 *   className passed to the <svg>
 */

const PALETTE = {
  k: "#000000", // outline
  d: "#545454", // shadow
  m: "#b4b4b4", // mid
  l: "#d9d9d9", // screen
  w: "#ffffff", // highlight
};

// "." = transparent
const GRID = [
  "...........ddddddddddddddddddddd......",
  "..........dwmmmmmmmmmmmmmmmmmmmdk.....",
  ".........dwmmmmmmmmmmmmmmmmmmmmdk.....",
  "........dwwwwwwwwwwwwwwwwwwwwmddk.....",
  ".......dwwwwwwwwwwwwwwwwwwwwmmddk.....",
  ".......dwmmmmmmmmmmmmmmmmmmmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllwlllllllllllllmmdddk.....",
  ".......dwmllwwwllllllllllllmmdddk.....",
  ".......dwmlllwlllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmlllllllllllllllllmmdddk.....",
  ".......dwmmmmmmmmmmmmmmmmmmmmdddk.....",
  ".......dwmmmmmmmmmmmmmmmmmmmmdddkddd..",
  ".......dwmmmmmmmmmmmmmmmmmmmmdddkddmk.",
  ".......ddddddddddddddddddddddddkddmdk.",
  ".......kkkkkkkkkkkkkkkkkkkkkkkkddmddk.",
  "......ddddddddddddddddddddddddddmdddk.",
  "......dwwwwwwwwwwwwmmmmmmmmmwwwwkdddk.",
  "......dwmmmmmmmmmmmmmmmmmmmmmmmmkdddk.",
  "......dwmmmmmmmmmmmmmmmmmmmmmmmmkdddk.",
  "......dwmmmmmmmmmmmmmmmmmmmmmmmmkdddk.",
  "......dwmmmmmmmmmmmmmmmkkkkkkkddddddd.",
  ".....dddddddddddddddddddddddddwwwddmmk",
  "....dwmkdwmkdwkdwmkdwkdwmkdddddddddddk",
  "...dwmkdwmkdwkdwmkdwkdwmkddmmmmmmmmddk",
  "..dwmkdwmkdwkdwmkdwkdwmkdmmmwwwmmmdddk",
  ".dmmmmmmmmmmmmmmmmmmmmmmdmmwwwmmmdddk.",
  "dmmmmmmmmmmmmmmmmmmmmmmmdmmwmmmmdddk..",
  "ddddddddddddddddddddddddddmmmmddddk...",
  "dkkkkkkkkkkkkkkkkkkkkkkkddddddddkk....",
  ".........................kkkkkkk......",
];

export default function HeroArt({
  size = "100%",
  animated = true,
  title = "Smiling retro computer",
  className,
}) {
  // Merge horizontal runs of the same colour into single rects.
  const rects = useMemo(() => {
    const out = [];
    GRID.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        if (ch === ".") {
          x++;
          continue;
        }
        let end = x;
        while (end + 1 < row.length && row[end + 1] === ch) end++;
        out.push({ x, y, w: end - x + 1, fill: PALETTE[ch] });
        x = end + 1;
      }
    });
    return out;
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 38 38"
      width={size}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
      style={{ display: "block", maxWidth: "100%", height: "auto" }}
    >
      <title>{title}</title>
      <style>{`
        .ha-eye { transform-box: fill-box; transform-origin: center; }
        @media (prefers-reduced-motion: no-preference) {
          .ha-blink .ha-eye { animation: ha-blink 5s infinite; }
        }
        @keyframes ha-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.08); }
        }
      `}</style>

      {/* pixel body */}
      <g>
        {rects.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={r.y}
            width={r.w}
            height="1.02"
            fill={r.fill}
          />
        ))}
      </g>

      {/* face — finer than the pixel grid, so drawn as smooth shapes */}
      <g
        className={animated ? "ha-blink" : undefined}
        shapeRendering="geometricPrecision"
      >
        {[
          { cx: 16.53, px: 16.6, hx: 16.85 },
          { cx: 21.46, px: 21.38, hx: 21.22 },
        ].map((e, i) => (
          <g className="ha-eye" key={i}>
            <ellipse cx={e.cx} cy="12.48" rx="0.875" ry="1.59" fill="#fff" />
            <ellipse cx={e.px} cy="12.68" rx="0.64" ry="1.07" fill="#000" />
            <ellipse cx={e.hx} cy="12.25" rx="0.24" ry="0.4" fill="#fff" />
          </g>
        ))}
        <path
          d="M18.2 14.2 Q19.15 16.1 20.1 14.2"
          fill="none"
          stroke="#000"
          strokeWidth="0.3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
