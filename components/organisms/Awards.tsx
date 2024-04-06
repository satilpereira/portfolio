import React from "react";
import GridItem from "@components/molecules/GridItem";
import { ComponentLangProps } from "./Skills";
import awards from "@content/awards";
import cn from "@utils/cn";

type AwardsProps = ComponentLangProps & {};

const Awards: React.FC<AwardsProps> = ({ lang }) => {
  return (
    <GridItem title={lang == "en" ? "Awards" : "Prêmios"}>
      <section className='divide-y divide-shark-600'>
        {awards[lang].map((award, index) => (
          <article
            key={index}
            className={cn("grid grid-cols-1 gap-2", {
              "pt-2": index !== 0,
              "pb-2": index !== awards[lang].length - 1,
            })}
          >
            <h3 className='text-sm leading-[1.2] dark:text-shark-300 text-shark-700 font-bold'>
              {award.title}
            </h3>
            <p className='text-xs dark:text-shark-400 text-shark-600'>
              {award.description}
            </p>
          </article>
        ))}
      </section>
    </GridItem>
  );
};

export default Awards;
