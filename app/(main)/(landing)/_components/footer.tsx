import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import CookiesModal from "@/components/cookies-modal";

async function Footer() {
  return (
    <footer className="md:block w-full h-[33px] fixed bottom-0 border-t px-4 py-2 bg-white dark:bg-black">
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
                <Link href={`/blog`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Blog
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/tips`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Tips
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/projects`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    Projects
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/about`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    About
                  </p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-x-2 text-xs font-semibold text-muted-foreground">
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              <CookiesModal trigger="Cookies" />
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              <Link href="/about">About</Link>
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              Do not sell or share my personal information
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
