import Image from "next/image"
interface Stage2Props {
    setPageState: (page: number) => void;
}
export default function Customers({ setPageState }: Stage2Props) {
    return (
        <div className="w-full text-black gap-5 md:gap-10 flex flex-col">
            <button onClick={() => setPageState(2)} className="hidden"></button>
            <h2 className="text-xl font-bold md:text-4xl">مشتریان </h2>
            <div className="w-full text-xs flex flex-row">
                <p className="w-1/3 md:w-1/2">نام و نام خانوادگی</p>
                <p className="w-1/3 md:w-1/4">شماره تلفن همراه</p>
                <p className="w-1/3 md:w-1/4 text-end">مشاهده پیش فاکتور </p>
            </div>
            <div className="overflow-y-scroll gap-10 flex flex-col h-[100%]">
                            <div className="flex flex-col gap-3">
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/3 md:w-1/2"> ریاض باقری </p>
                    <p className="w-1/3 md:w-1/4"> 09132281550 </p>
                    <div className="w-1/3 md:w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p className="hidden md:flex"> دانلود فایل </p>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/3 md:w-1/2"> ریاض باقری </p>
                    <p className="w-1/3 md:w-1/4"> 09132281550 </p>
                    <div className="w-1/3 md:w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p className="hidden md:flex"> دانلود فایل </p>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/3 md:w-1/2"> ریاض باقری </p>
                    <p className="w-1/3 md:w-1/4"> 09132281550 </p>
                    <div className="w-1/3 md:w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p className="hidden md:flex"> دانلود فایل </p>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
