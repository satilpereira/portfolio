import React from "react";
import GridItem from "@components/molecules/GridItem";
import { ComponentLangProps } from "./Skills";

type YearsProProps = ComponentLangProps & {};

const YearsPro: React.FC<YearsProProps> = ({ lang }) => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsPro = currentYear - startYear + 1;
  return (
    <GridItem title={lang == "en" ? "Years Pro" : "Anos Pro"}>
      <div className='grid place-items-center h-full'>
        <h1 className='text-7xl font-bold'>{yearsPro}+</h1>
      </div>
    </GridItem>
  );
};

export default YearsPro;
