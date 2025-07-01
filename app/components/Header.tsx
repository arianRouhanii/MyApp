import Link from "next/link"
export default function Header() {
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
                    <button className="text-start"> سرویس های ما </button>
                    <button className="text-start"> پورتفولیو </button>
                    <button className="text-start"> گالری </button>
                    <button className="text-start"> صفحات </button>
                    <button className="text-start"> بلاگ </button>
                    <button className="text-start"> ارتباط با ما </button>
                </div>
            </div>
            <div className="hidden lg:flex z-50 absolute flex-row w-full">
                <div className="w-4/5 text-black gap-10 flex flex-row-reverse justify-end m-14 text-lg xl:text-2xl items-center">
                    <button className="text-blue-400"> خانه </button>
                    <button className="hover:text-blue-400"> درباره ما </button>
                    <button className="hover:text-blue-400"> سرویس های ما </button>
                    <button className="hover:text-blue-400"> پورتفولیو </button>
                    <button className="hover:text-blue-400"> گالری </button>
                    <button className="hover:text-blue-400"> صفحات </button>
                    <button className="hover:text-blue-400"> بلاگ </button>
                    <button className="hover:text-blue-400"> ارتباط با ما </button>
                    <div className="border-black border-t flex  border-l aspect-square h-full"></div>
                </div>
                <div className="w-1/5 bg-[#272727] text-white h-44 flex justify-center items-center text-4xl" ><Link href={""}>LOGO</Link></div>
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