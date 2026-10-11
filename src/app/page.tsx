import All_products from "@/component/All_products";
import HeroSection from "@/component/HeroSection";
import Prices_hikes from "@/component/Prices_hikes";
import Prices_reduced from "@/component/Prices_reduced";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <div className=" w-[90%] mx-auto container">
        <HeroSection></HeroSection>
        <Suspense fallback={<div className="my-5 h-40 animate-pulse rounded-xl bg-gray-200" />}>
          <Prices_hikes />
        </Suspense>

        <Suspense fallback={<div className="my-5 h-40 animate-pulse rounded-xl bg-gray-200" />}>
          <Prices_reduced />
        </Suspense>

        <Suspense fallback={<div className="my-5 h-40 animate-pulse rounded-xl bg-gray-200" />}>
          <All_products />
        </Suspense>

      </div>
    </div>
  );
}
