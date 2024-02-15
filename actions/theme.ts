"use server";

import { cookies } from "next/headers";
import { Themes } from "@components/Providers/ThemeProvider";
import saParser from "@helpers/saParser";

export const setThemeCookies = (theme: Themes) => {
  const themeCookies = cookies();
  themeCookies.set("theme", theme);
};

export const getThemeCookies = async () => {
  const cookieStore = cookies();
  const themeCookies = cookieStore.get("theme");
  // If there are no cookies, return undefined
  if (!themeCookies) return undefined;

  // If there are cookies, return the value
  return themeCookies.value as Themes;
};
