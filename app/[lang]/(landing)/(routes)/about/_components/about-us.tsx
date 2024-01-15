"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

import profileImg from "@/public/images/profile.png";

const AboutUs = () => {
  return (
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
          width={650}
          height={650}
          priority
        />
      </div>

      <div className="2xl:absolute 2xl:left-10 2xl:bottom-14">
        <div className="flex flex-col w-[230px] md:w-[300px] px-2 py-2 space-y-2 font-medium">
          <a
            className="flex justify-between relative border-white shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition pl-2 py-1"
            href="https://github.com/PauliusTaraskevicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1">
              {" "}
              <Github className="h-4 w-4" />
              <span>Github</span>
            </div>

            <div className="flex justify-center items-center pr-2">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>

          <a
            className="flex justify-between border-white shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition pl-2 py-1"
            href="https://www.linkedin.com/in/paulius-tara%C5%A1kevi%C4%8Dius-916b83234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1">
              <Linkedin className="h-4 w-4" />
              <span>Linkedin</span>
            </div>

            <div className="flex justify-center items-center pr-2">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>

          <a
            className="flex justify-between border-white shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition pl-2 py-1"
            href="https://www.facebook.com/paulius.taraskevicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1">
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
            </div>
            <div className="flex justify-center items-center pr-2">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
