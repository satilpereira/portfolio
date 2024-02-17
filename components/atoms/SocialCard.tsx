import React from "react";

interface SocialCardProps {
  icon: string;
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
      rel='noopener noreferrer'
      className='flex items-center justify-center p-4 space-x-2 text-white bg-gray-800 rounded-md'
    >
      SocialCard
    </a>
  );
};

export default SocialCard;
