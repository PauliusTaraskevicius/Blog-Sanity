import { PortableTextBlock } from "sanity";

export type Tip = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
