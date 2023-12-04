import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import BlogList from "./blog-list";

interface BlogBannerProps {
  header: string;
  bannerClassName?: string;
  bannerImg?: string;
}

const BlogBanner = ({
  header,
  bannerClassName,
  bannerImg,
}: BlogBannerProps) => {
  const scrollDown = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Image
          fill
          className="bg-auto md:bg-contain bg-no-repeat bg-center"
          src={bannerImg || ""}
          alt={header}
          priority
        />
      </div>
      <div
        className={`relative flex flex-col w-full items-center pt-[160px] pb-[40px] text-white  ${bannerClassName}`}
      >
        <div className="text-center z-10">
          <Link className="hover:underline underline-offset-4" href="/">
            <p className="text-xl font-black uppercase pb-4">PaulyDev Blog</p>
          </Link>
          <span className="text-3xl md:text-5xl font-normal max-w-[600px] px-5">
            {header}
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 md:bottom-14 left-0 right-0 flex justify-center items-center">
        <ChevronDown
          onClick={scrollDown}
          className=" text-white hover:cursor-pointer"
          size={60}
        />
      </div>
    </div>
  );
};

export default BlogBanner;
