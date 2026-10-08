export interface Imarquee {
    id:number,
    slug:string,
    image: string,
    nameBn: string,
    today: number,
    change: {
        dir: "up"|"down",
        pct: number
    }
}