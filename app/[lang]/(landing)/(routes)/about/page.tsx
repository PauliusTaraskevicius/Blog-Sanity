import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import profileImg from "@/public/images/profile.png";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-pink-300">
      <div className="relative md:flex-row flex flex-col justify-center 2xl:justify-end items-center w-full h-full md:w-full 2xl:w-2/3 lg:h-[800px] 2xl:px-2 px-3 md:space-x-4 space-y-4 2xl:space-y-0 bg-red-500">
        <div className="2xl:absolute 2xl:left-10 2xl:top-14 md:text-left text-center 2xl:text-start w-full 2xl:w-2/3  bg-green-300">
          <h1 className="about-font text-3xl md:text-4xl 2xl:text-[65px] uppercase md:leading-none font-[900]">
            I love creating helpful tools and apps for everyone to enjoy
          </h1>
        </div>

        <div className="profile-bg flex justify-end w-full h-auto 2xl:w-3/5">
          <Image
            src={profileImg}
            alt="profile"
            width={650}
            height={650}
            priority
          />
        </div>

        <div className="2xl:absolute 2xl:left-10 2xl:bottom-14 bg-yellow-300 ">
          <div className="flex flex-col w-[250px] px-2 py-2 space-y-2">
            <Link className="flex justify-between relative border-white shadow-md" href="#">
              <span>Github</span>
              <ArrowUpRight className="h-5 w-5"/>
            </Link>

            <Link className="flex justify-between border-white shadow-md" href="#">
              <span>Linkedin</span>
              <ArrowUpRight className="h-5 w-5"/>
            </Link>

            <Link className="flex justify-between border-white shadow-md" href="#">
              <span>Facebook</span>
              <ArrowUpRight className="h-5 w-5"/>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
