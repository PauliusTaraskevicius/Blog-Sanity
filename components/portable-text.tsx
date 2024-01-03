"use client";

import SanityImage from "./sanity-image";

export const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      return <SanityImage {...value} />;
    },
  },
};
