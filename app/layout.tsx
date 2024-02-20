import ThemeProvider from "@components/Providers/ThemeProvider";
import "@styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { getThemeCookies } from "@actions/theme";
import Body from "@components/atoms/Body";
import cn from "@utils/cn";

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

  return (
    <html lang='pt-BR' className={GeistSans.className}>
      <ThemeProvider>
        <Body>{children}</Body>
      </ThemeProvider>
    </html>
  );
};

export default Layout;
