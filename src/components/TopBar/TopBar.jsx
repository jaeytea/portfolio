import "./TopBar.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub ↗", href: "https://github.com/jaeytea", external: true },
];

export default function TopBar() {
  return (
    <header className="topbar">
      <a className="topbar__logo" href="#home" aria-label="Back to top">
        JT
      </a>
      <nav className="topbar__nav" aria-label="Primary">
        {LINKS.map(({ label, href, external }) => (
          <a
            key={label}
            className="topbar__link"
            href={href}
            {...(external && { target: "_blank", rel: "noreferrer" })}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
