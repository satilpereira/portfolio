import React from "react";
import GridItem from "@components/molecules/GridItem";
import skills from "@content/skills";
import { Langs } from "@app/[lang]/layout";
import cn from "@utils/cn";

export interface ComponentLangProps {
  lang: Langs;
}

interface SkillsProps extends ComponentLangProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  const { lang } = props;

  // Get a string with all the skills
  const skillsString = skills[lang].join(" • ");

  return (
    <GridItem title={lang === "en" ? "Skills" : "Habilidades"}>
      <ul
        className={cn(
          "flex flex-wrap gap-1 text-xs dark:text-shark-300 text-shark-700"
        )}
      >
        <p className={cn("hyphens-auto leading-[1.5]")}>
          {skillsString}
        </p>
      </ul>
    </GridItem>
  );
};

export default Skills;
