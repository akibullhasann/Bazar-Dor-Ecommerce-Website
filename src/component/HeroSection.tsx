import Date from '@/shared_Componet/Date';
import Image from 'next/image';
import React from 'react';
import Banner from '../../public/assests/bazar-hero.png'

const HeroSection = () => {
    return (
        <div className='flex items-center justify-between bg-white rounded-2xl px-3 pb-6 mt-5'>
            <div>
                   <span className="bg-[#E1F1E7] inline-block px-4 py-1 rounded-xl mb-3"> <Date></Date></span>

                <div className='space-y-8 mb-6'>
                    <h1 className='text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h1>
                    <p className='max-w-[75ch]'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                </div>
                <button className='px-5 py-2 rounded-xl text-white shadow-green-950 shadow-lg bg-[#05893E]'>সব পণ্য দেখুন</button>
            </div>
            {/* Image */}
            <div>
                <Image src={Banner} alt='Banner' height={263} width={315}></Image>
            </div>
        </div>
    );
};

export default HeroSection;