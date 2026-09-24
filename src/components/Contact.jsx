import { useState } from "react";

// 1. Create a form at formspree.io and paste the ID here (the part after /f/).
const FORMSPREE_ID = "mzezvgwo";
// 2. Your details.
const LINKEDIN_URL = "https://www.linkedin.com/in/jaagritiiii/";
const GITHUB_URL = "https://github.com/jaeytea";
const EMAIL = "jaagritiwork@gmail.com";

const empty = { name: "", email: "", message: "" };

// Uses your existing classes from App.css (contact-terminal, form-field, form-input, ...).
// If your current Contact.jsx has its own section heading / title bar text, keep those lines.
export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _gotcha: e.target.elements._gotcha.value,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(empty);
        setTimeout(() => setStatus("idle"), 4000);
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(
        data?.errors?.map((x) => x.message).join(", ") ||
          "The server rejected the message.",
      );
      setStatus("error");
    } catch {
      setError("Couldn't reach the server. Check your connection.");
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-cmd">
        <span className="prompt">$</span>
        <span className="cmd">./contact</span>
        <span className="flag">--send</span>
      </div>

      <div className="contact-terminal">
        <div className="contact-term-bar">contact.sh</div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="c-name">
              <span className="label-prompt">&gt;</span> name
            </label>
            <input
              id="c-name"
              name="name"
              className="form-input"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="c-email">
              <span className="label-prompt">&gt;</span> email
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              className="form-input"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="c-message">
              <span className="label-prompt">&gt;</span> message
            </label>
            <textarea
              id="c-message"
              name="message"
              rows={5}
              className="form-textarea"
              value={form.message}
              onChange={onChange}
              placeholder="What would you like to talk about?"
              required
            />
          </div>

          {/* Honeypot: hidden from people; bots fill it in and Formspree drops the submission. */}
          <input
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <button
            type="submit"
            className={`form-submit ${status === "sent" ? "sent" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
                ? "Sent"
                : "Send message"}
          </button>

          <p
            className={`form-status ${status === "error" ? "error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status === "sent" &&
              "Message sent. I'll reply to the email you gave."}
            {status === "error" && (
              <>
                {error} Try again, or email{" "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </>
            )}
          </p>
        </form>

        <div className="contact-socials">
          <a
            className="social-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on LinkedIn
          </a>
          <a
            className="social-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a className="social-link" href={`mailto:${EMAIL}`}>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
