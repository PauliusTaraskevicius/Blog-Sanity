import { getBlogs, getSearchData, getTips } from "@/sanity/sanity-utils";

import BlogList from "./(routes)/blog/_components/blog-list";
import HomeBanner from "./_components/home-banner";
import Collage from "./_components/collage";

import SearchResults from "./_components/search-results";


interface SearchProps {
  searchParams: {
    name: string;
  };
}

export default async function HomePage({ searchParams }: SearchProps) {
  const blogs = await getBlogs();
  const tips = await getTips();
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <>

          <HomeBanner header="News, usefull tips, exiting projects and more from Pauly" />
          <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
            <>
              <Collage tips={tips} />
              <BlogList blogs={blogs} />
            </>
          </div>
        </>
      ) : (
        <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
          <SearchResults data={data} searchParams={searchParams.name} />
        </div>
      )}
    </>
  );
}
