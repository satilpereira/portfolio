import React from "react";

export interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const SocialCard: React.FC<
  SocialCardProps & React.HTMLAttributes<HTMLAnchorElement>
> = (props) => {
  const { icon, title, url, ...rest } = props;

  return (
    <a
      href={url}
      {...rest}
      target='_blank'
      rel='external nofollow noreferrer noopener'
      className='flex items-center text-sm justify-start p-2 space-x-2 dark:bg-shark-700 text-shark-700 bg-zircon-200/30 hover:bg-zircon-300/30 dark:text-shark-300 rounded-md hover:dark:bg-shark-600 hover:dark:text-shark-200 transition-all duration-300 ease-in-out'
    >
      <div>{icon}</div>
      <div>{title}</div>
    </a>
  );
};

export default SocialCard;
