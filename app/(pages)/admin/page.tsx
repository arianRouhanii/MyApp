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
                <div className="flex flex-row 2xl:flex-col gap-5 md:gap-20">
                    <div className="flex 2xl:p-3"><div onClick={() => setPageState(1)} className="bg-white cursor-pointer justify-center flex items-center rounded-full w-10 2xl:w-full aspect-square">
                        <div className="w-[90%] h-[90%] rounded-full border-4 border-blue-400"></div>
                     </div></div>
                    <div className="flex flex-row items-center 2xl:items-start 2xl:flex-col gap-10">
                        <button className="text-start gap-2 flex flex-row" onClick={() => setPageState(3)}>
                            <Image alt="" src={'/prices.png'} className="h-6 w-6 " width={100} height={100}></Image>
                            <p className=" md:flex hidden"> قیمتها </p>
                        </button>
                        <button className="text-start gap-2 flex flex-row" onClick={() => setPageState(2)}>
                            <Image alt="" src={'/customers.png'} className="h-6 w-6 " width={1000} height={1000}></Image>
                            <p className=" md:flex hidden"> مشتریان </p>
                        </button>
                        <button className="text-start gap-2 flex flex-row" onClick={() => setPageState(2)}>
                            <svg viewBox="0 0 1024 1024" className="w-6 h-6" fill="#ffffff"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M146.3 73.06v877.71h512l219.43-239.38V73.06H146.3z m512.01 769.46V694.77h135.44L658.31 842.52z m146.27-220.89H585.16v256H219.44V146.2h585.14v475.43z" fill="#ffffff"></path><path d="M292.59 219.34h438.86v73.14H292.59zM292.59 365.63H658.3v73.14H292.59zM292.59 511.91h219.43v73.14H292.59z" fill="#ffffff"></path></g></svg>
                            <p className=" md:flex hidden">پیش فاکتورها</p>
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <Link href={'..'} className="flex flex-row gap-2">
                        <Image alt="" src={'/exit.png'} className="h-6 w-6" width={1000} height={1000}></Image>
                        خروج
                    </Link>
                </div>
            </div>
            <div className="p-5 md:px-20 md:pt-20 w-full 2xl:w-11/12 flex">
                {pageState == 1 && <Homm setPageState={setPageState} />}
                {pageState == 2 && <Customers setPageState={setPageState} />}
                {pageState == 3 && <Prices setPageState={setPageState} />}
            </div>
        </main>
    )
}
