import { getBlog } from "@/sanity/sanity-utils";

import BlogDetails from "../_components/blog-details";

interface BlogSlugProps {
  params: { blog: string };
}

const Blog = async ({ params }: BlogSlugProps) => {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Blog;
