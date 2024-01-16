"use client";

import { PortableText } from "@portabletext/react";

import Date from "@/components/date";
import { myPortableTextComponents } from "@/components/portable-text";
import PostsBanner from "@/components/posts-banner";
import { Project } from "@/types/Project";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="h-full">
      <div className="h-screen">
        <PostsBanner header={project.name} bannerImg={project.image} />
      </div>

      <div className="max-w-[1000px] px-4 h-full pt-[100px]">
        <header className="flex flex-col items-center justify-center pb-[30px]">
          <h1 className="text-black dark:text-white text-4xl md:text-7xl font-normal text-center">
            {project.name}
          </h1>
          <span className="pt-8 text-base">
            Publikuota - <Date dateString={project._createdAt} />
          </span>
        </header>

        <div className="text-lg text-black dark:text-white mt-5">
          <PortableText
            value={project.content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
