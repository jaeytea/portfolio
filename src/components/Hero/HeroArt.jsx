// Original black-and-white mascot: a retro monitor with a one-eyed smile.
export default function HeroArt({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 290"
      role="img"
      aria-label="Retro computer with a smiling screen"
      fill="none"
      stroke="#000"
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* hard shadow */}
      <rect x="60" y="36" width="220" height="190" rx="18" fill="#000" stroke="none" />
      <rect x="44" y="246" width="240" height="26" fill="#000" stroke="none" />

      {/* stand + base */}
      <rect x="112" y="220" width="96" height="26" fill="#c8c8c8" />
      <rect x="40" y="242" width="240" height="26" fill="#fff" />

      {/* monitor */}
      <rect x="52" y="28" width="220" height="190" rx="18" fill="#fff" />
      <rect x="72" y="48" width="180" height="150" rx="10" fill="#000" />

      {/* face */}
      <circle cx="162" cy="102" r="24" fill="#fff" stroke="none" />
      <circle cx="168" cy="99" r="10" fill="#000" stroke="none" />
      <path d="M112 146 Q162 184 212 146" stroke="#fff" strokeWidth="7" />

      {/* floating bits */}
      <circle cx="26" cy="60" r="7" fill="#fff" />
      <circle cx="294" cy="40" r="5" fill="#fff" />
      <circle cx="300" cy="120" r="9" fill="#c8c8c8" />
    </svg>
  );
}
