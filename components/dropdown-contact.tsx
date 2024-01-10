"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
      <DropdownMenuTrigger className="group" asChild>
        <div className="flex justify-center items-center">
          <Button variant="outline" className={customClass}>
            {name}
          </Button>
          <Play className="w-3 h-3 rotate-90 transition duration-200 group-data-[state=open]:-rotate-90 fill-black" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>Social contact</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem className="px-2">
          {" "}
          <a
            className="flex justify-center items-center"
            href="https://github.com/PauliusTaraskevicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1 hover:border-b-2 border-black transition">
              {" "}
              <Github className="h-4 w-4" />
              <span>Github</span>
            </div>
          </a>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="px-2">
          {" "}
          <a
            className="flex justify-center items-center"
            href="https://www.linkedin.com/in/paulius-tara%C5%A1kevi%C4%8Dius-916b83234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1 hover:border-b-2 border-black transition">
              {" "}
              <Linkedin className="h-4 w-4" />
              <span>Linkedin</span>
            </div>
          </a>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="px-2">
          {" "}
          <a
            className="flex justify-center items-center"
            href="https://www.facebook.com/paulius.taraskevicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center space-x-1 hover:border-b-2 border-black transition">
              {" "}
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
            </div>
          </a>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownContact;
