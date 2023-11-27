import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import config from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`
  );
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(config).fetch(
    groq`*[_type == "blog"]{
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
          }`
  );
}
