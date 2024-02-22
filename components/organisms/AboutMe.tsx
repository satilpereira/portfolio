import React from "react";
import GridItem from "@components/molecules/GridItem";
import { ComponentLangProps } from "./Skills";
import aboutMe from "@content/aboutMe";

interface AboutMeProps extends ComponentLangProps {}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { lang } = props;
  return (
    <GridItem title={lang === "en" ? "About Me" : "Sobre Mim"}>
      <p className='text-shark-700 text-sm dark:text-shark-300'>
        {aboutMe[lang]}
      </p>
    </GridItem>
  );
};

export default AboutMe;
