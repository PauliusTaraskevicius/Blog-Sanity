import { getBlogs, getProjects } from "@/sanity/sanity-utils";

import ProjectsList from "./projects-list";

const RecentProjects = async () => {
  const projects = await getProjects();

  return (
    <>
      <h1 className="text-3xl font-normal pt-[20px] text-center">
        Naujausi Įrašai
      </h1>
      <ProjectsList projects={projects.slice(0, 3)} />
    </>
  );
};

export default RecentProjects;
