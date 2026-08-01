import "./build.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalMessages = [
  "> compiling skills...",
  "> building GenAI...",
  "> learning system design...",
  "> writing tech blogs...",
  "✔ build successful",
];

const sections = [
  {
    title: "GenAI",
    color: "#67ff98",
    progress: 72,
    items: [
      "Underwriting Copilot",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "MCP",
    ],
  },
  {
    title: "Backend",
    color: "#5ca9ff",
    progress: 58,
    items: ["System Design", "Kafka", "Redis", "Distributed Systems"],
  },
  {
    title: "Knowledge",
    color: "#c792ff",
    progress: 34,
    items: ["Technical Blogs", "Architecture Notes", "Open Source"],
  },
];

export default function BuildBlocks() {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) => (prev + 1) % terminalMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="build-wrapper">
      <div className="tower-side">
        <h2 className="build-heading">BUILD.LOG</h2>

        <motion.div className="tower" initial="hidden" animate="show">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="cube"
              initial={{
                y: -220,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: i * 0.7,
                duration: 0.65,
                type: "spring",
                stiffness: 170,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          key={message}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="terminal"
        >
          {terminalMessages[message]}
        </motion.div>
      </div>

      <div className="build-panel">
        <h1>Currently Building</h1>

        <p className="subtitle">
          Constantly learning, experimenting and shipping.
        </p>

        {sections.map((section) => (
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="card"
            key={section.title}
          >
            <div className="card-header">
              <h3
                style={{
                  color: section.color,
                }}
              >
                {section.title}
              </h3>

              <span>{section.progress}%</span>
            </div>

            <div className="progress">
              <motion.div
                className="progress-fill"
                style={{
                  background: section.color,
                }}
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${section.progress}%`,
                }}
                transition={{
                  duration: 1.2,
                }}
              />
            </div>

            <ul>
              {section.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
