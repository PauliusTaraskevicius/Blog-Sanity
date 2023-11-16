"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";

const NavbarRoutes = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();

  const routes = [
    { href: "/blog", label: lang === "lt" ? "Blogas" : lang === "ru" ? "Блог" : "Blog", active: pathname === "/blog" },
    { href: "/projects", label: lang === "lt" ? "Projektai" : lang === "ru" ? "Проекты" : "Projects", active: pathname === "/projects" },
    { href: "/about", label: lang === "lt" ? "Apie mus" : lang === "ru" ? "О нас" : "About us", active: pathname === "/about" },
    { href: "/contact", label: lang === "lt" ? "Kontaktai" : lang === "ru" ? "Kонтакт" : "Contacts", active: pathname === "/contact" },
  ];

  return (
    <div className="flex h-full space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex justify-center items-center text-base font-semibold whitespace-nowrap hover:border-black border-transparent border-b-[3px] transition-all duration-300 dark:hover:border-white",
            route.active &&
              "border-b-[3px] border-black transition-all dark:border-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
