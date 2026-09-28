import TopBar from "./TopBar";

export default function Hero({ mode, setMode }) {
  return (
    <>
      <TopBar mode={mode} setMode={setMode} />

      <div className="hero-reveal">
        <section className="hero" id="home">
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="term-btn term-close" />
              <div className="term-btn term-min" />
              <div className="term-btn term-max" />
              <span className="terminal-titlebar-text">bash — ~/jaeytea</span>
            </div>

            <div className="terminal-body">
              {/* whoami */}
              <div className="term-line">
                <span className="prompt">guest@jaeytea:~$</span>
                <span className="cmd">whoami</span>
              </div>
              <div className="term-line">
                <span className="hero-name">Jagriti Tripathi</span>
              </div>

              {/* blank line */}
              <div className="term-line" style={{ height: 10 }} />

              {/* cat about.txt */}
              <div className="term-line">
                <span className="prompt">guest@jaeytea:~$</span>
                <span className="cmd">cat</span>
                <span className="val">about.txt</span>
              </div>
              <div className="term-line">
                <div className="hero-bio">
                  <p>
                    Software Engineer focused on building
                    <span className="str">
                      {" "}
                      production backend systems
                    </span>, <span className="str"> RESTful APIs</span>, and{" "}
                    <span className="str"> end-to-end features</span>, and I
                    have also side-quested with{" "}
                    <span className="str">frontend</span>,{" "}
                    <span className="str"> Generative AI</span>, and{" "}
                    <span className="str"> DevOps/Observability</span>.
                    <br />I like working on features bottom-up from{" "}
                    <span className="success">
                      planning → development → deployment
                    </span>
                    , and working through what comes after — performance issues,
                    production bugs, and everything in between.
                    <br />
                    <br />
                    Currently working with{" "}
                    <span className="str">Java / Spring Boot</span>, with
                    experience across databases, messaging, queues, distributed
                    systems, and observability.
                  </p>
                </div>
              </div>

              <div className="term-line" style={{ height: 10 }} />

              {/* links */}
              <div className="term-line">
                <span className="prompt">guest@jaeytea:~$</span>
                <span className="cmd">ls</span>
                <span className="flag">-la</span>
                <span className="val">./links/</span>
              </div>
              <div className="term-line">
                <div className="hero-links">
                  <a
                    href="https://github.com/jaeytea"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link"
                  >
                    <span>⌥</span> github.com/jaeytea
                  </a>
                  <a
                    href="https://linkedin.com/in/jaagritiiii"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link"
                  >
                    <span>⌥</span> Linkedin
                  </a>
                  <a href="mailto:jaagritiwork@gmail.com" className="hero-link">
                    <span>@</span> jaagritiwork@gmail.com
                  </a>
                  <a
                    href="src/public/Jagriti_Tripathi_SoftwareEngineer_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link"
                  >
                    <span>↓</span> Resume
                  </a>
                </div>
              </div>

              {/* blank line */}
              <div className="term-line" style={{ height: 10 }} />

              {/* prompt waiting */}
              <div className="term-line">
                <span className="prompt">guest@jaeytea:~$</span>
                <span className="blink">█</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
