"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const routes = [
    { href: "/blog", label: "Blog", active: pathname === "/blog" },
    { href: "/projects", label: "Projects", active: pathname === "/projects" },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ];

  return (
    <div className="flex h-full space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex justify-center items-center text-base font-semibold hover:border-black border-transparent border-b-[3px] transition-all duration-300 dark:hover:border-white",
            route.active && "border-b-[3px] border-black transition-all dark:border-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
