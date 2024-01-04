"use client";

import { useState, useEffect } from "react";
import { MailPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import SubscribeNewsLetter from "./subscribe-newsletter";

const NewsletterModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center">
        <MailPlus className="cursor-pointer w-5 h-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-2">
            Subscribe to our newsletter!
          </DialogTitle>
          <DialogDescription className="text-left">
            Get to notified on quality articles about web development and more
            sent to your inbox.
          </DialogDescription>
        </DialogHeader>
        <SubscribeNewsLetter />
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
