import { getBlog } from "@/sanity/sanity-utils";

import BlogDetails from "../_components/blog-details";
import RecentBlogs from "../_components/recent-blogs";

interface BlogSlugProps {
  params: { blog: string };
}

const Blog = async ({ params }: BlogSlugProps) => {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <BlogDetails blog={blog} />
        </div>
        <RecentBlogs />
      </div>
    </div>
  );
};

export default Blog;
