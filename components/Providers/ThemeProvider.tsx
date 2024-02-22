"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { setThemeCookies, getThemeCookies } from "@actions/theme";

export type Themes = "dark" | "light";

export type ThemeContextType = {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(
  null
);

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Themes>("dark");

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  useEffect(() => {
    localStorage.getItem("theme") &&
      setTheme(localStorage.getItem("theme") as Themes);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    if (window.matchMedia) {
      // Check if the dark-mode Media-Query matches
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Dark
        setTheme("dark");
      } else {
        // Light
        setTheme("light");
      }
    } else {
      setTheme("dark");
      // Default (when Media-Queries are not supported)
    }

    // setThemeCookies(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ ...contextValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProvider"
    );
  }
  return context;
};

export default ThemeProvider;
