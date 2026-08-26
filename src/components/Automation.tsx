import {
  Bot,
  CheckCircle2,
  Database,
  Layers,
  Send,
  Workflow,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { automation } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const ICON_MAP: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  database: Database,
  workflow: Workflow,
  email: Send,
  extension: Layers,
  bot: Bot,
  zap: Zap,
};

export function Automation() {
  return (
    <Section
      id="automation"
      kicker="Automation"
      title={automation.heading}
      sub={automation.sub}
    >
      <div className="automation-grid">
        {automation.capabilities.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Workflow;
          return (
            <Reveal key={item.title}>
              <div className="card automation-card">
                <div className="automation-card-header">
                  <div className="automation-icon-wrapper">
                    <Icon size={20} className="automation-header-icon" aria-hidden />
                  </div>
                  <h3 className="automation-title">{item.title}</h3>
                </div>

                <div className="automation-desc">
                  <p>{item.description}</p>
                </div>

                <div className="automation-points">
                  {item.points.map((point) => (
                    <div className="automation-point-item" key={point}>
                      <CheckCircle2 size={15} className="automation-point-icon" aria-hidden />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
