"use client";

import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal";

const NewsletterModal = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const modal = useModal();

  const subscribe = async () => {
  
    try {
      setLoading(true);
      const response = await axios.post("/api/subscribe", { email });
      setEmail("");
      modal.onClose();
      toast.success("You have successfully subscribed!");
      return response;
    } catch (e: any) {
      toast.error("Something went wrong.Try again later.");
      modal.onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
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
        <DialogFooter>
          <div className="flex justify-center items-center h-full w-full space-y-4 overflow-hidden">
            {" "}
            <div
              className="flex w-full md:justify-center md:items-center space-x-4 py-2 md:py-0 "
              onSubmit={subscribe}
            >
              <div className="w-full md:w-1/2 md:px-2 md:py-2">
                <Input
                  required
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder="What's your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {loading ? (
                  <Loader className="w-6 h-6 animate-spin text-black dark:text-white" />
                ) : (
                  <Button disabled={loading} type="submit" onClick={subscribe}>
                    Subscribe
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
