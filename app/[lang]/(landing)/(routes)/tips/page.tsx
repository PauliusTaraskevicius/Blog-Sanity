import { getTips } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";
import TipsList from "./_components/tips-list";
import HomeBanner from "../../_components/home-banner";
import SearchResults from "../../_components/search-results";

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
