// src/hooks/use-theme-config.ts

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeConfig() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return {
    theme,
    setTheme,
    currentTheme,
    mounted,
  };
}
