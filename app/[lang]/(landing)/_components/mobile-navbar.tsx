"use client";

import Link from "next/link";

import { Locale } from "@/i18n.config";

import { Menu } from "lucide-react";
import NavbarRoutes from "./navbar-routes";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";



const MobileNavbar = ({ lang }: { lang: Locale }) => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-between items-center md:hidden hover:opacity-75 transition w-full h-[55px] border-b shadow-sm">
        <Menu  className="ml-2 text-black dark:text-white" />
        <h1 className="pr-2">LOGO</h1>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 bg-white">
        <div className="flex justify-center items-center py-[150px]">
          <div className="w-full border-r shadow-sm">
            <NavbarRoutes lang={lang} />
            <div className="border-b shadow-sm"/>
            <ul className="text-[11px] px-2 font-semibold">
              <li className="py-2">
                <Link href={`/${lang}/privacy`}>{lang === "lt" ? "Privatumo politika" : lang === "ru" ? "Kонфиденциальность" : "Privacy"}</Link>
              </li>
              <li className="py-2">
                <Link href={`/${lang}/cookies`}>{lang === "lt" ? "Slapukai" : lang === "ru" ? "Pеченье" : "Cookies"}</Link>
              </li>
              <li className="py-2">
                <Link href={`/${lang}/contact`}>{lang === "lt" ? "Kontaktai" : lang === "ru" ? "Kонтакт" : "Contact"}</Link>
              </li>
              <li className="py-2">
                <Link href={`/${lang}/about`}>{lang === "lt" ? "Apie mus" : lang === "ru" ? "О нас" : "About"}</Link>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
