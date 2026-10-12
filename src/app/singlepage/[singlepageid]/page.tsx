
import { Iproduct } from "@/TypeScript/Product";
import { notFound } from "next/navigation";

const SingleDataPage = async ({
    params,
}: {
    params: Promise<{ singlepageid: string }>;
}) => {
    const { singlepageid } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${singlepageid}`,
        {
            next: { revalidate: 300 }, // ৩০০ সেকেন্ড (৫ মিনিট) cache থাকবে
        }
    );

    if (!res.ok) {
        notFound();
    }

    const data: Iproduct = await res.json();

    if (!data || !data.id || !data.markets) {
        notFound();
    }

    const minPrice =
        data.markets.length > 0
            ? Math.min(...data.markets.map((market) => market.min))
            : 0;

    const maxPrice =
        data.markets.length > 0
            ? Math.max(...data.markets.map((market) => market.max))
            : 0;

    const priceChangeColor =
        data.change.dir === "up"
            ? "text-red-600"
            : data.change.dir === "down"
                ? "text-green-600"
                : "text-gray-500";

    return (
        <main className="mx-auto w-[90%] py-5">
            {/* Breadcrumb */}
            <div className="mb-5 text-sm text-gray-500">
                <span>হোম</span>
                <span className="mx-2">›</span>
                <span>{data.categoryNameBn}</span>
                <span className="mx-2">›</span>
                <span>{data.nameBn}</span>
            </div>

            {/* Product Header */}
            <section className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:p-5">
                <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#F0F5F0] p-4 text-3xl">
                        {data.image}
                    </div>

                    <div>
                        <h1 className="text-xl font-bold sm:text-2xl">
                            {data.nameBn}
                        </h1>

                        <p className="text-sm text-gray-500">
                            প্রতি {data.unit === "kg" ? "কেজি" : data.unit}
                        </p>

                        <p className="mt-2 text-xs text-gray-600">
                            গতকালের তুলনায় আজকের দামের পরিবর্তন
                        </p>
                    </div>
                </div>

                <div className="rounded-xl bg-[#F0F5F0] px-5 py-3 text-center sm:min-w-28">
                    <p className="text-xs text-gray-500">আজকের দাম</p>

                    <p className="text-2xl font-bold">
                        {data.today.toLocaleString("bn-BD")}
                    </p>

                    <p className="text-xs text-gray-500">
                        টাকা / {data.unit === "kg" ? "কেজি" : data.unit}
                    </p>

                    <p className={`mt-1 text-xs ${priceChangeColor}`}>
                        {data.change.dir === "up"
                            ? "▲"
                            : data.change.dir === "down"
                                ? "▼"
                                : "—"}{" "}
                        {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
                    </p>
                </div>
            </section>

            {/* Price Summary */}
            <section className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
                <h2 className="mb-4 font-semibold">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {/* Minimum Price */}
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>

                        <p className="mt-1 text-xl font-bold text-green-600">
                            {minPrice.toLocaleString("bn-BD")} টাকা
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            সব বাজারের মধ্যে সর্বনিম্ন
                        </p>
                    </div>

                    {/* Maximum Price */}
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>

                        <p className="mt-1 text-xl font-bold text-red-600">
                            {maxPrice.toLocaleString("bn-BD")} টাকা
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            সব বাজারের মধ্যে সর্বোচ্চ
                        </p>
                    </div>

                    {/* Last Week Price */}
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-sm text-gray-500">গত সপ্তাহের দাম</p>

                        <p className="mt-1 text-xl font-bold text-green-600">
                            {data.lastWeek.toLocaleString("bn-BD")} টাকা
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            প্রতি {data.unit === "kg" ? "কেজি" : data.unit}
                        </p>
                    </div>
                </div>

                {/* Market Prices */}
                <h2 className="mb-3 mt-6 font-semibold">
                    বাজারভিত্তিক আজকের দাম
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    {/* Grid Header */}
                    <div className="grid min-w-[650px] grid-cols-5 gap-3 bg-[#F0F5F0] px-4 py-3 text-xs font-semibold text-gray-600 sm:text-sm">
                        <p>বাজার</p>
                        <p>বিভাগ</p>
                        <p className="text-right">সর্বনিম্ন</p>
                        <p className="text-right">সর্বোচ্চ</p>
                        <p className="text-right">গড়</p>
                    </div>

                    {/* Dynamic Market Rows */}
                    {data.markets.map((market, index) => (
                        <div
                            key={`${market.market}-${index}`}
                            className={`grid min-w-[650px] grid-cols-5 items-center gap-3 border-t border-gray-200 px-4 py-3 text-xs sm:text-sm ${index % 2 === 0 ? "bg-white" : "bg-[#F0F5F0]"
                                }`}
                        >
                            <p>{market.market}</p>

                            <p>{market.division}</p>

                            <p className="text-right">
                                {market.min.toLocaleString("bn-BD")} টাকা
                            </p>

                            <p className="text-right">
                                {market.max.toLocaleString("bn-BD")} টাকা
                            </p>

                            <p className="text-right font-semibold">
                                {Math.round(
                                    (market.min + market.max) / 2
                                ).toLocaleString("bn-BD")} টাকা
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SingleDataPage;
