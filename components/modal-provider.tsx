"use client";

import { useState, useEffect } from "react";
import NewsletterModal from "./newsletter-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewsletterModal />
    </>
  );
};

export default ModalProvider;
