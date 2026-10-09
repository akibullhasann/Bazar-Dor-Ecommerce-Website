
import { IpriceHikes } from './../TypeScript/Price_hikes';

const All_products = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data:IpriceHikes[] = await res.json();
    // const pricesHikes: IpriceHikes[] = data.filter((d: IpriceHikes) => d.change.dir === "up");
    // console.log("hi ia m", pricesHikes);
    return (
        <div className="py-5 ">
            <div className='mb-3'>
                <p className='mb-1'><span className='text-3xl font-semibold'>সব পণ্য</span></p>
                <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className='grid grid-cols-3 gap-4 mb-3 '>
                {data.map((ph) => <div key={ph.id} className='bg-white rounded-xl flex flex-col gap-4  border border-gray-100 px-4 py-3 '>
                    <div className='flex items-center gap-4'>
                        <div className='text-6xl bg-[#F0F5F0] rounded-2xl'>{ph.image}</div>
                        <div>
                            <h2 className='text-xl font-semibold'>{ph.nameBn}</h2>
                            <p className=''>প্রতি কেজি</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-end'>
                        <div className='flex flex-col'>
                            <p className=''>আজকের দাম</p>
                            <p><span className='text-2xl mr-2'>{ph.today}</span>টাকা</p>
                        </div>
                        <p><span className='text-red-900'>▲</span>{ph.change.pct}%</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default All_products;