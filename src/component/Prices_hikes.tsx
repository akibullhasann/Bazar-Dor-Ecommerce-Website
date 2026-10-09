
import { IpriceHikes } from './../TypeScript/Price_hikes';

const Prices_hikes = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await res.json();
    const pricesHikes: IpriceHikes[] = data.filter((d: IpriceHikes) => d.change.dir === "up");
    console.log("hi ia m", pricesHikes);
    return (
        <div className="px-5 py-5 ">
            <p><span className='text-red-500'>▲</span>আজ দাম বেড়েছে</p>

            <div className='grid grid-cols-3 gap-5 mb-3 '>
                {pricesHikes.map((ph) => <div key={ph.id} className='bg-white rounded-xl flex flex-col gap-4  border border-1 px-4 py-3 '>
                    <div className='flex items-center gap-4'>
                        <div className='text-6xl bg-[#F0F5F0] rounded-2xl'>{ph.image}</div>
                        <div>
                            <h2>{ph.nameBn}</h2>
                            <p>প্রতি কেজি</p>
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

export default Prices_hikes;