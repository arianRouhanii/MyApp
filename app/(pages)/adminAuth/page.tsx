'use client'
import Link from "next/link"
export default function adminAuth() {
    return (
        <main className="text-white h-[100vh] flex justify-center items-center px-5 bg-gray-200" dir="rtl">
            <div className="w-full md:w-1/2 2xl:w-1/3 bg-blue-950 flex flex-row p-10 gap-5 rounded-2xl">
                <div className="w-full 2xl:w-1/2 gap-10 flex flex-col">
                    <p className="text-2xl"> پنل مدیریت </p>
                    <form className="flex gap-3 flex-col">
                        <label htmlFor="username">نام کاربری</label>
                        <input type="text" required id="username" className="bg-white rounded-full outline-0 text-black px-4 py-1" />
                        <label htmlFor="password">رمز عبور</label>
                        <input type="text" required id="password" className="bg-white rounded-full outline-0 text-black px-4 py-1" />
                        <Link href={'/admin'} className="w-full"><input type="submit" className="bg-blue-400 w-full rounded-full p-1 mt-8 cursor-pointer" value={'ورود'} /></Link>
                    </form>
                </div>
                <div className="w-1/2 2xl:flex justify-center hidden   items-center">
                    <div className="w-full relative h-full justify-center items-center flex">
                        <div className="absolute bg-blue-600 rounded-2xl h-1/2 w-1/2 top-0 right-0"></div>
                        <div className="absolute bg-blue-400 rounded-2xl h-1/2 w-1/2 bottom-0 left-0"></div>
                        <div className="w-[95%] h-[95%] rounded-2xl bg-[url(/about.png)] z-20"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
