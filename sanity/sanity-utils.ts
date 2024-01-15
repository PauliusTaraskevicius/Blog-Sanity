import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import config from "./config/client-config";
import { Tip } from "@/types/Tip";

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project" ]| order(_createdAt desc){
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            type
          }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      type
    }`,
    { slug }
  );
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(config).fetch(
    groq`*[_type == "blog" ]| order(_createdAt desc){
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            type
          }`
  );
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(config).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      type
    }`,
    { slug }
  );
}

export async function getTips(): Promise<Tip[]> {
  return createClient(config).fetch(
    groq`*[_type == "tip" ]| order(_createdAt desc){
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            type
          }`
  );
}

export async function getTip(slug: string): Promise<Tip> {
  return createClient(config).fetch(
    groq`*[_type == "tip" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      type
    }`,
    { slug }
  );
}

export async function getSearchData(
  name?: string
): Promise<Blog[] | Tip[] | Project[]> {
  return createClient(config).fetch(
    groq`*[(_type == "blog" || _type == "project" || _type == "tip" && !(_id in path("drafts.**")))
	&& (pt::text(content) match "${name}*" || name match "${name}*" || description match "${name}*")] 
	| score(pt::text(content) match "${name}*", boost(name match "${name}*", 3), boost(description match "${name}*", 2))
	{
    _createdAt,
    name,
    description,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content,
    type
    }`
  );
}
