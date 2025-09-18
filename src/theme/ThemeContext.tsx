"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeTokens, darkTheme, lightTheme } from "./themes";

type ThemeContextValue = {
  theme: ThemeTokens;
  setThemeName: (name: "light" | "dark") => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyThemeToDocument(theme: ThemeTokens) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--primary-color", theme.colors.primary);
  root.style.setProperty("--secondary-color", theme.colors.secondary);
  root.style.setProperty("--background-dark", theme.colors.background);
  // Also drive global body colors
  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty("--foreground", theme.colors.textPrimary);
  root.style.setProperty("--text-primary", theme.colors.textPrimary);
  root.style.setProperty("--text-secondary", theme.colors.textSecondary);
  root.style.setProperty("--border-color", theme.colors.border);
  root.style.setProperty("--text-on-primary", theme.colors.textOnPrimary);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => (name === "dark" ? darkTheme : lightTheme), [name]);

  useEffect(() => {
    applyThemeToDocument(theme);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", name === "dark");
    }
  }, [theme, name]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setThemeName: setName,
      toggleTheme: () => setName((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


