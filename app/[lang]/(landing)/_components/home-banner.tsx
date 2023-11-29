import { Image } from "sanity";

interface HomeBannerProps {
  header: string;
}

const HomeBanner = ({ header,  }: HomeBannerProps) => {
  return (
    <div className={`flex flex-col w-full items-center pt-[160px] pb-[40px]`}>
      <p className="text-xl font-black uppercase pb-4">PaulyDev Blog</p>
      <span className="text-3xl font-normal max-w-[600px] px-5 text-center">
        {header}
      </span>
    </div>
  );
};

export default HomeBanner;
