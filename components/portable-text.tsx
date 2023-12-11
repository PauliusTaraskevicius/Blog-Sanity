"use client";

import SanityImage from "../app/[lang]/(landing)/(routes)/blog/_components/sanity-image";

export const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      return <SanityImage {...value} />;
    },
  },
};
