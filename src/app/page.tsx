import All_products from "@/component/All_products";
import HeroSection from "@/component/HeroSection";
import Prices_hikes from "@/component/Prices_hikes";
import Prices_reduced from "@/component/Prices_reduced";


export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <div className=" w-[90%] mx-auto container">
        <HeroSection></HeroSection>
        <Prices_hikes></Prices_hikes>
        <Prices_reduced></Prices_reduced>
        <All_products></All_products>

      </div>
    </div>
  );
}
