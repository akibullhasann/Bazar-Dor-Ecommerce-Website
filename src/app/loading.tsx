import React from "react";

const LoadingPage = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center bg-[#F0F5F0] px-4 py-10">
            {/* Spinner ও লেখা */}
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-200 opacity-60"></span>
                    <span className="loading loading-spinner loading-lg text-green-700"></span>
                </div>

                <div className="text-center">
                    <h2 className="text-xl font-bold text-[#25312A]">
                        বাজার দর
                    </h2>
                    <p className="mt-1 flex items-center justify-center gap-1 text-sm text-gray-500">
                        আজকের দাম লোড হচ্ছে
                        <span className="loading loading-dots loading-xs text-green-700"></span>
                    </p>
                </div>
            </div>

            {/* Skeleton cards */}
            <div className="container mx-auto mt-10 grid w-[90%] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="animate-pulse rounded-2xl border border-[#DFE7DF] bg-white px-4 py-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-14 w-14 rounded-2xl bg-gray-200" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-2/3 rounded bg-gray-200" />
                                <div className="h-3 w-1/3 rounded bg-gray-200" />
                            </div>
                        </div>
                        <div className="mt-5 space-y-2">
                            <div className="h-3 w-1/4 rounded bg-gray-200" />
                            <div className="flex justify-between">
                                <div className="h-6 w-1/3 rounded bg-gray-200" />
                                <div className="h-5 w-1/5 rounded bg-gray-200" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadingPage;