const SKILLS = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "SQL", icon: "🗄️" },
      { name: "Bash", icon: "💻" },
      { name: "OOP", icon: "🧩" },
      { name: "SOLID Principles", icon: "🏛️" },
      { name: "DSA", icon: "🧮" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "Material UI", icon: "🎨" },
      { name: "HTML / CSS", icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "FastAPI", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Apache Camel", icon: "🐪" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Oracle SQL", icon: "🗄️" },
      // { name: "Prisma ORM", icon: "🔺" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🚀" },
      { name: "Podman", icon: "📦" },
      { name: "Jenkins", icon: "🤵" },
      { name: "Nginx", icon: "🌐" },
      // { name: "GitHub Actions", icon: "⚙️" },
      { name: "Linux", icon: "🐧" },
      { name: "Bash Scripting", icon: "📜" },

      // { name: "AWS", icon: "☁️" },
    ],
  },
  {
    category: "LLM & GenAI",
    items: [
      { name: "Prompt Engineering", icon: "💬" },
      { name: "RAG", icon: "🔎" },
      { name: "LangChain", icon: "🦜" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "Vector Embeddings", icon: "🧠" },
      { name: "Vector DBs (Chroma, FAISS)", icon: "🗄️" },
      { name: "LLM Evaluation", icon: "📊" },
      { name: "Synthetic Data", icon: "🧪" },
      { name: "Fine-tuning", icon: "⚙️" },
      { name: "QLoRA", icon: "🪶" },
      { name: "Quantization", icon: "📉" },
    ],
  },
  {
    category: "ML Foundations",
    items: [
      { name: "PyTorch", icon: "🔥" },
      { name: "Neural Networks", icon: "🕸️" },
      { name: "Transformers", icon: "🔀" },
      { name: "Attention Mechanisms", icon: "🎯" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "GitLab", icon: "🦊" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💙" },
      { name: "IntelliJ IDEA", icon: "🧠" },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <div className="skills-header">
        <span className="prompt" style={{ color: "var(--green)" }}>
          guest@jaeytea:~$
        </span>
        &nbsp;
        <span style={{ color: "var(--cyan)" }}>cat</span>
        &nbsp;
        <span style={{ color: "var(--yellow)" }}>skills.json</span>
        <span style={{ color: "var(--text-muted)" }}> | jq '.'</span>
      </div>

      {SKILLS.map((cat) => (
        <div className="skills-category" key={cat.category}>
          <div className="skills-cat-label">
            <span style={{ color: "var(--magenta)" }}>#</span>
            &nbsp;{cat.category}
          </div>
          <div className="skills-grid">
            {cat.items.map((skill) => (
              <div className="skill-chip" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
