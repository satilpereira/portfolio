import cn from "@utils/cn";
import Navbar from "@components/organisms/Navbar";
import Footer from "@components/organisms/Footer";

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
        "p-4 w-full bg-zircon-50 items-center justify-center flex flex-col text-shark-900 dark:text-shark-50 dark:bg-bunker-950"
      )}
    >
      <Navbar lang={params.lang} />
      {children}
      <Footer lang={params.lang} />
    </main>
  );
};

export default Layout;
