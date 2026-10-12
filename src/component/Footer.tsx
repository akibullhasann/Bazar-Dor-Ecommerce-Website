import React from "react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#DFE7DF] bg-[#FAFCFA]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-gray-600 sm:px-6 sm:py-5 sm:text-sm md:flex-row md:gap-6 md:text-left lg:px-8">
                <p className="max-w-md leading-relaxed md:max-w-none">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>
                <p className="max-w-md leading-relaxed md:max-w-none md:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>
            </div>
        </footer>
    );
};

export default Footer;