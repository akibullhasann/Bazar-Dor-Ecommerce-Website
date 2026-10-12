"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiLogOut } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const [open, setOpen] = useState(false);

    if (isPending) {
        return <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />;
    }

    // সাইন ইন করা না থাকলে
    if (!session?.user) {
        return (
            <div className="flex items-center gap-4">
                <Link
                    href="/signin"
                    className="font-medium text-gray-800 hover:text-green-700"
                >
                    সাইন ইন
                </Link>
                <Link
                    href="/signup"
                    className="rounded-lg bg-green-700 px-5 py-2 font-semibold text-white transition hover:bg-green-800"
                >
                    সাইন আপ
                </Link>
            </div>
        );
    }

    const { user } = session;

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2"
            >
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                )}
                <span className="font-medium text-gray-800">
                    {user.name.split(" ")[0]}
                </span>
                <span className="text-[10px] text-gray-500">▼</span>
            </button>

            {open && (
                <>
                    
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="mb-3 text-sm text-gray-500">{user.email}</p>

                        <Link
                            href="/profile"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg py-2 text-sm text-gray-800 hover:bg-gray-50"
                        >
                            <FiUser size={16} />
                            আমার প্রোফাইল
                        </Link>

                        <button
                            onClick={async () => {
                                await authClient.signOut();
                                setOpen(false);
                            }}
                            className="flex w-full items-center gap-2 rounded-lg py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                            <FiLogOut size={16} />
                            সাইন আউট
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserInfo;