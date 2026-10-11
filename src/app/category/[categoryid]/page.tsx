


import { Iproduct } from '@/TypeScript/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryPage = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryid}`);

    if (!res.ok) {
        throw new Error("Products fetch করা যায়নি");
    }
    const data: Iproduct[] = await res.json();

    const categoryName = data[0]?.categoryNameBn ?? "পণ্য";
    const categoryIcon = data[0]?.categoryIcon ?? "🛒";
    return (
        <div className='mt-7 container mx-auto w-[90%] '>
            <div className='flex items-center bg-white container mx-auto  px-6 py-4 rounded-2xl' >
                <h1 className='text-4xl'>{categoryIcon}</h1>
                <div>
                    <h1 className='text-2xl font-bold'>{categoryName}</h1>
                    <p className='text-gray-500'>{data.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            {/* data of card in grid */}

            <div className='grid grid-cols-3 gap-4 mt-5'>
                {data.map((d) => {
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

export default CategoryPage;