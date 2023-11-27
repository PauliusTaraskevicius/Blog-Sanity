interface BannerProps {
  header: string;
}

const Banner = ({ header }: BannerProps) => {
  return (
    <div className="flex flex-col w-full items-center pt-[60px] pb-[40px] bg-transparent">
      <p className="text-xl font-black uppercase pb-4">PaulyDev Blog</p>
      <span className="text-3xl font-normal max-w-[600px] px-5 text-center">
        {header}
      </span>
    </div>
  );
};

export default Banner;
