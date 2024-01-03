import { getBlog, getProject } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";



import SearchResults from "../../../_components/search-results";
import ProjectDetails from "../_components/project-details";
import RecentProjects from "../_components/recent-projects";

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