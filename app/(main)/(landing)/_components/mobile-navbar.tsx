"use client";

import Link from "next/link";

import { Menu } from "lucide-react";
import { Code2 } from "lucide-react";

import NavbarRoutes from "./navbar-routes";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import SearchInput from "./search-input";
import SubscribeNewsLetter from "@/components/subscribe-newsletter";
import CookiesModal from "@/components/cookies-modal";

const MobileNavbar = () => {
  const scrolled = useScrollTop();

  return (
    <Sheet>
      <SheetHeader className="block lg:hidden fixed w-1/2 translate-y-2 translate-x-1/2 z-[99999]">
        <SearchInput />
      </SheetHeader>
      <SheetTrigger
        className={cn(
          "fixed flex justify-between items-center lg:hidden hover:opacity-75 transition w-full h-[55px] border-b shadow-sm bg-white z-50",
          scrolled && "border-b- shadow-sm bg-white"
        )}
      >
        <Menu className="ml-2 text-black dark:text-white" />
      </SheetTrigger>

      <SheetContent side="left" className="p-0 bg-white">
        <div className="flex justify-center items-center py-[100px] ">
          <div className="w-full border-r shadow-sm">
            <div className="flex justify-center items-center space-x-1 px-2  ">
              <Code2 className="w-8 h-8 dark:text-white" />
              <div className="logo text-2xl font-bold dark:text-white">
                <Link href="/">Paulydev</Link>
              </div>
            </div>
            <div className="pt-10">
              <NavbarRoutes />
            </div>
            <div className="pb-4">
              <SubscribeNewsLetter />
            </div>

            <ul className="text-[11px] px-2 font-semibold">
              <li className="py-2">
                <CookiesModal trigger="Cookies" />
              </li>
              <li className="py-2">
                <Link href={`/about`}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
