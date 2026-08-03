import { Cloud, Layout, Server } from "lucide-react";
import { skills } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SkillIcon } from "./SkillIcon";

const ICONS: Record<string, typeof Layout> = {
  Frontend: Layout,
  Backend: Server,
  Deployment: Cloud,
};

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="My toolbox"
      sub="Technologies I reach for to take products from idea to production."
    >
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = ICONS[group.category] ?? Layout;
          return (
            <Reveal key={group.category}>
              <div className="card skill-group">
                <h3>
                  <Icon size={18} className="skill-icon" aria-hidden />
                  {group.category}
                </h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item.name}>
                      <SkillIcon name={item.icon} /> {item.name}
                    </span>
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
