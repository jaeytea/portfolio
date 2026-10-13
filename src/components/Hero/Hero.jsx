import HeroArt from "./HeroArt";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Hero.css";

const RESUME_URL = `${import.meta.env.BASE_URL}Jagriti_Tripathi_SoftwareEngineer_Resume.pdf`;

const LINKS = [
  { label: "GitHub", href: "https://github.com/jaeytea", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jaagritiiii",
    external: true,
  },
  { label: "Email", href: "mailto:jaagritiwork@gmail.com" },
  { label: "Resume", href: RESUME_URL, external: true },
];

export default function Hero() {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <div
      ref={revealRef}
      className={`hero-reveal ${isVisible ? "hero-reveal--visible" : ""}`}
    >
      <section className="hero" id="home">
        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">
              Hello.
              <br />
              I'm Jagriti.
            </h1>

            <div className="hero__bio">
              <p>
                Software Engineer focused on building{" "}
                <strong>production backend systems</strong>,{" "}
                <strong>RESTful APIs</strong>, and{" "}
                <strong>end-to-end features</strong>, and I have also
                side-quested with <strong>frontend</strong>,{" "}
                <strong>Generative AI</strong>, and{" "}
                <strong>DevOps/Observability</strong>.
              </p>
              <p>
                I like working on features bottom-up from planning → development
                → deployment, and working through what comes after — performance
                issues, production bugs, and everything in between.
              </p>
              <p>
                Currently working with <strong>Java / Spring Boot</strong>, with
                experience across databases, messaging, queues, distributed
                systems, and observability.
              </p>
            </div>

            <div className="hero__links">
              {LINKS.map(({ label, href, external }) => (
                <a
                  key={label}
                  className="btn"
                  href={href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <HeroArt className="hero__art" />
        </div>
      </section>
    </div>
  );
}
