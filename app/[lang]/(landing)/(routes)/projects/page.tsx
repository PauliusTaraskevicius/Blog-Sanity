import { getProjects } from "@/sanity/sanity-utils";
import ProjectsList from "./_components/projects-list";

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
      <ProjectsList projects={projects} />
    </div>
  );
};

export default ProjectsPage;
