'use client'
import Link from "next/link"
import Homm from "./_component/Homm"
import Customers from "./_component/Customers"
import Prices from "./_component/Prices"
export default function Home() {
    return (
        <main className="text-black h-[100vh] flex flex-row bg-white" dir="rtl">
            <div className="bg-blue-400 text-white flex flex-col w-1/12 h-full p-8 justify-between">
                <div className="flex flex-col gap-20">
                    <div className="bg-white rounded-full w-full aspect-square"> </div>
                    <div className="flex flex-col gap-10">
                        <p>قیمتها</p>
                        <p>مشتریان</p>
                        <p>پیش فاکتورها</p>
                    </div>
                </div>
                <div>
                    <Link href={'..'}>خروج</Link>
                </div>
            </div>
            <div className="p-20 w-11/12 flex">
                <Homm/>
                <Customers/>
                <Prices/>
            </div>
        </main>
    )
}
