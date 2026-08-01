import { useState, useEffect, useMemo } from "react";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function App() {
  const [booted, setBooted] = useState(false);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        {!booted ? (
          <div className="boot-screen">
            <div className="boot-text">
              <span className="boot-line">
                Initializing portfolio kernel...
              </span>
              <span className="boot-line delay-1">
                Loading modules: [hero] [skills] [projects] [contact]
              </span>
              <span className="boot-line delay-2">
                System ready. <span className="blink">█</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="main-content fade-in">
            <div className="scanline" />
            <Hero mode={mode} setMode={setMode} />
            <Tabs />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
