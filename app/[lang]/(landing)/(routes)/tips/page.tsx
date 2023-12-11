import { getTips } from "@/sanity/sanity-utils";
import TipsList from "./_components/tips-list";
import HomeBanner from "../../_components/home-banner";

const Tips = async () => {
  const tips = await getTips();

  return (
    <>
      <HomeBanner header="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <TipsList tips={tips} />
    </>
  );
};

export default Tips;
