"use client";
import Image from "next/image";
import Link from "next/link";

import { Tip } from "@/types/Tip";

interface CollageProps {
  tips: Tip[];
}

const Collage = ({ tips }: CollageProps) => {
  return (
    <div className="h-full w-full">
      <div className="relative w-full lg:h-1/2 flex justify-center items-center">
        <div
          key={tips[0]._id}
          className="rounded-lg max-w-xs md:max-w-none group"
        >
          <Link href={`/tips/${tips[tips.length - 1].slug}`}>
            <div className="cursor-pointer group-hover:brightness-90 transition">
              <Image
                priority
                quality={100}
                width={700}
                height={475}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="h-56 lg:h-96 2xl:h-[34rem] w-screen  object-cover 2xl:object-fill"
                src={tips[tips.length - 1].image}
                alt={tips[tips.length - 1].description}
              />
              <div className="lg:hidden pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[tips.length - 1].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[tips.length - 1].description}
                </p>
              </div>

              <div className="hidden lg:block absolute bottom-5 left-5 bg-white dark:bg-transparent w-1/2 p-10">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[tips.length - 1].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[tips.length - 1].description}
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
              key={tips[tips.length - 2]._id}
              className="rounded-lg max-w-xs md:max-w-none group"
            >
              <Link href={`/tips/${tips[tips.length - 2].slug}`}>
                <div className="cursor-pointer group-hover:brightness-90 transition">
                  <Image
                    loading="lazy"
                    quality={100}
                    width={700}
                    height={475}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                    className="h-56 lg:h-3/4 w-full object-cover bg-[#e8e8e8] "
                    src={tips[tips.length - 2].image}
                    alt={tips[tips.length - 2].name}
                  />
                </div>
                <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                  <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                    {tips[tips.length - 2].name}
                  </h2>
                  <p className="text-lg overflow-hidden cursor-pointer">
                    {tips[tips.length - 2].description}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center md:block h-full w-full py-5">
          <div
            key={tips[tips.length - 3]._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/tips/${tips[tips.length - 3].slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  loading="lazy"
                  quality={100}
                  width={700}
                  height={475}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="h-56 lg:h-full w-full object-cover"
                  src={tips[tips.length - 3].image}
                  alt={tips[tips.length - 3].name}
                />
              </div>
              <div className="lg:hidden pt-[20px] pb-[20px] bg-white dark:bg-transparent">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[tips.length - 3].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[tips.length - 3].description}
                </p>
              </div>
              <div className="hidden lg:block absolute bottom-10 left-5 bg-white dark:bg-transparent w-1/2 p-10">
                <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                  {tips[tips.length - 3].name}
                </h2>
                <p className="text-lg overflow-hidden cursor-pointer">
                  {tips[tips.length - 3].description}
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
