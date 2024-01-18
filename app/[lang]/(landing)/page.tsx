import {
  getBlogs,
  getProjects,
  getSearchData,
  getTips,
} from "@/sanity/sanity-utils";

// import BlogList from "./(routes)/blog/_components/blog-list";
// import HomeBanner from "./_components/home-banner";
// import Collage from "./_components/collage";
// import SearchResults from "./_components/search-results";
// import PostsCarousel from "./_components/posts-carousel";
import dynamic from "next/dynamic";

const BlogList = dynamic(() => import("./(routes)/blog/_components/blog-list")) 
const HomeBanner = dynamic(() => import("./_components/home-banner")) 
const Collage = dynamic(() => import("./_components/collage")) 

const SearchResults = dynamic(() => import("./_components/search-results")) 
const PostsCarousel = dynamic(() => import("./_components/posts-carousel")) 

interface SearchProps {
  searchParams: {
    name: string;
  };
}

export default async function HomePage({ searchParams }: SearchProps) {
  const blogs = await getBlogs();
  const tips = await getTips();
  const projects = await getProjects();
  const data = await getSearchData(searchParams.name);

  return (
    <>
      {data.length === 0 ? (
        <>
          <HomeBanner header="Articles, usefull tips on software development, exiting projects and more from Pauly" />
          <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
            <>
              <Collage tips={tips} />
              <PostsCarousel data={projects} />
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
