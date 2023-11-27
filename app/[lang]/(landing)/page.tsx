import { getBlogs, getProjects } from "@/sanity/sanity-utils";

import Banner from "./_components/banner";
import ProjectsList from "./(routes)/projects/_components/projects-list";
import BlogList from "./(routes)/blog/_components/blog-list";

export default async function HomePage() {
  const projects = await getProjects();
  const blogs = await getBlogs();

  return (
    <>
      <Banner header="News, usefull tips, exiting projects and more from Pauly" />
      {/* <ProjectsList projects={projects}/> */}
      <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
