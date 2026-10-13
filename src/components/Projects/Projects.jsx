import Section from "../Section/Section";
import WindowCard from "../WindowCard/WindowCard";
import { PROJECTS } from "../../data/projects";
import "./Projects.css";

const toFilename = (name) =>
  `${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.html`;

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <WindowCard
            key={p.name}
            as="a"
            href={p.link}
            target="_blank"
            rel="noreferrer"
            title={toFilename(p.name)}
            className="project"
          >
            <h3 className="project__name">
              <span className="project__icon" aria-hidden="true">
                {p.icon}
              </span>
              {p.name}
            </h3>
            <p className="project__desc">{p.desc}</p>
            <ul className="project__stack">
              {p.stack.map((tech) => (
                <li className="project__tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            {/* span, not <a>: the whole card is already the link */}
            <span className="btn project__cta">
              {p.linkType === "github" ? "View on GitHub ↗" : "Open live demo ↗"}
            </span>
          </WindowCard>
        ))}
      </div>
    </Section>
  );
}
