

import { getBlogs } from "@/sanity/sanity-utils";
import BlogList from "./blog-list";

const RecentBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <h1 className="text-3xl font-normal pt-[20px] text-center">
        Naujausi Įrašai
      </h1>
      <BlogList
        blogs={blogs.slice(0, 3)}
      />
    </>
  );
};

export default RecentBlogs;
