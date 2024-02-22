"use client";

import cn from "@utils/cn";
import React from "react";
import { useThemeContext } from "@components/Providers/ThemeProvider";
import { Themes } from "@components/Providers/ThemeProvider";
interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  // const theme = localStorage.getItem("theme") as "dark" | "light";
  const { theme } = useThemeContext() || {
    theme: localStorage.getItem("theme") as Themes,
  };

  return (
    <body
      className={cn("flex min-h-[100svh]", {
        dark: theme === "dark",
      })}
    >
      {children}
    </body>
  );
};

export default Body;
