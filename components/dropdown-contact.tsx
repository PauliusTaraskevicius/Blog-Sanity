"use client";
import Link from "next/link";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { FileCheck2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownContactProps {
  name: string;
  customClass: string;
}

const DropdownContact = ({ name, customClass }: DropdownContactProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" group flex justify-center items-center space-x-1">
          <Button
            variant="outline"
            className={customClass}
            aria-label="contact"
          >
            {name}
          </Button>
          <Play className="w-3 h-3 rotate-90 transition duration-200 group-data-[state=open]:-rotate-90 fill-black dark:fill-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>Social contact</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-2">
          <DropdownMenuItem className="px-2 hover:bg-gray-200 transition">
            {" "}
            <Link
              className="flex justify-center items-center py-1"
              href="https://github.com/PauliusTaraskevicius"
            >
              <div className="flex justify-center items-center space-x-1">
                {" "}
                <Github className="h-4 w-4" />
                <span>Github</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 hover:bg-gray-200 transition">
            {" "}
            <Link
              className="flex justify-center items-center py-1"
              href="https://www.linkedin.com/in/paulius-tara%C5%A1kevi%C4%8Dius-916b83234/"
            >
              <div className="flex justify-center items-center space-x-1">
                {" "}
                <Linkedin className="h-4 w-4" />
                <span>Linkedin</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 hover:bg-gray-200 transition">
            {" "}
            <Link
              className="flex justify-center items-center py-1"
              href="https://www.facebook.com/paulius.taraskevicius"
            >
              <div className="flex justify-center items-center space-x-1">
                {" "}
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-2 hover:bg-gray-200 transition">
            {" "}
            <Link
              className="flex justify-center items-center py-1"
              href="https://drive.google.com/file/d/1y4vXFev88g2P2Ij2tYsXKbtb2l_kZzI1/view?usp=sharing"
            >
              <div className="flex justify-center items-center space-x-1">
                {" "}
                <FileCheck2 className="h-4 w-4" />
                <span>CV</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownContact;
