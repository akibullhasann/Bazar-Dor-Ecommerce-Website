import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import DateProvider from "@/contextApi/DateContext";
import Marquee from "@/component/Marquee";



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
      <body className="min-h-full flex flex-col">
        <DateProvider>
          <Header></Header>
          <Marquee></Marquee>
          <main>{children}</main>
        </DateProvider>
      </body>
    </html>
  );
}
