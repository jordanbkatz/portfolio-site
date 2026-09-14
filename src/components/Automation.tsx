import {
  CheckCircle2,
  Database,
  Mail,
  PhoneCall,
  Send,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { sales } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const ICON_MAP: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  target: Target,
  outreach: Send,
  phone: PhoneCall,
  mail: Mail,
  pipeline: TrendingUp,
  database: Database,
  workflow: Workflow,
  zap: Zap,
};

export function Sales() {
  return (
    <Section
      id="sales"
      kicker="Sales Development"
      title={sales.heading}
      sub={sales.sub}
    >
      <div className="automation-grid">
        {sales.capabilities.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Target;
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

export const Automation = Sales;

