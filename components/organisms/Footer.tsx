import React from "react";
import { Langs } from "@app/[lang]/layout";

interface FooterProps {
  lang: Langs;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { lang } = props;
  return (
    <footer className='w-full'>
      <div className='max-w-6xl text-sm mx-auto pb-2 md:pb-0 pt-4 dark:text-shark-300 flex justify-between flex-row dark:border-t-shark-700 border-t'>
        <div>&copy; {new Date().getFullYear()} Satil Pereira</div>
        <div>
          Powered by{" "}
          <b className='dark:text-shark-50'>
            <a href='https://vercel.com/' target='_blank'>
              Vercel
            </a>
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
