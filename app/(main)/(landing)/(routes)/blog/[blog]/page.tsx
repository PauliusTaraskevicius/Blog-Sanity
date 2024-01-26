import { getBlog } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../../_components/search-results")) 
const RecentBlogs = dynamic(() => import("../_components/recent-blogs")) 
const BlogDetails = dynamic(() => import("../_components/blog-details")) 

interface BlogSlugProps {
  params: { blog: string };
  searchParams: {
    name: string;
  };
}

const Blog = async ({ params, searchParams }: BlogSlugProps) => {
  const slug = params.blog;
  const blog = await getBlog(slug);
  const data = await getSearchData(searchParams.name);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center pb-10">
          {data.length === 0 ? (
            <BlogDetails blog={blog} />
          ) : (
            <SearchResults data={data} searchParams={searchParams.name} />
          )}
        </div>
        <RecentBlogs />
      </div>
    </div>
  );
};

export default Blog;
