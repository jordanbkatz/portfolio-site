import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content";
import { HeroCanvas } from "./HeroCanvas";

interface HeroProps {
  theme: string;
}

export function Hero({ theme }: HeroProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="top">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-kicker">
              {profile.role} · {profile.location}
            </p>
            <h1 className="hero-title">
              Hi, I'm <span className="accent">Jordan Katz</span>.
            </h1>
            <p className="hero-sub">{profile.tagline}</p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
              >
                View my work <ArrowDown size={15} aria-hidden />
              </a>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                <Mail size={15} aria-hidden /> Get in touch
              </a>
            </div>
          </div>
          <HeroCanvas theme={theme} />
        </div>
      </div>
    </section>
  );
}
