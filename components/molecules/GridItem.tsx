"use client";

import React, { useEffect, useRef } from "react";
import cn from "@utils/cn";

interface GridItemProps {
  title: string;
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = (props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { title, children } = props;
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  // Check if the title container has a scrollbar
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      setHasScrollbar(scrollHeight > clientHeight);
    }
  }, []);

  return (
    <div className='w-full flex flex-col h-full bg-zircon-100/30 border-shark-500/30 dark:bg-shark-800 rounded-lg dark:border-shark-700 border py-2 pl-2'>
      <h2
        className={cn(
          "border-b leading-[1] transition-all duration-300 text-shark-700 dark:text-shark-50 border-b-shark-500/30 dark:border-b-shark-700 pb-2 mb-2 mr-2",
          {
            "mr-5": hasScrollbar,
          }
        )}
      >
        {title}
      </h2>
      <div
        ref={scrollRef}
        id={title}
        className={cn("h-full overflow-auto pr-2", {
          "overflow-y-scroll": hasScrollbar,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default GridItem;
