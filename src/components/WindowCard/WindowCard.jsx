import "./WindowCard.css";

/**
 * The template's signature "window": gray title bar, two hollow circles,
 * a fake filename as the title, 2px border and a hard offset shadow.
 *
 * <WindowCard title="about.html">...</WindowCard>
 * <WindowCard as="a" href="..." title="app.html">...</WindowCard>
 */
export default function WindowCard({
  title,
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag className={`window ${className}`.trim()} {...rest}>
      <div className="window__bar">
        <span className="window__dots" aria-hidden="true">
          <i />
          <i />
        </span>
        <span className="window__title">{title}</span>
      </div>
      <div className="window__body">{children}</div>
    </Tag>
  );
}
