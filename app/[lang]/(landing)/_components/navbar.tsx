"use client";

import Link from "next/link";
import SearchInput from "./search-input";
import NavbarRoutes from "./navbar-routes";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { MailPlus } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Locale } from "@/i18n.config";
import MobileNavbar from "./mobile-navbar";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useModal } from "@/hooks/use-modal";


const Navbar = ({ lang }: { lang: Locale }) => {
  const scrolled = useScrollTop();
  const modal = useModal();

  return (
    <>
      <MobileNavbar lang={lang} />
      <nav
        className={cn(
          "hidden md:flex md:w-full fixed top-0 justify-between items-center z-50 border-b dark:border-white px-4 bg-white text-black",
          scrolled && "border-b border-white shadow-sm bg-white text-black"
        )}
      >
        <div className="h-[55px] left-0 flex items-center">
          <div className="h-full flex items-center text-center justify-center gap-x-4">
            <Link href={`/${lang}/`}>
              <div className="">LOGO</div>
            </Link>
            <NavbarRoutes lang={lang} />
          </div>
        </div>
        <div className="px-4">
          <SearchInput />
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  onClick={modal.onOpen}
                  className="bg-transparent text-black hover:bg-transparent"
                >
                  <MailPlus className="cursor-pointer w-5 h-5" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="text-xs">
                <p>
                  {lang === "lt"
                    ? "Prenumeruoti"
                    : lang === "ru"
                    ? "Подписаться"
                    : "Subscribe"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
