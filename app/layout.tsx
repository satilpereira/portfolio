import ThemeProvider from "@components/Providers/ThemeProvider";
import "@styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { getThemeCookies } from "@actions/theme";
import Body from "@components/atoms/Body";
import cn from "@utils/cn";
import { headers } from "next/headers";
import { Langs } from "./[lang]/layout";

export const metadata = {
  title: "portfolio",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/assets/icons/favicon-light.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/ico",
      url: "/assets/icons/favicon-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  description: "generic description",
};

const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = await getThemeCookies();

  // Set the language based on the URL
  const requestUrl = headers().get("x-url");
  let lang = requestUrl?.split("/")[3];
  lang = lang === "en" ? "en-US" : "pt-BR";

  return (
    <html lang={lang} className={GeistSans.className}>
      <ThemeProvider>
        <Body>{children}</Body>
      </ThemeProvider>
    </html>
  );
};

export default Layout;
