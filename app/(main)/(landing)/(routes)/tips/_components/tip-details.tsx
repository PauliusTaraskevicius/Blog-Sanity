"use client";

import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/components/portable-text";
import { Tip } from "@/types/Tip";


import Date from "@/components/date";
import PostsBanner from "@/components/posts-banner";

interface TipDetailsProps {
  tip: Tip;
}

const TipDetails = ({ tip }: TipDetailsProps) => {
  return (
    <div className="h-full">
      <div className="h-screen">
        <PostsBanner header={tip.name} bannerImg={tip.image} />
        
      </div>

      <div className="max-w-[1000px] px-4 h-full pt-[100px]">
        <header className="flex flex-col items-center justify-center pb-[30px]">
          <h1 className="text-black dark:text-white text-4xl md:text-7xl font-normal text-center">
            {tip.name}
          </h1>
          <span className="pt-8 text-base">
            Publikuota - <Date dateString={tip._createdAt} />
          </span>
        </header>

        <div className="text-lg text-black dark:text-white mt-5">
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
