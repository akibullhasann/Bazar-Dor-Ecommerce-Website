







import { Imarquee } from '@/TypeScript/Marquee';
import Link from 'next/link';
import React from 'react';
import MarqueeText from 'react-marquee-text';

const Marquee = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data: Imarquee[] = await res.json();
    console.log(data);
    return (
        <div>
            <div className="flex items-center gap-10 px-4 pb-2
            max-w-7xl mx-auto  
            ">
                <MarqueeText
                    duration={30}
                    pauseOnHover={true}
                    direction="right"
                >
                    {data.map((d) => <Link className='inline-flex border-y  border-r border-gray-200 py-2 px-3' key={d.id} href={`/products/${d.id}`}>
                        <div className='flex gap-2  '>
                            <div>
                                <span>{d.image}</span>
                                <span className='font-semibold'>{d.nameBn}</span>
                            </div>
                            <span>{d.today} টাকা/কেজি</span>
                            <span>{d.change.dir === "up" ? <p className='text-red-700'>▲</p> : <p className='text-green-500'></p>}</span>
                            <span>{d.change.pct}%</span>
                        </div>
                    </Link>)}






                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;