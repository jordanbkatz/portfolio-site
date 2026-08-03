import {
  Brain,
  Code,
  Dumbbell,
  FileText,
  Gamepad,
  Mail,
  MapPin,
  MountainSnow,
  Newspaper,
  Phone,
  Sprout,
} from "lucide-react";
import type { ComponentType } from "react";
import { about, profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const INTEREST_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  dumbbell: Dumbbell,
  mountain: MountainSnow,
  mushroom: Sprout,
  brain: Brain,
  newspaper: Newspaper,
  code: Code,
  gamepad: Gamepad,
};

export function About() {
  return (
    <Section id="about" kicker="About" title={about.heading} sub={about.sub}>
      <div className="about-grid">
        <Reveal className="about-col">
          <div className="card about-bio-card">
            <div className="about-paragraphs">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="about-meta-grid">
              <div className="about-meta-item">
                <MapPin size={16} className="meta-icon" aria-hidden />
                <div>
                  <span className="meta-lbl">Location</span>
                  <span className="meta-val">Westport, CT</span>
                </div>
              </div>
              <div className="about-meta-item">
                <Phone size={16} className="meta-icon" aria-hidden />
                <div>
                  <span className="meta-lbl">Phone</span>
                  <span className="meta-val">
                    <a href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`} style={{ textDecoration: "none" }}>
                      {profile.phone}
                    </a>
                  </span>
                </div>
              </div>
              <div className="about-meta-item">
                <Mail size={16} className="meta-icon" aria-hidden />
                <div>
                  <span className="meta-lbl">Email</span>
                  <span className="meta-val">
                    <a href={`mailto:${profile.email}`} style={{ textDecoration: "none" }}>
                      {profile.email}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a
                className="btn btn-primary resume-btn"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} aria-hidden /> View Resume (PDF)
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-col">
          <div className="about-photo-wrapper card">
            <img
              className="headshot"
              src={about.headshot}
              alt="Headshot of Jordan Katz"
              loading="lazy"
            />
            <div className="photo-badge">
              <span className="badge-title">Jordan Katz</span>
              <span className="badge-sub">Full-Stack Engineer & Agency Founder</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="interests">
        <Reveal>
          <h3 className="interests-title">When I'm not coding</h3>
        </Reveal>
        <div className="interests-grid">
          {about.interests.map((interest) => {
            const Icon = INTEREST_ICONS[interest.icon] ?? Brain;
            return (
              <Reveal key={interest.title}>
                <div className="card interest-card">
                  <Icon size={22} className="interest-icon" aria-hidden />
                  <h4>{interest.title}</h4>
                  <p>{interest.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
