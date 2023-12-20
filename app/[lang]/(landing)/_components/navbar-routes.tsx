"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";

const NavbarRoutes = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/${lang}/blog`,
      label: lang === "lt" ? "Blogas" : lang === "ru" ? "Блог" : "Blog",
      active: pathname === `/${lang}/blog`,
    },
    {
      href: `/${lang}/projects`,
      label:
        lang === "lt" ? "Projektai" : lang === "ru" ? "Проекты" : "Projects",
      active: pathname === `/${lang}/projects`,
    },
    {
      href: `/${lang}/about`,
      label: lang === "lt" ? "Apie mus" : lang === "ru" ? "О нас" : "About us",
      active: pathname === `/${lang}/about`,
    },
    {
      href: `/${lang}/contact`,
      label:
        lang === "lt" ? "Kontaktai" : lang === "ru" ? "Kонтакт" : "Contacts",
      active: pathname === `/${lang}/contact`,
    },
  ];

  return (
    <div className="md:flex h-full px-2 md:space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex md:justify-center items-center text-[16px] py-4 md:text-base font-semibold whitespace-nowrap md:hover:border-black border-transparent border-b-[3px] transition-all duration-300 md:dark:hover:border-white",
            route.active &&
              "border-b-[3px] md:border-black md:dark:border-white transition-all"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
