import Banner from "@/components/home-page/Banner";
import Collaborate from "@/components/home-page/Collaborate";
import WorkExprience from "@/components/home-page/WorkExprience";

export default function Home() {
  return (
    <div className="bg-[#000000] px-5 ">
      <Banner />
      <WorkExprience />
      <Collaborate />
    </div>
  );
}
