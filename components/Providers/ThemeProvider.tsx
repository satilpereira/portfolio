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

  useEffect(() => {
    (async () => {
      const themeCookies = await getThemeCookies();
      if (themeCookies) {
        setTheme(themeCookies);
      }
    })();
  }, []);

  useEffect(() => {
    setThemeCookies(theme);
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
