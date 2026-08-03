import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Mode, Theme } from "../hooks/useTheme";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NAV_ITEMS = [
  { href: "#experience", label: "Experience" },
  { href: "#business", label: "Agency" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  theme: Theme;
  mode: Mode;
  onThemeChange: (theme: Theme) => void;
  onModeToggle: () => void;
}

export function Header({ theme, mode, onThemeChange, onModeToggle }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = id === "top" ? document.body : document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={(e) => scrollToSection(e, "#top")}>
          Jordan Katz<span className="accent">.</span>
        </a>
        <nav className="nav desktop-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <ThemeSwitcher
            theme={theme}
            mode={mode}
            onThemeChange={onThemeChange}
            onModeToggle={onModeToggle}
          />
          <button
            className="icon-btn mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-dropdown">
          <nav className="mobile-nav" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.href);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
