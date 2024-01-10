import { getSearchData } from "@/sanity/sanity-utils";

import AboutUs from "./_components/about-us";
import SearchResults from "../../_components/search-results";

interface SearchProps {
  searchParams: {
    name: string;
  };
}

const AboutPage = async ({ searchParams }: SearchProps) => {
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <div className="flex justify-center items-center h-full md:h-[800px] lg:h-[1000px]">
          <AboutUs />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center max-w-[1400px] mx-auto my-0 px-5 py-0">
          <SearchResults data={data} searchParams={searchParams.name} />
        </div>
      )}
    </>
  );
};

export default AboutPage;
