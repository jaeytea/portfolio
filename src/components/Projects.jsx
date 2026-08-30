const PROJECTS = [
  {
    name: "GetMyTix",
    desc: "Designed and built a high-concurrency ticket booking platform using optimistic locking, transactional consistency, and real-time seat state management to prevent overselling under simultaneous booking requests. Includes Flyway migrations, REST APIs, PostgreSQL, and a React frontend.",
    stack: [
      "Java 21",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Flyway",
      "Docker",
    ],
    link: "https://github.com/jaeytea/getmytix",
    linkType: "github",
    icon: "🎟️",
  },

  {
    name: "Temporal Video RAG Engine",
    desc: "a multi-turn conversational RAG engine that indexes video transcripts into metadata-tracked vector embeddings via ChromaDB, applying strict prompt guardrails in Gemini 3.5 to deliver answers with exact video timestamp links.",
    stack: ["Python", "LangChain", "LLMs", "RAG", "Vector DB", "FastAPI"],
    link: "https://github.com/jaeytea/temporal-video-ke", // to be updated
    linkType: "github",
    icon: "🤖",
  },

  // {
  //   name: "AI Agent Security (Kaggle)",
  //   desc: "Built and evaluated defenses against multi-step prompt injection and tool abuse attacks on LLM agents as part of Kaggle's AI Agent Security competition, focusing on secure tool orchestration, attack detection, and robust agent behavior.",
  //   stack: ["Python", "LLMs", "Prompt Engineering", "AI Security", "Agents"],
  //   link: "#", //tbu
  //   linkType: "live",
  //   icon: "🛡️",
  // },

  {
    name: "SourceSea",
    desc: "Full-stack web platform that transforms static bookmarks into actionable reminders, leveraging Supabase Google authentication, CRUD-based resource management, and automated notifications to ensure important webpages are never forgotten.",
    stack: ["React", "TypeScript", "Node.js", "Express", "SQLite"],
    link: "https://github.com/jaeytea/sourcesea",
    linkType: "github",
    icon: "⚙️",
  },
  {
    name: "Sserunns",
    desc: "Ssera runs. Endless runner game with a beautiful console and increasing speed. How long can you help Ssera survive?",
    stack: ["Typescript", "HTML5 Canvas"],
    link: "https://jaeytea.github.io/sserunns/", // update
    linkType: "Live",
    icon: "💡",
  },

  {
    name: "Bolt IoT Temperature Logger",
    desc: "Built an IoT temperature monitoring system using Bolt IoT and an LM35 sensor to collect real-time readings, control logging through a hardware switch, upload sensor data to the cloud, and maintain a local CSV backup.",
    stack: ["Python", "Bolt IoT", "ESP8266", "LM35", "IoT", "CSV"],
    link: "https://github.com/jaeytea/bolt_templogger", // update
    linkType: "github",
    icon: "🌡️",
  },

  {
    name: "Digital Logic Calculator",
    desc: "Interactive command-line application capable of evaluating Boolean expressions, generating truth tables, and simplifying digital logic for common circuit design problems.",
    stack: ["Java", "CLI", "Boolean Algebra"],
    link: "https://jaeytea.github.io/digi-cal/", // update
    linkType: "Live",
    icon: "💡",
  },

  // {
  //   name: "Lumé",
  //   desc: "A modern journaling application supporting authentication, cloud synchronization, and responsive UI using Supabase as the backend.",
  //   stack: ["React", "Supabase", "PostgreSQL", "OAuth"],
  //   link: "https://github.com/jaeytea/lume",
  //   linkType: "github",
  //   icon: "📖",
  // },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects-header">
        <span style={{ color: "var(--green)" }}>guest@jaeytea:~$</span>
        &nbsp;
        <span style={{ color: "var(--cyan)" }}>ls</span>
        &nbsp;
        <span style={{ color: "var(--yellow)" }}>-la ./projects/</span>
        &nbsp;
        <span style={{ color: "var(--text-muted)" }}>| grep -v "^d"</span>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <div className="card-top-bar">
              <div className="card-dot" />
              <span>~/projects/{p.name}</span>
            </div>

            <div className="card-body">
              <div className="card-name">
                <span className="card-icon">{p.icon}</span>
                {p.name}
              </div>
              <p className="card-desc">{p.desc}</p>
              <div className="card-stack">
                {p.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <span className="link-icon">
                  {p.linkType === "github" ? "⌥" : "↗"}
                </span>
                <span>
                  {p.linkType === "github" ? "view on github →" : "live demo →"}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
