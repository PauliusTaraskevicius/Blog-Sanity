"use client";

import Link from "next/link";

import SearchInput from "./search-input";
import NavbarRoutes from "./navbar-routes";
import { ModeToggle } from "@/components/mode-toggle";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Locale } from "@/i18n.config";
import MobileNavbar from "./mobile-navbar";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import NewsletterModal from "@/components/newsletter-modal";
import { usePathname } from "next/navigation";

import { MailPlus } from "lucide-react";

const Navbar = ({ lang }: { lang: Locale }) => {
  const scrolled = useScrollTop();
  const pathname = usePathname();

  const pages =
    pathname === `/${lang}` ||
    pathname === `/${lang}/about` ||
    pathname === `/${lang}/contact` ||
    pathname === `/${lang}/projects` ||
    pathname === `/${lang}/tips` ||
    pathname === `/${lang}/blog`;

  return (
    <>
      <MobileNavbar lang={lang} />
      <nav
        className={cn(
          "hidden md:flex md:w-full fixed top-0 justify-between items-center z-50 border-b dark:border-white px-4 bg-transparent ",
          pages ? "text-black dark:text-white" : "text-white dark:text-black",
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
                <NewsletterModal />
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
