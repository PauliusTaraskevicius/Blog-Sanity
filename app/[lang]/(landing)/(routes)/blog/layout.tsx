
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap justify-evenly max-w-[1400px] mx-auto my-0 px-5 py-0">
      {children}
    </div>
  );
};

export default BlogLayout;
