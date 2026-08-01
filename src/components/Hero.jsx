import { useState } from "react";
import ToggleTheme from "./ToggleTheme";

export default function Hero({ mode, setMode }) {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-dot dot-red" />
          <div className="topbar-dot dot-yellow" />
          <div className="topbar-dot dot-green" />
          <span className="topbar-title">guest@jaeytea — ~/portfolio</span>
        </div>
        <div className="topbar-right">
          <ToggleTheme mode={mode} setMode={setMode} />
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <a href="https://github.com/jaeytea" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </div>
      </div>

      <section className="hero" id="home">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="term-btn term-close" />
            <div className="term-btn term-min" />
            <div className="term-btn term-max" />
            <span className="terminal-titlebar-text">
              bash — ~/portfolio — 80×24
            </span>
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
                  Software Engineer with ~2 years of experience building{" "}
                  <span className="str">backend systems</span>,{" "}
                  <span className="str">observability pipelines</span>, and{" "}
                  <span className="str">DevOps infrastructure</span>.
                  <br />
                  Currently based in Delhi, India — actively seeking{" "}
                  <span className="success">backend</span> roles in
                  Java/Springboot or Python. Open to Remote/Hybrid mode.
                  <br />
                  <br />
                  Passionate about distributed systems, container orchestration,
                  and writing code that's observable by default.
                </p>
              </div>
            </div>

            {/* blank line */}
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
                  <span>⌥</span> linkedin
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
                  <span>↓</span> resume.pdf
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
    </>
  );
}
