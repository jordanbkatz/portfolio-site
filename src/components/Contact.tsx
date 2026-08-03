import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n- ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" kicker="Contact" title="Let's build something">
      <Reveal>
        <div className="card contact-panel">
          <h2>Want to work together?</h2>
          <p>
            I'm always open to new opportunities, whether that's a full-time engineering role, a
            freelance build, or just talking shop. Reach out and I'll get back to you quickly.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label className="form-field">
                <span className="form-label">Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="form-field">
                <span className="form-label">Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label className="form-field">
              <span className="form-label">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <div className="contact-form-footer">
              <button className="btn btn-primary" type="submit">
                <Send size={15} aria-hidden /> Send message
              </button>
              <p className="form-note">Submitting opens your email app with the message pre-filled.</p>
            </div>
            {sent ? (
              <p className="form-success">
                <Check size={15} aria-hidden /> Your email app should have opened! Thanks for
                reaching out.
              </p>
            ) : null}
          </form>
          <div className="contact-links">
            <a className="btn" href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}>
              <Phone size={15} aria-hidden /> {profile.phone}
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <Mail size={15} aria-hidden /> Email me
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden /> GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden /> LinkedIn
            </a>
          </div>
          {/* Location line removed as requested */}
        </div>
      </Reveal>
    </Section>
  );
}
