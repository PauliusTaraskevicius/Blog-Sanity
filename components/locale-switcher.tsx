"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import { Locale } from "@/i18n.config";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex group items-center justify-center">
        {" "}
        <p className="text-xs font-semibold text-muted-foreground">
          {lang === "lt" ? "Lietuvių" : lang === "ru" ? "Pусский" : "English"}
        </p>
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-muted-foreground text-center px-0 py-0">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="w-full hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose"
            >
              {locale === "lt"
                ? "Lietuvių"
                : locale === "ru"
                ? "Pусский"
                : "English"}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
