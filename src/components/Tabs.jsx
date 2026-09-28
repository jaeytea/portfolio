import Skills from "./Skills";
import Projects from "./Projects";
import BuildBlocks from "./BuildBlocks";

const TABS = [
  { id: "skills", label: "skills.sh", prefix: "01" },
  { id: "projects", label: "projects.sh", prefix: "02" },
];

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <section className="tabs-section" id="skills">
      <div className="tab-bar">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            <span className="tab-prefix">{t.prefix}/</span>
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-content" key={activeTab}>
        {activeTab === "skills" && <Skills />}
        {activeTab === "projects" && <Projects />}
      </div>
      {/* <BuildBlocks /> */}
    </section>
  );
}
