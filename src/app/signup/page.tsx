

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const SignUpPage = () => {

    const handleGithubSignUp = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

    const handleGoogleSignUp = async () => {
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

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        });
        if (data) {

            toast.success('Signup has been succesfully');
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
        <div className="min-h-screen bg-[#F0F5F0] px-4 py-8">
            <div className="mx-auto w-full max-w-md">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-[#26352B]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        নিয়মিত বাজারে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                {/* Signup Form */}
                <div className="rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:p-6">
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        {/* Name */}
                        <div className="form-control w-full">
                            <label className="label mb-1">
                                <span className="label-text text-sm text-gray-800">
                                    নাম
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="যেমন: রহিম উদ্দিন"
                                className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:outline-none focus:border-green-600"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control w-full">
                            <label className="label mb-1">
                                <span className="label-text text-sm text-gray-800">
                                    ইমেইল
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:outline-none focus:border-green-600"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control w-full">
                            <label className="label mb-1">
                                <span className="label-text text-sm text-gray-800">
                                    পাসওয়ার্ড
                                </span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                minLength={8}
                                className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:outline-none focus:border-green-600"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="form-control w-full">
                            <label className="label mb-1">
                                <span className="label-text text-sm text-gray-800">
                                    পাসওয়ার্ড নিশ্চিত করুন
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="আবার লিখুন"
                                minLength={8}
                                className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:outline-none focus:border-green-600"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn mt-1 w-full border-none bg-green-700 text-white shadow-md hover:bg-green-800"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>

                        {/* Divider */}
                        <div className="divider my-0 text-sm text-gray-500">
                            অথবা
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className="btn btn-outline border-[#DFE7DF] bg-transparent text-gray-800 hover:bg-gray-100"
                            >
                                <span className="font-bold text-red-500">
                                    G
                                </span>
                                Google দিয়ে চালিয়ে যান
                            </button>

                            <button
                                type="button"
                                onClick={handleGithubSignUp}
                                className="btn btn-outline border-[#DFE7DF] bg-transparent text-gray-800 hover:bg-gray-100"
                            >
                                <span className="font-bold">●</span>
                                GitHub দিয়ে চালিয়ে যান
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="mt-1 text-center text-sm text-gray-600">
                            অ্যাকাউন্ট আছে?{" "}
                            <Link
                                href="/login"
                                className="font-medium text-green-700 hover:underline"
                            >
                                সাইন ইন করুন
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Back Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
