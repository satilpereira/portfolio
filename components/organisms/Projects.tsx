import React from "react";
import GridItem from "@components/molecules/GridItem";
import projects from "@content/projects";
import Image from "next/image";
import Link from "next/link";

type ProjectsProps = {
  lang: "en" | "pt";
};

const Projects: React.FC<ProjectsProps> = (props) => {
  const { lang } = props;

  return (
    <GridItem title={lang === "en" ? "Projects" : "Projetos"}>
      <ul className='space-y-2'>
        {projects[lang].map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </GridItem>
  );
};

type ProjectsCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const ProjectCard: React.FC<ProjectsCardProps> = (props) => {
  const { title, description, image, url } = props;

  return (
    <div className='dark:text-shark-300 text-shark-700 dark:bg-shark-700 transition-all bg-zircon-200/30 hover:bg-zircon-300/30 hover:dark:bg-shark-600 hover:dark:text-shark-200'>
      <Link
        href={url}
        target='_blank'
        className='border flex flex-row gap-4  items-center p-2 rounded-md dark:border-shark-600 border-shark-700'
      >
        <figure className='border w-fit shrink-0 p-2 rounded-sm bg-shark-800/50 dark:border-shark-600 border-shark-700'>
          <Image src={image} alt={title} width={48} height={48} />
        </figure>
        <div>
          <h3 className='font-bold text-sm'>{title}</h3>
          <p className='text-xs'>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
