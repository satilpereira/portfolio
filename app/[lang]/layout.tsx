import cn from "@utils/cn";
import Navbar from "@components/organisms/Navbar";

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
        "p-4 w-full bg-zircon-50 text-shark-900 dark:text-shark-50 dark:bg-bunker-950"
      )}
    >
      <Navbar lang={params.lang} />
      {children}
    </main>
  );
};

export default Layout;
