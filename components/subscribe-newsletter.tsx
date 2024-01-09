"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SubscribeNewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/subscribe", { email });
      setEmail("");
      toast.success("You have successfully subscribed!");
      return response;
    } catch (e: any) {
      toast.error("Something went wrong.Try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-full w-full space-y-4 overflow-hidden">
      {" "}
      <form
        className="flex w-full md:justify-center md:items-center space-x-4 py-2 md:py-0 "
        // onSubmit={subscribe}
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

        <div className="flex justify-center items-center">
          {loading ? (
            <Loader className="w-6 h-6 animate-spin text-black" />
          ) : (
            <Button disabled={loading} type="submit" onClick={subscribe}>
              Subscribe
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubscribeNewsLetter;
