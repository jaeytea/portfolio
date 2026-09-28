import { useState, useEffect, useMemo, useRef } from "react";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import BinaryRain from "./components/BinaryRain";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const appRef = useRef(null);
  const welcomeStageRef = useRef(null);

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette:
          mode === "dark"
            ? {
                mode: "dark",
                primary: {
                  main: "#39d353",
                },
                background: {
                  default: "#0d1117",
                  paper: "#161b22",
                },
                text: {
                  primary: "#c9d1d9",
                },
              }
            : {
                mode: "light",
                primary: {
                  main: "#C76A8A",
                },
                background: {
                  default: "#F8F5EF",
                  paper: "#FFFDFC",
                },
                text: {
                  primary: "#5A2D36",
                },
              },
      }),
    [mode],
  );
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!booted || visitorName) return;

    document.documentElement.classList.add("welcome-locked");
    document.body.classList.add("welcome-locked");
    return () => {
      document.documentElement.classList.remove("welcome-locked");
      document.body.classList.remove("welcome-locked");
    };
  }, [booted, visitorName]);

  useEffect(() => {
    if (!visitorName) return;

    const frame = requestAnimationFrame(() => {
      window.scrollTo({
        top: welcomeStageRef.current?.offsetHeight || window.innerHeight,
        behavior: "smooth",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [visitorName]);

  const handleWelcomeSubmit = (event) => {
    event.preventDefault();
    const match = command.trim().match(/^innit\s+(.+)$/i);
    let name = match?.[1].trim() || "";
    if (
      (name.startsWith('"') && name.endsWith('"')) ||
      (name.startsWith("'") && name.endsWith("'"))
    ) {
      name = name.slice(1, -1).trim();
    }

    if (!name) {
      setCommandError("Usage: innit <your name>");
      return;
    }

    setCommandError("");
    setCommand(`Let's go ${name}`);
    setVisitorName(name);
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const stageHeight =
        welcomeStageRef.current?.offsetHeight || window.innerHeight;
      const progress = Math.min(window.scrollY / Math.max(stageHeight, 1), 1);
      appRef.current?.style.setProperty(
        "--welcome-lift",
        `${-progress * stageHeight}px`,
      );
      appRef.current?.style.setProperty(
        "--hero-scale",
        `${0.9 + progress * 0.1}`,
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [booted]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app" ref={appRef}>
        {!booted ? (
          <div className="boot-screen">
            <div className="boot-text">
              <span className="boot-line">
                Initializing portfolio kernel...
              </span>
              <span className="boot-line delay-1">
                Loading modules: [ hero ] [ skills ] [ projects ] [ contact ]
              </span>
              <span className="boot-line delay-2">
                System ready. <span className="blink">█</span>
              </span>
            </div>
          </div>
        ) : (
          <>
            <section className="welcome-screen" aria-labelledby="welcome-title">
              <div className="welcome-terminal">
                {/* <div className="welcome-titlebar">
                  <span className="topbar-dot dot-red" />
                  <span className="topbar-dot dot-yellow" />
                  <span className="topbar-dot dot-green" />
                  <span className="welcome-titlebar-text">JT terminal</span>
                </div> */}
                <div className="welcome-message">
                  <p className="welcome-prompt">
                    guest@jaeytea:~$ init welcome
                  </p>
                  <br />
                  <h1 id="welcome-title">Welcome to the geek terminal !</h1>
                  <p className="welcome-instruction">
                    {visitorName
                      ? `Hey there, ${visitorName}. `
                      : "Type innit and your name to continue."}
                  </p>
                  <form
                    className="welcome-command"
                    onSubmit={handleWelcomeSubmit}
                  >
                    <label htmlFor="welcome-command-input">
                      guest@jaeytea:~$
                    </label>
                    <input
                      id="welcome-command-input"
                      aria-label="Terminal command"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      placeholder="innit Your Name"
                      value={command}
                      onChange={(event) => {
                        setCommand(event.target.value);
                        setCommandError("");
                      }}
                      disabled={Boolean(visitorName)}
                    />
                    {!visitorName && <button type="submit">RUN ↵</button>}
                  </form>
                  {commandError && (
                    <p className="welcome-error" role="status">
                      {commandError}
                    </p>
                  )}
                </div>
              </div>
              <div className="welcome-scroll" aria-hidden="true">
                <span>{visitorName ? "SCROLL TO ENTER" : "ACCESS LOCKED"}</span>
                {visitorName && <span className="welcome-scroll-arrow">↓</span>}
              </div>
            </section>
            <div
              className="welcome-stage"
              aria-hidden="true"
              ref={welcomeStageRef}
            />
            <div className="main-content fade-in">
              <div className="scanline" />
              <BinaryRain />
              <Hero mode={mode} setMode={setMode} />
              <Tabs />
              <Contact />
              <Footer />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
