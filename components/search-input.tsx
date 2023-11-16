"use client";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="relative">
      <SearchIcon className="h-4 w-4 absolute top-3 left-3 text-black" />
      <Input
        // onChange={(e) => setValue(e.target.value)}
        // value={value}
        className="w-full md:w-[300px] xl:w-[600px] pl-9 rounded-full bg-transparent focus-visible:ring-slate-200 dark:focus-visible:ring-white"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
