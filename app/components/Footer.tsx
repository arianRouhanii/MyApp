import Image from "next/image"
export default function Footer() {
    return (
        <div className="bg-gray-800 relative text-sm gap-10 flex flex-col pt-20 pb-5 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex left-14"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex right-14"></div>
            <div className="w-full px-16 flex flex-row text-end gap-10">
                <div className="w-1/3 py-5 flex flex-col gap-1">
                    <p className="text-blue-400"> :شماره تلفن </p>
                    <p>+123456789</p>
                </div>
                <div className="w-1/3 py-5 flex flex-col gap-1">
                    <p className="text-blue-400"> :ایمیل </p>
                    <p>Example@gmail.com</p>
                </div>
                <div className="w-1/3 py-5 flex flex-col gap-1">
                    <p className="text-blue-400"> :آدرس </p>
                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>
                </div>
            </div>
            <hr className="text-gray-500"/>
            <div className="w-full px-16  flex flex-row justify-between">
                <p>@Copyright 2025 Almubdieun</p>
                <div className="flex flex-row gap-2">
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/facebook.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/instagram.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/x.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/telegram.svg"}></Image></button>
                </div>
                <p className="hover:text-blue-400">Terms and Conditions</p>
            </div>
        </div>
    )
}