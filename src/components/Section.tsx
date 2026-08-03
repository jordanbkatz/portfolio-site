import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  sub?: string;
  children: ReactNode;
}

export function Section({ id, kicker, title, sub, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="kicker">{kicker}</div>
            <h2 className="section-title">{title}</h2>
            {sub ? <p className="section-sub">{sub}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
