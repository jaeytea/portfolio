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
              : Hello,
              <br />
              I'm Jagriti Tripathi..
            </h1>
            <br />
            <div className="hero__bio">
              <h4> $ -what-i-do.- ? </h4>
              <br />
              {/* im a swe w 2yo total exp developing reliable backend syst */}
              <p>
                I’m a Software Engineer who likes building things that actually
                work in production... from{" "}
                <strong>backend systems and REST APIs</strong> to figuring out
                why something is slow, broken, or just not working the way it
                should.
              </p>

              <p>
                I like owning features end-to-end, from figuring out the
                approach to development, deployment, and debugging whatever
                comes after. I’ve also worked across the stack, so I’m
                comfortable looking beyond just the backend when needed.
              </p>

              <p>
                My main stack is <strong>Java / Spring Boot</strong>, with
                experience in databases, messaging systems, distributed systems,
                and observability. Lately, I’ve also been exploring{" "}
                <strong>Python, basic ML and Generative AI</strong> to build
                things beyond the usual backend stuff.
              </p>
            </div>
            <br />
            <br />
            <br />

            <nav className="hero__quick-links" aria-label="Quick links">
              {/* <h2 className="hero__quick-links-title">Quick links</h2> */}
              <div className="hero__links">
                {LINKS.map(({ label, href, external }) => (
                  <a
                    key={label}
                    className="hero__link"
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <HeroArt className="hero__art" />
        </div>
      </section>
    </div>
  );
}
