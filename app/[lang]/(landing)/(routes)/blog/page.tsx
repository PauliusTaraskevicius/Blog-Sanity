import { getBlogs } from "@/sanity/sanity-utils";
import BlogList from "./_components/blog-list";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default BlogPage;
