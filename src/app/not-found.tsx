import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F0F5F0] px-4 py-12 text-center">
            <h1 className="text-7xl font-extrabold text-green-700 sm:text-8xl">
                ৪০৪
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-[#25312A] sm:text-3xl">
                পেজটি খুঁজে পাওয়া যায়নি
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500 sm:text-base">
                আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম বদলেছে অথবা
                লিংকটি ভুল।
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/"
                    className="btn border-none bg-green-700 text-white shadow-md hover:bg-green-800"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;