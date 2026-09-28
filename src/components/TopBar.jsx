import ToggleTheme from "./ToggleTheme";

export default function TopBar({ mode, setMode, setActiveTab }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-dot dot-red" />
        <div className="topbar-dot dot-yellow" />
        <div className="topbar-dot dot-green" />
        <span className="topbar-title">guest@jaeytea — ~/portfolio</span>
      </div>
      <div className="topbar-right">
        <ToggleTheme mode={mode} setMode={setMode} />
        <a href="#skills" onClick={() => setActiveTab("skills")}>
          SKILLS
        </a>
        <a href="#projects" onClick={() => setActiveTab("projects")}>
          PROJECTS
        </a>
        <a href="#contact">CONTACT</a>
        <a href="https://github.com/jaeytea" target="_blank" rel="noreferrer">
          GITHUB
        </a>
      </div>
    </div>
  );
}
