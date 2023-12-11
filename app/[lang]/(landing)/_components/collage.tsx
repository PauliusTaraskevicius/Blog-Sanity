"use client";
import Image from "next/image";
import Link from "next/link";

import { Tip } from "@/types/Tip";

interface CollageProps {
  tips: Tip[];
}

const Collage = ({ tips }: CollageProps) => {

  return (
    <div className="h-full w-full pt-[58px]">
      <div className="relative w-full lg:h-1/2 flex justify-center items-center ">
        <div
          key={tips[0]._id}
          className="rounded-lg max-w-xs md:max-w-none group"
        >
          <Link href={`/tips/${tips[0].slug}`}>
            <div className="cursor-pointer group-hover:brightness-90 transition">
              <Image
                priority
                height={500}
                width={500}
                className="h-56 lg:h-1/2 w-screen object-cover"
                src={tips[0].image}
                alt={tips[0].name}
              />
              <div className="lg:hidden pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[0].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[0].description}
                </p>
              </div>

              <div className="hidden lg:block absolute bottom-5 left-5 bg-white dark:bg-transparent w-1/2 p-10">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[0].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[0].description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 md:flex">
        <div className="h-full w-full md:w-2/3 py-5 md:pr-5">
          <div className="flex justify-center items-center md:justify-start">
            <div
              key={tips[1]._id}
              className="rounded-lg max-w-xs md:max-w-none group"
            >
              <Link href={`/tips/${tips[1].slug}`}>
                <div className="cursor-pointer group-hover:brightness-90 transition">
                  <Image
                    priority
                    height={500}
                    width={500}
                    className="h-56 lg:h-3/4 w-full object-cover bg-[#e8e8e8] "
                    src={tips[1].image}
                    alt={tips[1].name}
                  />
                </div>
                <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                  <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                    {tips[1].name}
                  </h2>
                  <p className="text-lg overflow-hidden cursor-pointer">
                    {tips[1].description}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center md:block h-full w-full py-5">
          <div
            key={tips[2]._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/tips/${tips[2].slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  priority
                  height={500}
                  width={500}
                  className="h-56 lg:h-full w-full object-cover"
                  src={tips[2].image}
                  alt={tips[2].name}
                />
              </div>
              <div className="lg:hidden pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[2].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[2].description}
                </p>
              </div>
              <div className="hidden lg:block absolute bottom-10 left-5 bg-white dark:bg-transparent w-1/2 p-10">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[2].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[2].description}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
