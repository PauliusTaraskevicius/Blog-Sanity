import { getBlogs } from "@/sanity/sanity-utils";
import BlogList from "./_components/blog-list";
import HomeBanner from "../../_components/home-banner";

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <HomeBanner header="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <BlogList blogs={blogs} />
    </>
  );
};

export default Blogs;
