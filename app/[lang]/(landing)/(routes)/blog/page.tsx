import { getBlogs } from "@/sanity/sanity-utils";
import BlogList from "./_components/blog-list";
import BlogBanner from "./_components/blogBanner";


const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <BlogBanner header=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <BlogList blogs={blogs} />
    </>
  );
};

export default Blogs;
