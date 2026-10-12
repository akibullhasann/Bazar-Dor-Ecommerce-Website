import { IcategoryNavs } from "@/TypeScript/Nav";
import Link from "next/link";


const NavLink = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data: IcategoryNavs[] = await res.json();
    console.log(data);
    if(!data){
        alert("not data")
    }
    return (
         <nav className="mt-3 border-t border-gray-300">
            <div className="container mx-auto flex gap-2 overflow-x-auto whitespace-nowrap px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 lg:gap-7">
                {data.map((n) => (
                    <Link
                        key={n.id}
                        href={`/category/${n.slug}`}
                        className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm hover:bg-[#F0F5F0] hover:text-green-700 sm:text-base"
                    >
                        <span>{n.icon}</span>
                        {n.nameBn}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLink;