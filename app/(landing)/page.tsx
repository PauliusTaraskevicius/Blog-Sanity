import { getProjects } from "@/sanity/sanity-utils";

export default async function HomePage() {
  const projects = await getProjects();

  return <div className="flex justify-center items-center h-full">Hello</div>;
}
