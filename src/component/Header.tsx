import Image from "next/image";
import Logo from "../../public/assests/logo-icon.png"
import React from 'react';
import Date from "@/shared_Componet/Date";
import NavLink from "./NavLink";

const Header = () => {
    // const date = new Date().toLocaleDateString("bn-BD", {
    //     dateStyle: "full",
    // });
    return (
        <header>
            <div className="flex justify-between container mx-auto items-center ">
                <div className="flex items-center gap-3">
                    <div className="bg-[#05893E] p-4 rounded-2xl">
                        <Image src={Logo} height={40} width={40} alt="Bazar-Dor"></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">বাজার দর</h2>
                        <Date></Date>

                    </div>
                </div>

                <div>
                    {/* profile Image */}
                    <div></div>
                    <p>Rizwan</p>
                </div>
            </div>

            <NavLink></NavLink>
        </header>
    );
};

export default Header;