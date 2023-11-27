"use client";
import Image from "next/image";

import { Project } from "@/types/Project";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="flex justify-center items-center gap-x-4 bg-red-600">
      {projects.map((project) => (
        <div
          className="aspect-square w-full relative overflow-hidden rounded-xl"
          key={project._id}
        >
          <h1>{project.name}</h1>
          <div>
            <Image
              src={project.image}
              fill
              className="object-cover h-full w-full hover:scale-110 transition"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
