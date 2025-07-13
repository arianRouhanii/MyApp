'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Homm from "./_component/Homm"
import Customers from "./_component/Customers"
import Prices from "./_component/Prices"
export default function Home() {
    const [pageState, setPageState] = useState(1)
    return (
        <main className="text-blue-950 h-[100vh] flex flex-col 2xl:flex-row bg-white" dir="rtl">
            <div className="bg-blue-400 text-white flex flex-row 2xl:flex-col 2xl:w-1/12 2xl:h-full p-3 justify-between">
                <div className="flex flex-row 2xl:flex-col gap-20">
                    <div className="flex 2xl:p-3"><div onClick={() => setPageState(1)} className="bg-white cursor-pointer rounded-full w-10 2xl:w-full aspect-square"> </div></div>
                    <div className="flex flex-row items-center 2xl:items-start 2xl:flex-col gap-10">
                        <button className="text-start gap-2 flex flex-row" onClick={() => setPageState(3)}>
                            <Image alt="" src={'/prices.png'} className="h-6 w-6 md:flex hidden" width={1000} height={1000}></Image>
                            قیمتها
                        </button>
                        <button className="text-start gap-2 flex flex-row" onClick={() => setPageState(2)}>
                            <Image alt="" src={'/customers.png'} className="h-6 w-6 md:flex hidden" width={1000} height={1000}></Image>
                            مشتریان
                        </button>
                        <button className="text-start" onClick={() => setPageState(2)}>پیش فاکتورها</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <Link href={'..'} className="flex flex-row gap-2">
                        <Image alt="" src={'/exit.png'} className="h-6 w-6 md:flex hidden" width={1000} height={1000}></Image>
                        خروج
                    </Link>
                </div>
            </div>
            <div className="p-5 md:p-20 w-full 2xl:w-11/12 flex">
                {pageState == 1 && <Homm setPageState={setPageState} />}
                {pageState == 2 && <Customers setPageState={setPageState} />}
                {pageState == 3 && <Prices setPageState={setPageState} />}
            </div>
        </main>
    )
}
