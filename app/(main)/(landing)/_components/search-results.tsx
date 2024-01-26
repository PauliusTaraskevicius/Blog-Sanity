"use client";

import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/types/Blog";
import { Project } from "@/types/Project";
import { Tip } from "@/types/Tip";
import Date from "@/components/date";
import Banner from "@/components/banner";

interface SearchResults {
  data: Blog[] | Tip[] | Project[];
  searchParams: string;
}

const SearchResults = ({ data, searchParams }: SearchResults) => {
  return (
    <div className="relative h-full w-full opacity-[1px] lg:pt-[58px]">
      <Banner header={`"${searchParams}"`} />
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {data.map((result) => (
          <div
            key={result.name}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/${result.type}/${result.slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  height={500}
                  width={500}
                  className="h-56 lg:h-60 w-full object-cover bg-[#e8e8e8] "
                  src={result.image}
                  alt={result.name}
                />
              </div>
              <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <span className="text-sm text-primary">
                  <Date dateString={result._createdAt} />
                </span>
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {result.name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {result.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
