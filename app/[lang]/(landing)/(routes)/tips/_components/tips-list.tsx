"use client";
import Link from "next/link";
import Image from "next/image";
import { Tip } from "@/types/Tip";
import Date from "@/components/date";

interface TipsListProps {
  tips: Tip[];
}
 
const TipsList = ({ tips }: TipsListProps) => {
  return (
    <div className="relative h-full w-full opacity-[1px] pt-[58px]">
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/tips/${tip.slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  height={500}
                  width={500}
                  className="h-56 lg:h-60 w-full object-cover bg-[#e8e8e8] "
                  src={tip.image}
                  alt={tip.name}
                />
              </div>
              <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <span className="text-sm text-primary">
                  <Date dateString={tip._createdAt} />
                </span>
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tip.name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tip.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsList;
