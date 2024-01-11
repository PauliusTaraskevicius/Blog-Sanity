import Link from "next/link";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "@/components/locale-switcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang);

  return (
    <footer className="md:block w-full h-[33px] fixed bottom-0 border-t px-4 py-2 bg-white dark:bg-transparent">
      <div className="flex justify-start items-center gap-x-4">
        <div className="flex items-center justify-center border-r border-muted-foreground pr-4 transition">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex group items-center justify-center">
              {" "}
              <p className="text-xs font-semibold text-muted-foreground">
                {footer.blog}
              </p>
              <ChevronDown
                className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-muted-foreground text-center px-0 py-0">
              <DropdownMenuItem>
                <Link href={`/${lang}/blog`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    {footer.blog}
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${lang}/tips`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    {footer.tips}
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${lang}/projects`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    {footer.projects}
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${lang}/about`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    {footer.about}
                  </p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${lang}/contact`} className="w-full">
                  <p className="hover:bg-blue-600 hover:text-white transition cursor-pointer leading-loose">
                    {footer.contact}
                  </p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex border-r border-muted-foreground pr-4">
          <LocaleSwitcher lang={lang} />
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-x-2 text-xs font-semibold text-muted-foreground">
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              {footer.privacy}
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              {footer.cookies}
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              {footer.contact}
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              {footer.about}
            </li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">
              {footer.warning}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
