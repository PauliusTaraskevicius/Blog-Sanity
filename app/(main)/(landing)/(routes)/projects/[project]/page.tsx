import { getProject } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../../_components/search-results")) 
const RecentProjects = dynamic(() => import("../_components/recent-projects")) 
const ProjectDetails = dynamic(() => import("../_components/project-details")) 


interface ProjectSlugProps {
  params: { project: string };
  searchParams: {
    name: string;
  };
}

const Project = async ({ params, searchParams }: ProjectSlugProps) => {
  const slug = params.project;
  const project = await getProject(slug);
  const data = await getSearchData(searchParams.name);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center pb-10">
          {data.length === 0 ? (
            <ProjectDetails project={project} />
          ) : (
            <SearchResults data={data} searchParams={searchParams.name} />
          )}
        </div>
        <RecentProjects />
      </div>
    </div>
  );
};

export default Project;