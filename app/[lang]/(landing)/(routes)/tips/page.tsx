import { getTips } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../_components/search-results"));
const HomeBanner = dynamic(() => import("../../_components/home-banner"));
const TipsList = dynamic(() => import("./_components/tips-list"));

interface SearchProps {
  searchParams: {
    name: string;
  };
}

const Tips = async ({ searchParams }: SearchProps) => {
  const tips = await getTips();
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <>
          <HomeBanner header="Tips, tricks for software development" />
          <TipsList tips={tips} />
        </>
      ) : (
        <SearchResults data={data} searchParams={searchParams.name} />
      )}
    </>
  );
};

export default Tips;
