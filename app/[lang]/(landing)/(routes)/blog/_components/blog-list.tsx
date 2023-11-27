"use client";

import Image from "next/image";
import { Blog } from "@/types/Blog";
import Date from "@/components/date";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div className="relative h-full w-full opacity-[1px] pt-[58px]">
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <div className="cursor-pointer group-hover:brightness-90 transition">
              <Image
                priority
                height={500}
                width={500}
                className="h-56 lg:h-60 w-full object-cover bg-[#e8e8e8] "
                src={blog.image}
                alt={blog.name}
              />
            </div>
            <div className="pt-[20px] pb-[20px] bg-white">
              <span className="text-sm text-primary">
                <Date dateString={blog._createdAt} />
              </span>
              <h2 className="text-2xl font-normal leading-normal pb-3 overflow-hidden cursor-pointer group-hover:underline pt-[18px]">
                {blog.name}
              </h2>
              <p className="text-lg overflow-hidden cursor-pointer">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
