import { getProjects } from "@/sanity/sanity-utils";
import ProjectsList from "./_components/projects-list";
import { getSearchData } from "@/sanity/sanity-utils";

import HomeBanner from "../../_components/home-banner";
import SearchResults from "../../_components/search-results";

interface SearchProps {
  searchParams: {
    name: string;
  };
}

const ProjectsPage = async ({ searchParams }: SearchProps) => {
  const projects = await getProjects();
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <>
          <HomeBanner header="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <ProjectsList projects={projects} />
        </>
      ) : (
        <SearchResults data={data} searchParams={searchParams.name} />
      )}
    </>
  );
};

export default ProjectsPage;
