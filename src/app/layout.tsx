import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import DateProvider from "@/contextApi/DateContext";
import Marquee from "@/component/Marquee";
import { Suspense } from "react";



export const bengaliFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Purchase your essential things",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bengaliFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F0F5F0]">
        <DateProvider>
          <Header></Header>
          <Suspense
            fallback={
              <div className="mx-auto w-full max-w-7xl px-4 py-3">
                <div className="h-10 animate-pulse rounded-lg bg-gray-200" />
              </div>
            }
          >
            <Marquee />
          </Suspense>
          <main>{children}</main>
        </DateProvider>
      </body>
    </html>
  );
}
