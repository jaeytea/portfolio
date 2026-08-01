import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to Formspree / EmailJS / your backend
    // For now, just simulate success
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <hr
        className="section-divider"
        style={{
          marginBottom: 48,
          marginLeft: 0,
          marginRight: 0,
          maxWidth: "100%",
        }}
      />

      <div className="section-cmd">
        <span style={{ color: "var(--green)" }}>guest@jaeytea:~$</span>
        &nbsp;
        <span style={{ color: "var(--cyan)" }}>./send_message.sh</span>
        <span style={{ color: "var(--text-muted)" }}> --to you@email.com</span>
      </div>

      <div className="contact-terminal">
        <div className="contact-term-bar">
          <div className="term-btn term-close" />
          <div className="term-btn term-min" />
          <div className="term-btn term-max" />
          <span style={{ marginLeft: 8 }}>contact — send_message.sh</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">
              <span className="label-prompt">$</span>
              enter --name
            </label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="your name"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              <span className="label-prompt">$</span>
              enter --email
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">
              <span className="label-prompt">$</span>
              enter --message
            </label>
            <textarea
              className="form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="hey, I'd like to connect..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className={`form-submit ${sent ? "sent" : ""}`}>
            {sent ? (
              <>✓ message sent — awaiting response...</>
            ) : (
              <>▶ run send_message.sh</>
            )}
          </button>
        </form>

        <div className="contact-socials">
          <a
            href="https://github.com/jaeytea"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            ⌥ github
          </a>
          <a
            href="https://linkedin.com/in/jaagritiiii"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            ⌥ linkedin
          </a>
          <a href="mailto:jaagritiwork@gmail.com" className="social-link">
            @ email
          </a>
          <a
            href="https://x.com/canireallycode"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            ⌥ X
          </a>
        </div>
      </div>
    </section>
  );
}
