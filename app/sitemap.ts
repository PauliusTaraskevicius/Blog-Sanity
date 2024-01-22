import { MetadataRoute } from "next";
import { BlogPostsResponse } from "@/models/blog-post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const { blogs }: BlogPostsResponse = await response.json();

  const blogEntries: MetadataRoute.Sitemap = blogs.map(
    ({ slug, _createdAt }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      lastModified: new Date(_createdAt),
      changeFrequency: "weekly",
      priority: 1,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tips`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogEntries,
  ];
}
