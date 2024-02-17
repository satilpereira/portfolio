import React from "react";
import GridItem from "@components/molecules/GridItem";
import SocialCard, {
  SocialCardProps,
} from "@components/atoms/SocialCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials: SocialCardProps[] = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    url: "https://github.com/satilpereira",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/satil-pereira/",
  },
];

const Social = () => {
  return (
    <GridItem title='Social'>
      <div className='flex flex-col gap-2'>
        {socials.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </GridItem>
  );
};

export default Social;
