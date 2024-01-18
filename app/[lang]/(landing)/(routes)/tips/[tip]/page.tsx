import { getTip } from "@/sanity/sanity-utils";
import { getSearchData } from "@/sanity/sanity-utils";

import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../../_components/search-results")) 
const RecentBlogs = dynamic(() => import("../../blog/_components/recent-blogs")) 
const TipDetails = dynamic(() => import("../_components/tip-details")) 

interface TipSlugProps {
  params: { tip: string };
  searchParams: {
    name: string;
  };
}

const Blog = async ({ params, searchParams }: TipSlugProps) => {
  const slug = params.tip;
  const tip = await getTip(slug);
  const data = await getSearchData(searchParams.name);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center pb-10">
          {data.length === 0 ? (
            <TipDetails tip={tip} />
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
