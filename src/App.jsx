import { useEffect, useRef, useState } from "react";
import BootScreen from "./components/BootScreen/BootScreen";
import TopBar from "./components/TopBar/TopBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const BOOT_MS = 3000;

export default function App() {
  const [booted, setBooted] = useState(false);
  const appRef = useRef(null);
  const stageRef = useRef(null);

  // boot screen -> content
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), BOOT_MS);
    return () => clearTimeout(t);
  }, []);

  // scroll-linked CSS variables: hero scale + welcome lift
  useEffect(() => {
    const update = () => {
      const stageHeight = stageRef.current?.offsetHeight || window.innerHeight;
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

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [booted]);

  return (
    <div className="app" ref={appRef}>
      {!booted ? (
        <BootScreen />
      ) : (
        <main className="main-content fade-in" ref={stageRef}>
          <TopBar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
