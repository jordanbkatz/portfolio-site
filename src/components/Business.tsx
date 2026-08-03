import { Briefcase, ExternalLink, Megaphone, Workflow } from "lucide-react";
import { business } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const ICONS = [Megaphone, Briefcase, Workflow];

export function Business() {
  return (
    <Section
      id="business"
      kicker="My Business"
      title={business.name}
      sub={`${business.role} · since ${business.since}`}
    >
      <Reveal>
        <div className="card business-panel">
          <div className="business-header">
            <div className="business-brand-row">
              <img
                src="/images/katz-web-solutions-logo.png"
                alt="Katz Web Solutions LLC logo"
                className="business-logo"
              />
              <div>
                <div className="business-eyebrow">
                  <Briefcase size={14} aria-hidden /> Founder-led agency
                </div>
                <h3>{business.heading}</h3>
              </div>
            </div>
            <a
              className="btn btn-primary business-link-btn"
              href={business.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Katz Web Solutions <ExternalLink size={15} aria-hidden />
            </a>
          </div>
          <p className="business-desc">{business.description}</p>
          <div className="business-grid">
            {business.points.map((point, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div className="business-point" key={point.title}>
                  <Icon size={20} className="bp-icon" aria-hidden />
                  <h4>{point.title}</h4>
                  <p>{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
