import { projects, type Project } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

function ProjectThumb({ project }: { project: Project }) {
  return (
    <div className="project-thumb">
      {project.image ? (
        <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
      ) : (
        <div className="thumb-placeholder" aria-hidden>
          <span className="thumb-letter">{project.name.charAt(0)}</span>
          <span className="thumb-note">Preview coming soon</span>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Selected Projects"
      title="Things I've built"
      sub="Production-level web apps spanning real-time collaboration, WebRTC, WebGL, Web Audio, and marketplaces."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <article className="card project-card">
              <ProjectThumb project={project} />
              <div className="project-body">
                <h3>{project.name}</h3>
                <div className="project-tagline">{project.tagline}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
