import { Image } from "sanity";

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
  return (
    <div
      className={`flex flex-col w-full items-center pt-[160px] pb-[40px] ${bannerClassName}`}
    >
      <span className="text-3xl font-normal max-w-[600px] px-5 text-center">
        {header}
      </span>
    </div>
  );
};

export default BlogBanner;
