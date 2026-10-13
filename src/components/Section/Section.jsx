import "./Section.css";
import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Full-width band with a black rule on top and a centered container.
 * Alternate `dotted` to get the template's halftone / white rhythm.
 */
export default function Section({ id, title, dotted = false, children }) {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section
      id={id}
      ref={revealRef}
      className={`section section--reveal ${isVisible ? "section--visible" : ""} ${dotted ? "section--dotted" : ""}`.trim()}
    >
      <div className="section__inner">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
