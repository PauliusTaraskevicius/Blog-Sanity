import { getTip } from "@/sanity/sanity-utils";

import TipDetails from "../_components/tip-details";
import RecentBlogs from "../../blog/_components/recent-blogs";

interface TipSlugProps {
  params: { tip: string };
}

const Blog = async ({ params }: TipSlugProps) => {
  const slug = params.tip;
  const tip = await getTip(slug);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <TipDetails tip={tip} />
        </div>
        <RecentBlogs />
      </div>
    </div>
  );
};

export default Blog;
