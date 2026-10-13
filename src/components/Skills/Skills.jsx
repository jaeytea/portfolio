import Section from "../Section/Section";
import WindowCard from "../WindowCard/WindowCard";
import { SKILLS } from "../../data/skills";
import "./Skills.css";

const toFilename = (category) =>
  `${category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.json`;

export default function Skills() {
  return (
    <Section id="skills" title="Skills" dotted>
      <div className="skills__grid">
        {SKILLS.map(({ category, items }) => (
          <WindowCard key={category} title={toFilename(category)}>
            <h3 className="skills__heading">{category}</h3>
            <ul className="skills__chips">
              {items.map(({ name, icon }) => (
                <li className="skill-chip" key={name}>
                  <span className="skill-chip__icon" aria-hidden="true">
                    {icon}
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </WindowCard>
        ))}
      </div>
    </Section>
  );
}
