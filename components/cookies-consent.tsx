"use client";

import { useState, useEffect } from "react";

import { hasCookie, setCookie } from "cookies-next";
import { Button } from "./ui/button";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 z-10 py-2 w-full bg-gray-200 dark:bg-black dark:text-white">
      <div className="flex justify-between  items-center px-4">
        <p>
          We use cookies to enchance your brownsing experience, serve
          personalized ads or content, and analyze our traffic.
        </p>
        <Button size="lg" onClick={() => acceptCookie()}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookiesConsent;
