import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Palette, Sun } from "lucide-react";
import { THEMES, THEME_LABELS, type Mode, type Theme } from "../hooks/useTheme";

const SWATCHES: Record<Theme, [string, string]> = {
  cyberpunk: ["#00e5ff", "#ff2ea6"],
  retro: ["#c4501f", "#f4e9d6"],
  minimal: ["#2557d6", "#ffffff"],
  neubrutal: ["#ffd02e", "#141414"],
  terminal: ["#46e06c", "#070c07"],
};

interface ThemeSwitcherProps {
  theme: Theme;
  mode: Mode;
  onThemeChange: (theme: Theme) => void;
  onModeToggle: () => void;
}

export function ThemeSwitcher({ theme, mode, onThemeChange, onModeToggle }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="header-controls">
      <div className="theme-picker" ref={rootRef} data-open={open}>
        <button
          type="button"
          className="theme-picker-btn"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Choose site theme"
          onClick={() => setOpen((o) => !o)}
        >
          <Palette size={15} aria-hidden />
          <span className="picker-label">{THEME_LABELS[theme]}</span>
          <ChevronDown size={14} className="chevron" aria-hidden />
        </button>
        <div className="theme-menu" role="listbox" aria-label="Themes" data-open={open}>
          {THEMES.map((t, index) => (
            <button
              key={t}
              type="button"
              role="option"
              aria-selected={t === theme}
              aria-pressed={t === theme}
              className="theme-option"
              style={{ "--theme-idx": index } as React.CSSProperties}
              onClick={() => {
                onThemeChange(t);
                setOpen(false);
              }}
            >
              <span
                className="swatch"
                style={{ "--sw-a": SWATCHES[t][0], "--sw-b": SWATCHES[t][1] } as React.CSSProperties}
                aria-hidden
              />
              {THEME_LABELS[t]}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="icon-btn"
        onClick={onModeToggle}
        aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {mode === "dark" ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
      </button>
    </div>
  );
}
