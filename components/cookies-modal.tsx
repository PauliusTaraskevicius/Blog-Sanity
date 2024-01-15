"use client";

import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CookiesAccordion from "./cookies-accordion";

interface CookiesModalProps {
  trigger: string;
}

const CookiesModal = ({ trigger }: CookiesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-between items-center border-b-2 border-black dark:border-white pb-2">
            <DialogTitle>Cookies information</DialogTitle>
          </div>
          <div className="py-4">
            <DialogTitle>General information</DialogTitle>
            <CookiesAccordion />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesModal;
