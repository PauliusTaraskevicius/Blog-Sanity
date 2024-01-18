import { getBlogs } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../_components/search-results"));
const HomeBanner = dynamic(() => import("../../_components/home-banner"));
const BlogList = dynamic(() => import("./_components/blog-list"));

interface SearchProps {
  searchParams: {
    name: string;
  };
}

const Blogs = async ({ searchParams }: SearchProps) => {
  const blogs = await getBlogs();
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <>
          <HomeBanner header="Most recent articles on software development" />
          <BlogList blogs={blogs} />
        </>
      ) : (
        <SearchResults data={data} searchParams={searchParams.name} />
      )}
    </>
  );
};

export default Blogs;
