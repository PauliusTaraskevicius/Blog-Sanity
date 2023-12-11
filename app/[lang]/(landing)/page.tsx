import { getBlogs, getTips } from "@/sanity/sanity-utils";

import BlogList from "./(routes)/blog/_components/blog-list";
import HomeBanner from "./_components/home-banner";
import Collage from "./_components/collage";

export default async function HomePage() {
  const blogs = await getBlogs();
  const tips = await getTips();

  return (
    <>
      <HomeBanner header="News, usefull tips, exiting projects and more from Pauly" />
      <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
        <Collage tips={tips} />
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
