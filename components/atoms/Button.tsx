"use client";

import { Langs } from "@app/[lang]/layout";

const Button: React.FC<
  {
    lang: Langs;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { lang, children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
