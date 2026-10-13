import { useState } from "react";
import Section from "../Section/Section";
import WindowCard from "../WindowCard/WindowCard";
import "./Contact.css";
import ContactArt from "./ContactArt";

const FORMSPREE_ID = "mzezvgwo";
const EMAIL = "jaagritiwork@gmail.com";

const QUICK_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaagritiiii/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/jaeytea", external: true },
  { label: "Email", href: `mailto:${EMAIL}` },
];

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
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
    <Section id="contact" title="Contact" dotted>
      <div className="contact__layout">
        <ContactArt className="contact__art" size={500} />
        {/* <img className="contact__art" src="/contact.png" alt="Contact illustration" /> */}
        <WindowCard title="contact.html" className="contact__window">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="c-name">
                Name
              </label>
              <input
                id="c-name"
                name="name"
                className="contact__input"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="c-email">
                Email
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                className="contact__input"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="c-message">
                Message
              </label>
              <textarea
                id="c-message"
                name="message"
                rows={5}
                className="contact__input"
                value={form.message}
                onChange={onChange}
                placeholder="What would you like to talk about?"
                required
              />
            </div>

            <input
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className={`btn contact__submit ${status === "sent" ? "btn--inverted" : ""}`.trim()}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Sent"
                  : "Send message"}
            </button>

            <p
              className={`contact__status ${status === "error" ? "contact__status--error" : ""}`.trim()}
              role="status"
              aria-live="polite"
            >
              {status === "sent" &&
                "Message sent. I'll reply to the email you gave."}
              {status === "error" && (
                <>
                  <strong>Error:</strong> {error} Try again, or email{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </>
              )}
            </p>
          </form>

          <p>You can also reach out to me on: </p>

          <nav className="contact__links" aria-label="Other ways to reach me">
            {QUICK_LINKS.map(({ label, href, external }) => (
              <a
                key={label}
                className="contact__link"
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </WindowCard>
      </div>
    </Section>
  );
}
