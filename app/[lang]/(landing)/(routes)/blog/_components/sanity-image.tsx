"use client";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { createClient } from "next-sanity";
import config from "@/sanity.config";

export const sanityConfig = createClient(config);

const SanityImage = ({ asset }: { asset: string }) => {
  const imageProps = useNextSanityImage(sanityConfig, asset);

  if (!imageProps) return null;

  return (
    <Image src={imageProps} sizes="(max-width: 800px) 100vw, 800px" alt="" />
  );
};

export default SanityImage;
