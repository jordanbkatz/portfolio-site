import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/content";

const FOOTER_NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#business", label: "Agency" },
  { href: "#sales", label: "Sales" },
  { href: "#skills", label: "Tools" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = id === "top" ? document.body : document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <a
              className="brand"
              href="#top"
              onClick={(e) => scrollToSection(e, "#top")}
            >
              Jordan Katz<span className="accent">.</span>
            </a>
            <p>
              Software & sales development specialist, founder of Katz Web Solutions LLC, and builder of
              high-performance digital platforms and revenue-generating sales pipelines.
            </p>
            <div className="footer-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={17} aria-hidden />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} aria-hidden />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email me">
                <Mail size={17} aria-hidden />
              </a>
            </div>
          </div>
          <nav className="footer-col" aria-label="Footer">
            <h4>Navigate</h4>
            {FOOTER_NAV.map((item) => (
              <a
                className="footer-link"
                href={item.href}
                key={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <a className="footer-link" href={`mailto:${profile.email}`}>
              <Mail size={14} aria-hidden /> {profile.email}
            </a>
            <a
              className="footer-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} aria-hidden /> LinkedIn
            </a>
            <span className="footer-link footer-muted">
              <MapPin size={14} aria-hidden /> {profile.location}
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <a
            className="footer-top"
            href="#top"
            onClick={(e) => scrollToSection(e, "#top")}
          >
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
