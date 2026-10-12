

"use client";
import { Iproduct } from '@/TypeScript/Product';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';


type SortType = "default" | "asc" | "desc";

const toNumber = (value: unknown): number => {
    if (typeof value === "number") return value;

    const converted = String(value ?? "")
        .replace(/[০-৯]/g, (digit) => String("০১২৩৪৫৬৭৮৯".indexOf(digit)))
        .replace(/,/g, "")
        .replace(/[^\d.-]/g, "");

    const num = parseFloat(converted);
    return Number.isNaN(num) ? 0 : num;
};
const ProductsGrid = ({products}:{products:Iproduct[]}) => {

    const [sort, setSort] = useState<SortType>("default");

    
    const sortedProducts =
        sort === "default"
            ? products
            : [...products].sort((a, b) =>
                  sort === "asc"
                      ? toNumber(a.today) - toNumber(b.today)
                      : toNumber(b.today) - toNumber(a.today)
              );
    return (
        <div>
            {/* Sort bar */}
            <div className="mt-5 flex items-center justify-end gap-2 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] px-4 py-3">
                <label htmlFor="sort" className="text-sm text-gray-600">
                    সাজান
                </label>

                <div className="relative">
                    <select
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortType)}
                        className="cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm text-gray-800 focus:border-green-600 focus:outline-none"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="asc">দাম: কম থেকে বেশি</option>
                        <option value="desc">দাম: বেশি থেকে কম</option>
                    </select>
                    <FiChevronDown
                        size={14}
                        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-600"
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                {sortedProducts.map((d:Iproduct) => {
                    return <Link key={d.id} href={`/singlepage/${d.id}`}>
                        <div className='border border-gray-200 bg-white px-4 py-3 rounded-2xl'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center gap-3 '>
                                    <h1 className='text-4xl bg-gray-200 px-2 py-2 rounded-2xl'>{d.image}</h1>
                                    <div>
                                        <h1 className='text-1xl font-bold'>{d.nameBn}</h1>
                                        <p>প্রতি কেজি</p>
                                    </div>
                                </div>

                                <div>
                                    <p>আজকের দাম</p>
                                    <div className='flex justify-between'>
                                        <p className='text-2xl font-semibold flex gap-2 items-center'>{d.today}<span className='text-lg'>টাকা</span></p>
                                        <p>
                                            {d.change.dir === "up" ? (
                                                <span className="text-red-700">▲</span>
                                            ) : d.change.dir === "down" ? (
                                                <span className="text-green-800">▼</span>
                                            ) : (
                                                <span className="bg-gray-500 text-white">—</span>
                                            )}
                                            <span>{d.change.pct}%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                })}
            </div>
        </div>
    );
};

export default ProductsGrid;