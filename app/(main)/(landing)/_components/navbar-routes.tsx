"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import DropdownContact from "@/components/dropdown-contact";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/blog`,
      label: "Blog",
      active: pathname === `/blog`,
    },
    {
      href: `/tips`,
      label: "Tips",
      active: pathname === `/tips`,
    },
    {
      href: `/projects`,
      label: "Projects",
      active: pathname === `/projects`,
    },
    {
      href: `/about`,
      label: "About us",
      active: pathname === `/about`,
    },
    {
      href: `#`,
      component: (
        <DropdownContact
          name='Contacts'
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
