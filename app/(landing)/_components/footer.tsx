"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hidden md:block w-full h-[33px] fixed bottom-0 border-t px-4 py-2">
      <div className="flex justify-start items-center gap-x-4">
        <div className="flex items-center justify-center border-r border-muted-foreground pr-4 transition">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex group items-center justify-center">
              {" "}
              <p className="text-xs font-semibold text-muted-foreground">
                Blog
              </p>
              <ChevronDown
                className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-muted-foreground text-center px-0 py-0">
              <DropdownMenuItem>
                <Link href="/blog" className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Blog
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects" className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Projects
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    About
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Contact
                  </p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex border-r border-muted-foreground pr-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex group items-center justify-center">
              {" "}
              <p className="text-xs font-semibold text-muted-foreground">
                English
              </p>
              <ChevronDown
                className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-muted-foreground text-center px-0 py-0">
              <DropdownMenuItem>
                <p className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                  English
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                  Lithuanian
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                  Polski
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                  Russian
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                  Suomi
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="">
          <ul className="flex justify-center items-center gap-x-2 text-xs font-semibold text-muted-foreground">
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              Privacy
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              Cookie preferences
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              Contact
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              About us
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              Do not sell or share my personal information
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
