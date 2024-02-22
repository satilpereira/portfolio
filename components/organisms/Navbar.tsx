"use client";

//Next and React
import React from "react";
import { useThemeContext } from "@components/Providers/ThemeProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Custom components and types
import { Langs } from "@app/[lang]/layout";
import Button from "@components/atoms/Button";

// Icons
import { BsFillMoonFill } from "react-icons/bs";
import { BsTranslate } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

type NavbarProps = {
  lang: Langs;
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { lang } = props;
  return (
    <nav className='w-full'>
      <div className='flex md:items-center py-2 md:pt-0 pb-4 border-b border-shark-500/30 dark:border-shark-700 max-w-6xl mx-auto flex-col gap-4 md:flex-row justify-between'>
        <div>
          <Profile lang={lang} />
        </div>
        <div className='flex flex-row gap-2 md:gap-4'>
          <ToggleLanguage lang={lang} />
          <ToggleTheme lang={lang} />
        </div>
      </div>
    </nav>
  );
};

const Profile: React.FC<{ lang: Langs }> = (props) => {
  const { lang } = props;

  return (
    <div className='flex flex-row gap-4 items-center'>
      <Image
        src={"/assets/images/Satil-s512.jpg"}
        alt={lang === "en" ? "Satil's photo" : "Foto do Satil"}
        width={32}
        height={32}
        className='object-cover rounded-full object-center h-8 w-8'
      />
      <div>
        <h1 className='md:text-sm text-xs font-bold text-shark-700 dark:text-shark-50'>
          Satil Pereira
        </h1>
        <p className='md:text-xs text-[10px] text-shark-500 dark:text-shark-300'>
          {lang === "en"
            ? "Software Engineer & Designer"
            : "Engenheiro de Software & Designer"}
        </p>
      </div>
    </div>
  );
};

const NavButton: React.FC<
  {
    lang: Langs;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { lang, children, ...rest } = props;
  return (
    <Button
      {...rest}
      lang={lang}
      className='flex w-full md:w-fit text-xs dark:text-shark-300 dark:border-shark-800 dark:bg-shark-700 items-center border h-fit flex-row gap-2 py-1 px-3 rounded-md'
    >
      {children}
    </Button>
  );
};

const ToggleLanguage: React.FC<{ lang: Langs }> = (props) => {
  const { lang } = props;
  const router = useRouter();
  const newLang = lang === "en" ? "pt" : "en";

  // Toggle html lang attribute
  if (typeof document !== "undefined")
    document.documentElement.lang = lang === "en" ? "en-US" : "pt-BR";

  return (
    <NavButton
      lang={lang}
      onClick={() => {
        router.push(`/${newLang}`);
      }}
    >
      {lang === "en" ? "pt" : "en"}
      <BsTranslate />
    </NavButton>
  );
};

const ToggleTheme: React.FC<{ lang: Langs }> = (props) => {
  const { lang } = props;
  const { theme, setTheme } = useThemeContext();
  const themeText =
    lang === "en" ? theme : theme === "dark" ? "escuro" : "claro";

  return (
    <NavButton
      lang={lang}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <div>{themeText}</div>
          <BsFillMoonFill />
        </>
      ) : (
        <>
          {themeText}
          <BsSun />
        </>
      )}
    </NavButton>
  );
};

export default Navbar;
