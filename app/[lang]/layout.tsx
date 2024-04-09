import cn from "@utils/cn";
import Navbar from "@components/organisms/Navbar";
import Footer from "@components/organisms/Footer";
import { headers } from "next/headers";
import NextUiProvider from "@components/Providers/NextUiProvider";

export type Langs = "en" | "pt";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Langs };
}) => {
  return (
    <main
      className={cn(
        "p-2 md:p-4 w-full bg-zircon-50 items-center justify-center flex flex-col text-shark-900 dark:text-shark-50 dark:bg-bunker-950"
      )}
    >
      <NextUiProvider>
        <Navbar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </NextUiProvider>
    </main>
  );
};

export default Layout;
