import React from "react";
import GridItem from "@components/molecules/GridItem";
import skills from "@content/skills";
import { Langs } from "@app/[lang]/layout";
import cn from "@utils/cn";

interface SkillsProps {
  lang: Langs;
}

const Skills: React.FC<SkillsProps> = (props) => {
  const { lang } = props;
  return (
    <GridItem title={lang === "en" ? "Skills" : "Habilidades"}>
      <ul
        className={cn(
          "flex flex-wrap gap-1 text-[10px] dark:text-shark-300 text-shark-700"
        )}
      >
        {skills[lang].map((skill, index) => (
          <>
            <li className='leading-[1.5]' key={skill + Math.random()}>
              {skill}
            </li>
            {index < skills[lang].length - 1 && (
              <li
                className='leading-[1.5]'
                key={skill + Math.random()}
              >
                <span className='text-shark-500 dark:text-shark-300'>
                  •
                </span>
              </li>
            )}
          </>
        ))}
      </ul>
    </GridItem>
  );
};

export default Skills;
