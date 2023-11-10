import { getProjects } from "@/sanity/sanity-utils";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <div className="flex justify-center items-center h-full gap-x-4">
      {/* {projects.map((project) => (
        <div className="" key={project._id}>
          <h1>{project.name}</h1>
        </div>
      ))} */}
      HomePage
    </div>
  );
}
