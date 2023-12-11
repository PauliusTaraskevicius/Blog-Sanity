"use client";

import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/components/portable-text";
import { Tip } from "@/types/Tip";

import BlogBanner from "../../blog/_components/blogBanner";
import Date from "@/components/date";

interface TipDetailsProps {
  tip: Tip;
}

const TipDetails = ({ tip }: TipDetailsProps) => {
  return (
    <div className="h-full">
      <div className="h-screen">
        <BlogBanner header={tip.name} bannerImg={tip.image} />
      </div>

      <div className="max-w-[1000px] px-4 h-full pt-[100px]">
        <header className="flex flex-col items-center justify-center pb-[30px]">
          <h1 className="text-black dark:text-white text-4xl md:text-7xl font-normal">
            {tip.name}
          </h1>
          <span className="pt-8 text-base">
            Publikuota - <Date dateString={tip._createdAt} />
          </span>
        </header>

        <div className="text-lg text-gray-700 mt-5">
          <PortableText
            value={tip.content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
