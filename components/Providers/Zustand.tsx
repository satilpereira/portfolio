import { create } from "zustand";

type Theme = "dark" | "light";

type ThemeProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useTheme = create<ThemeProps>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
