import Image from "next/image";
import Logo from "../../public/assests/logo-icon.png"
import React, { Suspense } from 'react';
import Date from "@/shared_Componet/Date";
import NavLink from "./NavLink";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
    // const date = new Date().toLocaleDateString("bn-BD", {
    //     dateStyle: "full",
    // });
    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50 pt-5">
            <div className="flex justify-between container mx-auto items-center ">
                <Link href="/">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#05893E] p-4 rounded-2xl">
                            <Image src={Logo} height={20} width={20} alt="Bazar-Dor"></Image>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl">বাজার দর</h2>
                            <Date></Date>

                        </div>
                    </div>
                </Link>

                <UserInfo></UserInfo>
    
                
            </div>

            {/* <NavLink></NavLink> */}

            <Suspense
                fallback={
                    <div className="container mx-auto animate-pulse py-5">
                        <div className="h-4 w-64 rounded bg-gray-200" />
                    </div>
                }
            >
                <NavLink />
            </Suspense>
        </header>
    );
};

export default Header;