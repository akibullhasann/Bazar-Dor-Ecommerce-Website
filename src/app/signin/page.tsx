"use client"

import Link from "next/link";
import React from "react";
import { Bounce, toast } from "react-toastify";
import { redirect } from 'next/navigation';
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string };
        console.log(user, 'form signup kane');

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        });
        if (data) {

            toast.success('SignIn has been succesfully');
            redirect("/");
        }

        if (error) {
            toast.error(error.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }


    return (
        <div className="min-h-screen bg-[#F0F5F0] flex flex-col items-center justify-center px-4 py-8">
            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="text-2xl font-bold text-[#25312A]">
                    সাইন ইন
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন
                </p>
            </div>

            {/* Sign In Form */}
            <form onSubmit={onSubmit} className="bg-white/70 border border-[#DFE7DF] rounded-2xl p-5 sm:p-6 w-full max-w-md">
                <div className="flex flex-col gap-3">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="label text-sm text-[#25312A] mb-1"
                        >
                            ইমেইল
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full bg-transparent border-[#DFE7DF] focus:outline-green-600"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="label text-sm text-[#25312A] mb-1"
                        >
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="input input-bordered w-full bg-transparent border-[#DFE7DF] focus:outline-green-600"
                            required
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="btn bg-green-700 hover:bg-green-800 text-white border-none w-full mt-1"
                    >
                        সাইন ইন
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-3">
                    <div className="h-px bg-gray-200 flex-1" />
                    <span className="text-sm text-gray-600">অথবা</span>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline border-[#DFE7DF] bg-transparent text-[#25312A] btn-sm sm:btn-md"
                    >
                        <span className="text-base font-bold text-blue-600">
                            G
                        </span>
                        Google দিয়ে
                    </button>

                    <button
                        type="button"
                        onClick={handleGithubSignIn}
                        className="btn btn-outline border-[#DFE7DF] bg-transparent text-[#25312A] btn-sm sm:btn-md"
                    >
                        <span className="text-base">●</span>
                        GitHub দিয়ে
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/signup"
                        className="text-green-700 hover:underline font-medium"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>
            </form>

            {/* Back Home */}
            <Link
                href="/"
                className="text-sm text-gray-500 hover:text-green-700 mt-5"
            >
                ← হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default SignInPage;
