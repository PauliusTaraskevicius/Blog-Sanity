"use client";

import Image from "next/image";
import Link from "next/link";
import Date from "@/components/date";
import { Project } from "@/types/Project";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="relative h-full w-full opacity-[1px] lg:pt-[58px]">
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  height={500}
                  width={500}
                  className="h-56 lg:h-60 w-full object-cover bg-[#e8e8e8] "
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <span className="text-sm text-primary">
                  <Date dateString={project._createdAt} />
                </span>
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {project.name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {project.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
