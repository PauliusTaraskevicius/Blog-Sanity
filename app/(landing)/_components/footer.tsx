"use client";

const Footer = () => {
  return (
    <footer className="hidden md:block w-full h-[33px] fixed bottom-0 border-t px-4 py-2">
      <div className="flex justify-start items-center gap-x-4">
        <div className="border-r border-muted-foreground pr-4">
          <p className="text-xs font-semibold text-muted-foreground">
            More Behance
          </p>
        </div>
        <div className="border-r border-muted-foreground pr-4">
          <p className="text-xs font-semibold text-muted-foreground">
            English
          </p>
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-x-2 text-xs font-semibold text-muted-foreground">
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">Privacy</li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">Cookie preferences</li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">Contact</li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">About us</li>
            <li className="px-1 cursor-pointer hover:text-blue-600 transition">Do not sell or share my personal information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
