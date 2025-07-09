import Image from "next/image"
export default function Customers() {
    return (
        <div className="w-full text-black gap-10 flex flex-col">
            <h2 className="text-4xl">مشتریان </h2>
            <div className="w-full flex flex-row">
                <p className="w-1/2">نام و نام خانوادگی</p>
                <p className="w-1/4">شماره تلفن همراه</p>
                <p className="w-1/4 text-end">مشاهده پیش فاکتور </p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/2"> ریاض باقری </p>
                    <p className="w-1/4"> 09132281550 </p>
                    <div className="w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p> دانلود فایل </p>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/2"> ریاض باقری </p>
                    <p className="w-1/4"> 09132281550 </p>
                    <div className="w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p> دانلود فایل </p>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-row bg-gray-200 items-center rounded-lg p-5">
                    <p className="w-1/2"> ریاض باقری </p>
                    <p className="w-1/4"> 09132281550 </p>
                    <div className="w-1/4 flex justify-end ">
                        <button className="bg-blue-400 text-white flex flex-row justify-between rounded-lg px-3 py-1">
                            <div className="h-6 w-6"><Image alt="" width={1000} height={1000} src={'/pdfLOGO.png'}></Image></div>
                            <p> دانلود فایل </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
