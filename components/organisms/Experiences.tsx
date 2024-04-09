"use client";

import React from "react";
import GridItem from "@components/molecules/GridItem";
import { ComponentLangProps } from "./Skills";
import experiences from "@content/experiences";
import { Experience } from "@content/experiences";
import {
  Accordion,
  AccordionItem,
  AccordionItemProps,
} from "@nextui-org/react";

type ExperiencesProps = {} & ComponentLangProps;

const Experiences: React.FC<ExperiencesProps> = ({ lang }) => {
  return (
    <GridItem title={lang === "en" ? "Experiences" : "Experiencias"}>
      <Accordion className='p-0' variant='splitted'>
        {experiences[lang].map((experience, i) => (
          <AccordionItem
            key={i}
            classNames={{
              base: "group-[.is-splitted]:shadow-none p-0 group-[.is-splitted]:dark:bg-shark-700/50 group-[.is-splitted]:bg-shark-100/50",
              title:
                "text-sm leading-[1.2] dark:text-shark-300 text-shark-700 font-bold ",
              subtitle:
                "text-xs leading-[1.5] dark:text-shark-400 text-shark-600",
            }}
            aria-label={
              i === 0
                ? "First experience"
                : i === length - 1
                ? "Last experience"
                : "Experience"
            }
            title={experience.company}
            subtitle={experience.brief}
          >
            <ExperienceCard
              key={i}
              index={i}
              experience={experience}
              length={experiences[lang].length}
            />
          </AccordionItem>
        ))}
      </Accordion>
    </GridItem>
  );
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  length: number;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  length,
  ...props
}) => {
  return (
    <section className='space-y-2'>
      {experience.details.map((detail, i) => (
        <article key={i} className=''>
          <header>
            <h4
              key={i}
              className='text-sm leading-[1.2] dark:text-shark-300 text-shark-700 font-bold'
            >
              {detail.title}
            </h4>
            <ul className='space-y-1 pt-2 list-inside list-disc'>
              {detail.description.map((content, _i) => {
                return (
                  <li
                    key={_i}
                    className='text-xs leading-[1.5] dark:text-shark-400 text-shark-600'
                  >
                    {content}
                  </li>
                );
              })}
            </ul>
          </header>
        </article>
      ))}
    </section>
  );
};

export default Experiences;
