import HeroSection from "@/component/HeroSection";
import Prices_hikes from "@/component/Prices_hikes";


export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <div className=" w-[90%] mx-auto container">
        <HeroSection></HeroSection>
        <Prices_hikes></Prices_hikes>

      </div>
    </div>
  );
}
