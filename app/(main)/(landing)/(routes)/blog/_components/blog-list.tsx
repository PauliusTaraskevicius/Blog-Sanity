"use client";

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/Blog";
import Date from "@/components/date";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div className="relative h-full w-full opacity-[1px] lg:pt-[58px]">
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-lg max-w-xs md:max-w-none group"
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="cursor-pointer group-hover:brightness-90 transition">
                <Image
                  quality={85}
                  width={700}
                  height={475}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="h-56 lg:h-60 w-full object-cover bg-[#e8e8e8]"
                  src={blog.image}
                  alt={blog.description}
                />
              </div>
              <div className="pt-[20px] pb-[20px] bg-white dark:bg-transparent">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
