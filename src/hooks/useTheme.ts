import { useCallback, useEffect, useState } from "react";

export const THEMES = ["cyberpunk", "retro", "minimal", "neubrutal", "terminal"] as const;
export type Theme = (typeof THEMES)[number];
export type Mode = "light" | "dark";

export const THEME_LABELS: Record<Theme, string> = {
  cyberpunk: "Cyberpunk",
  retro: "Retro",
  minimal: "Minimal",
  neubrutal: "Neubrutal",
  terminal: "Terminal",
};

const THEME_KEY = "portfolio-site:theme";
const MODE_KEY = "portfolio-site:mode";

function isTheme(value: string | null): value is Theme {
  return value !== null && (THEMES as readonly string[]).includes(value);
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  return isTheme(stored) ? stored : "cyberpunk";
}

function getInitialMode(): Mode {
  const stored = localStorage.getItem(MODE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [mode, setModeState] = useState<Mode>(getInitialMode);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    localStorage.setItem(MODE_KEY, mode);
  }, [mode]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleMode = useCallback(
    () => setModeState((m) => (m === "dark" ? "light" : "dark")),
    []
  );

  return { theme, mode, setTheme, toggleMode };
}
