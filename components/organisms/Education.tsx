import React from "react";
import GridItem from "@components/molecules/GridItem";
import { ComponentLangProps } from "./Skills";
import education from "@content/education";
import cn from "@utils/cn";

interface EducationProps extends ComponentLangProps {}

const Education: React.FC<EducationProps> = (props) => {
  const { lang } = props;
  return (
    <GridItem title={lang === "en" ? "Education" : "Educação"}>
      <section className='text-shark-700 divide-y divide-shark-600 dark:text-shark-300'>
        {education[lang].map((item, index) => (
          <article
            key={index}
            className={cn("grid grid-cols-1 gap-2", {
              "pt-4": index !== 0,
              "pb-4": index !== education[lang].length - 1,
            })}
          >
            <h3 className='text-sm leading-[1.2] dark:text-shark-300 text-shark-700 font-bold'>
              {item.title}
            </h3>
            <p className='text-xs dark:text-shark-400 text-shark-600'>
              {item.institution}
            </p>
            <small className='dark:text-shark-400 text-shark-600'>
              {item.from} - {item.to}
            </small>
          </article>
        ))}
      </section>
    </GridItem>
  );
};

export default Education;
