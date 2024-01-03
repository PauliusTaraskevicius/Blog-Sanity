import { getBlogs } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import BlogList from "./_components/blog-list";
import HomeBanner from "../../_components/home-banner";
import SearchResults from "../../_components/search-results";

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
          <HomeBanner header="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <BlogList blogs={blogs} />
        </>
      ) : (
        <SearchResults data={data} searchParams={searchParams.name} />
      )}
    </>
  );
};

export default Blogs;
