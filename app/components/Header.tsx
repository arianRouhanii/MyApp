import React, { useEffect } from "react";
import Link from "next/link"
export default function Header() {
    useEffect(() => {
        const onPageLoad = () => {
            console.log("Page has loaded!");
            const list: HTMLElement | null = document?.getElementById('list')
            list?.classList.add('close')
            const openlist: HTMLElement | null = document?.getElementById('listbtn')
            const closelist: HTMLElement | null = document?.getElementById('listbtn2')

            openlist?.addEventListener("click", function () {
                list?.classList.remove('close')
            })
            closelist?.addEventListener("click", function () {
                list?.classList.add('close')
            })


            const floor1: HTMLElement | null = document?.getElementById('floor1')
            const floor2: HTMLElement | null = document?.getElementById('floor2')
            const floor3: HTMLElement | null = document?.getElementById('floor3')
            const floor4: HTMLElement | null = document?.getElementById('floor4')
            const floor5: HTMLElement | null = document?.getElementById('floor5')
            const floor6: HTMLElement | null = document?.getElementById('floor6')
            const elevator: HTMLElement | null = document?.getElementById('elevator')
            elevator?.classList.add('f1')
            floor1?.classList.add("coch")

            floor1?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f1')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor1?.classList.add("coch")
            })
            floor2?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f2')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor2?.classList.add("coch")
            })
            floor3?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f3')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor3?.classList.add("coch")
            })
            floor4?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f4')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor4?.classList.add("coch")
            })
            floor5?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f5')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor5?.classList.add("coch")
            })
            floor6?.addEventListener("click", function () {
                elevator?.classList.remove('f1')
                elevator?.classList.remove('f2')
                elevator?.classList.remove('f3')
                elevator?.classList.remove('f4')
                elevator?.classList.remove('f5')
                elevator?.classList.remove('f6')
                elevator?.classList.add('f6')

                floor1?.classList.remove("coch")
                floor2?.classList.remove("coch")
                floor3?.classList.remove("coch")
                floor4?.classList.remove("coch")
                floor5?.classList.remove("coch")
                floor6?.classList.remove("coch")
                floor6?.classList.add("coch")
            })
        };

        onPageLoad();
    }, []);

    return (
        <div >
            <div id="list" className="fixed flex bg-[#272727] flex-col p-5 z-50 w-2/3 h-full close">
                <div className="flex  h-10 w-10 mt-2" >
                    <button id="listbtn2" className="h-[60%] w-[60%] aspect-square flex flex-col justify-between">
                        <div className="w-1/2 h-[4px] bg-white"></div>
                        <div className="w-full h-[4px] bg-white"></div>
                        <div className="w-full h-[4px] bg-white"></div>
                    </button>
                </div>
                <div className="text-white h-full gap-5 pt-10 text-2xl flex flex-col">
                    <button className="text-start text-blue-400"> خانه </button>
                    <button className="text-start"> درباره ما </button>
                    <button className="text-start"> پروژه های ما </button>
                    <button className="text-start"> سرویس های ما </button>
                    <button className="text-start"> اخبار جاری </button>
                    <button className="text-start"> ارتباط با ما </button>
                </div>
            </div>
            <div className="hidden group lg:flex z-50 xl:fixed absolute flex-row bottom-0 w-full xl:ml-0 xl:h-[50vh] xl:w-1/5">
                <div className=" h-full top-1/6 w-[10vh] hidden xl:flex">
                    <div id="elevator" className="w-full flex items-center justify-center h-[16.6667%]">
                        <svg fill="#000000" width="40" height="40" viewBox="0 0 64 64" className="fill-blue-400">

                            <g>

                                <path d="M51.1,5.9H12.9c-2.5,0-4.4,2-4.4,4.4v46.1c0,2.5,2,4.4,4.4,4.4h5.3h27.5h5.4c2.5,0,4.4-2,4.4-4.4V10.4   C55.6,7.9,53.6,5.9,51.1,5.9z M17.7,56.5V22.7c0-0.2,0.2-0.4,0.4-0.4H30v34.7H18.2C17.9,56.9,17.7,56.7,17.7,56.5z M34,56.9V22.3   h11.7c0.2,0,0.4,0.2,0.4,0.4v33.8c0,0.2-0.2,0.4-0.4,0.4H34z M51.6,56.5c0,0.2-0.2,0.4-0.4,0.4h-1c0-0.1,0-0.3,0-0.4V22.7   c0-2.5-2-4.4-4.4-4.4H18.2c-2.5,0-4.4,2-4.4,4.4v33.8c0,0.2,0,0.3,0,0.4h-0.9c-0.2,0-0.4-0.2-0.4-0.4V10.4c0-0.2,0.2-0.4,0.4-0.4   h38.3c0.2,0,0.4,0.2,0.4,0.4V56.5z" />

                                <path d="M26.3,12.7c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.2-0.4-0.3   c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.6,0.1c0,0,0,0,0,0   c-0.1,0-0.3,0.1-0.4,0.2c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2   c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c-0.3,0.5-0.6,1.1-0.9,1.6c0,0.1-0.1,0.2-0.1,0.3   c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.7,1c0.7,0,1.4,0,2,0c0.1,0,0.2,0,0.3,0c0.7,0,1.4-0.4,1.7-1c0.4-0.6,0.4-1.4,0-2   C27,13.9,26.6,13.3,26.3,12.7z" />

                                <path d="M41.2,11.5c-0.7,0-1.4,0-2,0c-0.1,0-0.2,0-0.3,0c-0.7,0-1.4,0.4-1.7,1c-0.4,0.6-0.4,1.4,0,2c0.3,0.6,0.7,1.2,1,1.8   c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.2,0.4,0.3c0,0,0,0,0.1,0   c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.6-0.1c0,0,0,0,0,0   c0.1,0,0.3-0.1,0.4-0.2c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2   c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0.3-0.5,0.6-1.1,0.9-1.6c0-0.1,0.1-0.2,0.1-0.3   c0.4-0.6,0.4-1.4,0-2C42.6,11.9,41.9,11.5,41.2,11.5z" />

                            </g>

                        </svg>
                    </div>
                </div>
                <div className="w-4/5 xl:w-[20vh]  xl:text-white text-black  gap-10 flex flex-row-reverse justify-end xl:justify-evenly m-14 xl:m-0  text-lg xl:text-xl xl:flex-col xl:h-full items-center xl:items-start">
                    <button id="floor1" className="hover:text-blue-400 text-shadow-lg/90"> خانه </button>
                    <button id="floor2" className="hover:text-blue-400 text-shadow-lg/90"> درباره ما </button>
                    <button id="floor3" className="hover:text-blue-400 text-shadow-lg/90"> پروژه های ما </button>
                    <button id="floor4" className="hover:text-blue-400 text-shadow-lg/90"> سرویس های ما </button>
                    <button id="floor5" className="hover:text-blue-400 text-shadow-lg/90"> اخبار جاری </button>
                    <button id="floor6" className="hover:text-blue-400 text-shadow-lg/90"> ارتباط با ما </button>
                    <div className="border-black border-t flex  border-l aspect-square h-full xl:hidden"></div>
                </div>
                <div className="w-1/5 bg-[#272727] text-white h-44 flex justify-center items-center text-4xl xl:hidden" ><Link href={""}>LOGO</Link></div>
            </div>
            <div className="flex lg:hidden z-40 px-3 py-5 fixed bg-[#272727] flex-row w-full">
                <div className="w-full gap-10 flex flex-row-reverse justify-between items-center">
                    <div className="flex justify-center items-center text-white text-4xl" ><Link href={""}>LOGO</Link></div>
                    <div className="flex justify-center h-10 w-10 items-center" >
                        <button id="listbtn" className="h-[60%] w-[60%] aspect-square flex flex-col justify-between">
                            <div className="w-1/2 h-[4px] bg-white"></div>
                            <div className="w-full h-[4px] bg-white"></div>
                            <div className="w-full h-[4px] bg-white"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}