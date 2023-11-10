"use client";

import SearchInput from "@/components/search-input";
import NavbarRoutes from "./navbar-routes";
import { ModeToggle } from "@/components/mode-toggle";

import Link from "next/link";

import { MailPlus, MailMinus } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toast from "react-hot-toast";
import { useState } from "react";

const Navbar = () => {
  const [subscribe, setSubscribe] = useState(false);

  const subscribeEmail = () => {
    setSubscribe(true);
    toast.success("You have successfully subscribed!");
  };

  const unSubscribeEmail = () => {
    setSubscribe(false);
    toast.error("You have successfully unsubscribed!");
  };

  return (
    <nav className="flex justify-between items-center z-[99999] border-b px-4">
      <div className="h-[55px] left-0 flex items-center">
        <div className="h-full flex items-center text-center justify-center gap-x-4">
          <Link href="/">
            <div className="">LOGO</div>
          </Link>
          <NavbarRoutes />
        </div>
      </div>
      <div className="">
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
              <p>Subscribe</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
