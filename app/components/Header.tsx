import React, { useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
export default function Header() {
    useEffect(() => {
        const onPageLoad = () => {
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
        };

        onPageLoad();
    }, []);

    return (
        <div >
            <div id="list" className="fixed flex flex-row z-50 w-full h-full close">
                <div id="listbtn2" className="w-full h-full flex flex-row">
                    <div className="w-7/12 h-full bg-[#272727] p-5">
                        <div className="flex  h-10 w-10 mt-2" >
                            <button className="h-[60%] w-[60%] aspect-square flex flex-col justify-between">
                                <div className="w-1/2 h-[4px] bg-white"></div>
                                <div className="w-full h-[4px] bg-white"></div>
                                <div className="w-full h-[4px] bg-white"></div>
                            </button>
                        </div>
                        <div className="text-white h-full gap-10 pt-10 text-2xl flex flex-col">
                            <a href="#" className="text-start text-blue-400"> خانه </a>
                            <a href="#about" className="text-start"> درباره ما </a>
                            <a href="#projects" className="text-start"> پروژه های ما </a>
                            <a href="#service" className="text-start"> سرویس های ما </a>
                            <a href="#news" className="text-start"> اخبار جاری </a>
                            <a href="#footer" className="text-start"> ارتباط با ما </a>
                        </div>
                    </div>
                    <div className="w-5/12 h-full bg-black opacity-50"></div>
                </div>
            </div>
            <div className="hidden group lg:flex z-50 2xl:fixed absolute flex-row w-full xl:ml-0 ">
                <div className="w-4/5  2xl:text-white text-white  gap-10 flex flex-row-reverse justify-end m-14  text-lg 2xl:text-xl items-center ">
                    <a href="#" id="floor1" className="hover:text-blue-400 headbtn"> خانه </a>
                    <a href="#about" id="floor2" className="hover:text-blue-400 headbtn"> درباره ما </a>
                    <a href="#projects" id="floor3" className="hover:text-blue-400 headbtn"> پروژه های ما </a>
                    <a href="#service" id="floor4" className="hover:text-blue-400 headbtn"> سرویس های ما </a>
                    <a href="#news" id="floor5" className="hover:text-blue-400 headbtn"> اخبار جاری </a>
                    <a href="#footer" id="floor6" className="hover:text-blue-400 headbtn"> ارتباط با ما </a>
                    <div className="border-black border-t flex  border-l aspect-square h-full "></div>
                </div>
                <div className="w-1/5 bg-[#272727] text-white flex justify-center items-center  p-5 xl:hidden" ><Link href={""} ><Image src={'/RafedLogo.png'} alt="Rafed" width={1000} height={1000}></Image></Link></div>
            </div>
            <div className="flex lg:hidden z-40 px-3 py-5 fixed bg-[#272727] flex-row w-full">
                <div className="w-full gap-10 flex flex-row-reverse justify-between items-center">
                    <div className="flex justify-center items-center text-white text-4xl  w-1/3" ><Link href={""}><Image src={'/RafedLogo.png'} alt="Rafed" width={1000} height={1000}></Image></Link></div>
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