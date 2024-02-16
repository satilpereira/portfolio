import React from "react";

interface GridItemProps {
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = (props) => {
  const { children } = props;

  return (
    <div className='w-full h-full dark:bg-shark-800 rounded-lg dark:border-shark-700 border p-2'>
      {children}
    </div>
  );
};

export default GridItem;
