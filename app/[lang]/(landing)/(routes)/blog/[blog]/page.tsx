import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import BlogBanner from "../_components/blogBanner";

interface BlogSlugProps {
  params: { blog: string };
}

const Blog = async ({ params }: BlogSlugProps) => {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div className="w-full h-full">
      <BlogBanner header={blog.name} bannerClassName=""/>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {blog.name}
        </h1>
        <a
          href={blog.url}
          title="View Blog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Blog
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={blog.content} />
      </div>

      <Image
        src={blog.image}
        alt={blog.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
};

export default Blog;
