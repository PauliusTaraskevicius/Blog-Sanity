"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogBanner from "./blogBanner";
import { Blog } from "@/types/Blog";
import Date from "@/components/date";

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="h-full">
      <div className="h-screen">
        <BlogBanner header={blog.name} bannerImg={blog.image} />
      </div>

      <div className="max-w-[1000px] px-4 h-full pt-[100px]">
        <header className="flex flex-col items-center justify-center pb-[30px]">
          <h1 className="text-black dark:text-white text-4xl md:text-7xl font-normal">
            {blog.name}
          </h1>
          <span className="pt-8 text-base">
            Publikuota - <Date dateString={blog._createdAt} />
          </span>
        </header>

        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={blog.content} />
        </div>

        <div className="flex justify-center items-center">
          {" "}
          <Image
            src={blog.image}
            alt={blog.name}
            width={600}
            height={600}
            className="py-10 object-cover"
          />
        </div>

        <div className="w-full h-full flex justify-center bg-pink-500">
          <h1 className="text-black">Naujausi įrašai</h1>
          <div className="text-black">Naujausi įrašai</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
