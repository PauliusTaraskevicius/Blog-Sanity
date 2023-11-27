"use client";

import { useState } from "react";
import Link from "next/link";

import SearchInput from "@/components/search-input";
import NavbarRoutes from "./navbar-routes";
import { ModeToggle } from "@/components/mode-toggle";

import { MailPlus, MailMinus } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toast from "react-hot-toast";
import { Locale } from "@/i18n.config";
import MobileNavbar from "./mobile-navbar";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

const Navbar = ({ lang }: { lang: Locale }) => {
  const [subscribe, setSubscribe] = useState(false);

  const scrolled = useScrollTop();

  const subscribeEmail = () => {
    setSubscribe(true);
    toast.success("You have successfully subscribed!");
  };

  const unSubscribeEmail = () => {
    setSubscribe(false);
    toast.error("You have successfully unsubscribed!");
  };

  return (
    <>
      <MobileNavbar lang={lang} />
      <nav
        className={cn(
          "hidden md:flex md:w-full fixed top-0 justify-between items-center z-50 border-b px-4 bg-transparent",
          scrolled && "border-b- shadow-sm bg-white"
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
                {subscribe ? (
                  <MailMinus
                    onClick={unSubscribeEmail}
                    className="cursor-pointer w-5 h-5"
                  />
                ) : (
                  <MailPlus
                    onClick={subscribeEmail}
                    className="cursor-pointer w-5 h-5"
                  />
                )}
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
