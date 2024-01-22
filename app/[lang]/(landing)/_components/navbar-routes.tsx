"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";
import DropdownContact from "@/components/dropdown-contact";

const NavbarRoutes = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/blog`,
      label: lang === "lt" ? "Blogas" : lang === "ru" ? "Блог" : "Blog",
      active: pathname === `/${lang}/blog`,
    },
    {
      href: `/tips`,
      label: lang === "lt" ? "Patarimai" : lang === "ru" ? "Cоветы" : "Tips",
      active: pathname === `/${lang}/tips`,
    },
    {
      href: `/projects`,
      label:
        lang === "lt" ? "Projektai" : lang === "ru" ? "Проекты" : "Projects",
      active: pathname === `/${lang}/projects`,
    },
    {
      href: `/about`,
      label: lang === "lt" ? "Apie mus" : lang === "ru" ? "О нас" : "About us",
      active: pathname === `/${lang}/about`,
    },
    {
      href: `#`,
      // label:
      //   lang === "lt" ? "Kontaktai" : lang === "ru" ? "Kонтакт" : "Contacts",
      // active: pathname === `/${lang}/contact`,
      component: (
        <DropdownContact
          name={
            lang === "lt" ? "Kontaktai" : lang === "ru" ? "Kонтакт" : "Contacts"
          }
          customClass="flex md:justify-center items-center text-[16px] py-4 md:text-base font-semibold whitespace-nowrap border-none bg-transparent px-0 hover:bg-transparent hover:dark:text-white"
        />
      ),
    },
  ];

  return (
    <div className="md:flex h-full px-2 md:space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex md:justify-center items-center text-[16px] py-4 md:text-base font-semibold whitespace-nowrap md:hover:border-black border-transparent border-b-[3px] md:dark:hover:border-white",
            route.active &&
              "border-b-[3px] md:border-black md:dark:border-white"
          )}
        >
          {route.label}
          {route.component}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
