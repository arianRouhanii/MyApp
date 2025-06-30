import Link from "next/link"
export default function Header() {
    return (
        <div>
            <div className="hidden lg:flex z-50 absolute flex-row w-full">
                <div className="w-4/5 gap-10 flex flex-row-reverse justify-end m-14 items-center">
                    <button className="text-blue-400"> خانه </button>
                    <button className="hover:text-blue-400"> درباره ما </button>
                    <button className="hover:text-blue-400"> سرویس های ما </button>
                    <button className="hover:text-blue-400"> پورتفولیو </button>
                    <button className="hover:text-blue-400"> گالری </button>
                    <button className="hover:text-blue-400"> صفحات </button>
                    <button className="hover:text-blue-400"> بلاگ </button>
                    <button className="hover:text-blue-400"> ارتباط با ما </button>
                    <div className="border-white border-t flex  border-l aspect-square h-full"></div>
                </div>
                <div className="w-1/5 bg-gray-800 h-44 flex justify-center items-center text-4xl" ><Link href={""}>LOGO</Link></div>
            </div>
            <div className="flex lg:hidden z-50 px-3 py-5 fixed bg-gray-800 flex-row w-full">
                <div className="w-full gap-10 flex flex-row-reverse justify-between items-center">
                    <div className="flex justify-center items-center text-4xl" ><Link href={""}>LOGO</Link></div>
                    <div className="flex justify-center h-10 w-10 items-center" >
                        <button className="h-[60%] w-[60%] aspect-square flex flex-col justify-between">
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