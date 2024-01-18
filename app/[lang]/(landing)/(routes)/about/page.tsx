import Image from "next/image";

import { getSearchData } from "@/sanity/sanity-utils";

import SearchResults from "../../_components/search-results";
import SocialIcons from "./_components/social-icons";

import profileImg from "@/public/images/profile.png";

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
          <div className="relative 2xl:flex-row flex flex-col justify-center 2xl:justify-end items-center w-full md:w-full 2xl:w-2/3 lg:h-[800px] 2xl:px-2 px-3 md:space-x-4 space-y-4 2xl:space-y-0 ">
            <div className="2xl:absolute 2xl:left-10 2xl:top-14 md:text-left w-full 2xl:w-2/3">
              <h1 className="about-font md:text-gray-200xl text-2xl md:text-3xl lg:text-4xl 2xl:text-[65px] uppercase lg:leading-none font-[900] text-center 2xl:text-start px-5">
                I love creating helpful tools and apps for everyone to enjoy
              </h1>
            </div>

            <div className="bg-gradient-to-r from-white via-neutral-300 to-neutral-400 flex justify-end h-auto w-4/5 md:w-3/5">
              <Image
                src={profileImg}
                alt="profile"
                priority
                quality={100}
                width={700}
                height={475}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
            </div>

            <div className="2xl:absolute 2xl:left-10 2xl:bottom-14">
              <SocialIcons />
            </div>
          </div>
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
