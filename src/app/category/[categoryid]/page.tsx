


import ProductsGrid from '@/component/ProductsGrid';
import { Iproduct } from '@/TypeScript/Product';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const CategoryPage = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryid}`,
        { next: { revalidate: 300 } }
    );

    if (!res.ok) {
        throw new Error("Products fetch করা যায়নি");
    }
    const data: Iproduct[] = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
        notFound();
    }

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

            <ProductsGrid products={data} />

        </div>
    );
};

export default CategoryPage;