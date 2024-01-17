"use client";

import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

const SocialIcons = () => {
  return (
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
  );
};

export default SocialIcons;
