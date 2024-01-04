"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SubscribeNewsLetter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("Loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
      toast.success("You have successfully subscribed!");
      return response;
    } catch (e: any) {
      setErrorMsg(e.response.data.error);
      setState("Error");
      toast.error("Something went wrong.Try again later.");
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
        <div>
          <Button
            disabled={state === "Loading"}
            type="submit"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeNewsLetter;
