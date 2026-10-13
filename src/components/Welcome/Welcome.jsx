import { useState } from "react";
import WindowCard from "../WindowCard/WindowCard";
import "./Welcome.css";

// "innit Jagriti" / innit "Jagriti" / innit 'Jagriti'  ->  "Jagriti"
function parseName(command) {
  const match = command.trim().match(/^innit\s+(.+)$/i);
  let name = match?.[1].trim() || "";
  if (
    (name.startsWith('"') && name.endsWith('"')) ||
    (name.startsWith("'") && name.endsWith("'"))
  ) {
    name = name.slice(1, -1).trim();
  }
  return name;
}

export default function Welcome({ visitorName, onUnlock }) {
  const [command, setCommand] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = parseName(command);
    if (!name) {
      setError("Usage: innit <your name>");
      return;
    }

    const cleanName = name.replace(/\s+/g, " ").trim();
    setError("");
    setCommand(`Let's go ${cleanName}`);
    onUnlock(cleanName);
  };

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <WindowCard title="welcome.exe" className="welcome__window">
        <p className="welcome__prompt">guest@jaeytea:~$ init welcome</p>
        <h1 id="welcome-title" className="welcome__title">
          Welcome to the geek terminal!
        </h1>
        <p className="welcome__instruction">
          {visitorName
            ? `Hey there, ${visitorName}.`
            : "Type innit and your name to continue."}
        </p>

        <form className="welcome__command" onSubmit={handleSubmit}>
          <label htmlFor="welcome-command-input">guest@jaeytea:~$</label>
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
              setError("");
            }}
            disabled={Boolean(visitorName)}
          />
          {!visitorName && (
            <button type="submit" className="btn">
              Run ↵
            </button>
          )}
        </form>

        {error && (
          <p className="welcome__error" role="status" aria-live="polite">
            {error}
          </p>
        )}
      </WindowCard>

      <div className="welcome__scroll" aria-hidden="true">
        <span>{visitorName ? "Scroll to enter" : "Access locked"}</span>
        {visitorName && <span>↓</span>}
      </div>
    </section>
  );
}
