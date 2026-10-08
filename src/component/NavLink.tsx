import { IcategoryNavs } from "@/TypeScript/Nav";
import Link from "next/link";


const NavLink = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data: IcategoryNavs[] = await res.json();
    console.log(data);
    return (
        <div className="border-t border-gray-300 mt-3">
            <div className="flex justify-start gap-7 container mx-auto py-3">
                {data.map((n) => <Link key={n.id} href={`/category/${n.slug}`}><span>{n.icon}</span>{n.nameBn}</Link>)}
            </div>
        </div>
    );
};

export default NavLink;