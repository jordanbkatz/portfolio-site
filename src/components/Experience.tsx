import { experience } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      title="Where I've worked"
      sub="Professional roles across agencies, SaaS, and my own company."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" data-current={job.current ?? false} key={job.company}>
            <Reveal>
              <article className="card exp-card">
                <div className="exp-top">
                  <div className="exp-company-header">
                    {job.logo ? (
                      <img src={job.logo} alt={`${job.company} logo`} className="exp-company-logo" />
                    ) : null}
                    <h3>{job.company}</h3>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>
                <div className="exp-role">
                  {job.title} · {job.location}
                </div>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 32)}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
