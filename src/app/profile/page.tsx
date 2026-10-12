"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation"



const ProfilePage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    const handleUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, image: string };

        

        await authClient.updateUser({
            ...newUserData
        })

        toast.success("your profile has been updated")

    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("সাইন আউট হয়েছে");
                    router.push("/signin");
                    router.refresh();
                },
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#F0F5F0] px-4 py-8">
            <div className="mx-auto w-full max-w-3xl">
                {/* Heading */}
                <div className="mb-5">
                    <h1 className="text-2xl font-bold text-[#25312A]">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য দেখুন
                    </p>
                </div>

                {/* User Card */}
                <div className="card mb-5 border border-[#DFE7DF] bg-[#FAFCFA]">
                    <div className="card-body flex-row items-center gap-4 p-4 sm:p-5">
                        <div className="avatar">
                            <div className="w-16 rounded-xl">
                                {user?.image ? (
                                    <img src={user.image} alt="Tailwind-CSS-Avatar-component" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-green-700 text-2xl font-bold text-white">
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-[#25312A]">
                                {user?.name}
                            </h2>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>

                        <button
                            onClick={handleSignOut}
                            className="btn btn-outline btn-sm border-red-300 text-red-600 hover:border-red-500 hover:bg-red-50 hover:text-red-600 sm:btn-md"
                        >
                            <FiLogOut size={16} />
                            সাইন আউট
                        </button>
                    </div>
                </div>

                {/* Info Card */}
                <div className="card border border-[#DFE7DF] bg-[#FAFCFA]">
                    <div className="card-body p-4 sm:p-5">
                        <h3 className="card-title text-base text-[#25312A]">
                            তথ্য
                        </h3>

                        <form
                            onSubmit={handleUpdate}
                            className="mt-2 flex flex-col gap-4"
                        >
                            {/* Name */}
                            <div className="form-control w-full">
                                <label className="label mb-1">
                                    <span className="label-text text-sm text-gray-800">
                                        নাম
                                    </span>
                                </label>
                                <input
                                    key={user?.name}
                                    type="text"
                                    name="name"
                                    defaultValue={user?.name}
                                    className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:border-green-600 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mb-1">
                                    <span className="label-text text-sm text-gray-800">ছবির URL</span>
                                </label>
                                <input
                                    key={user?.image}
                                    type="url"
                                    name="image"
                                    defaultValue={user?.image ?? ""}
                                    placeholder="https://example.com/photo.jpg"
                                    className="input input-bordered w-full border-[#DFE7DF] bg-transparent focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn w-full border-none bg-green-700 text-white shadow-md hover:bg-green-800 disabled:opacity-60"
                            >

                                আপডেট

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;