"use client";

import React from "react";
import GridItem from "@components/molecules/GridItem";

// This is meant to be a featured section in the future
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

type FeaturedProps = {
  lang: "pt" | "en";
};
const Featured: React.FC<FeaturedProps> = (props) => {
  const { lang } = props;
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <GridItem
      title={
        lang === "pt" ? "Hora atual GMT-3" : "Current time GMT-3"
      }
    >
      <div className='grid place-content-center h-full'>
        <Clock
          className={"bg-shark-700 rounded-full"}
          renderHourMarks
          renderMinuteHand
          renderSecondHand
          renderMinuteMarks={false}
          // renderNumbers
          size={200}
          locale='pt-BR'
          value={value}
        />
      </div>
    </GridItem>
  );
};

export default Featured;
