'use client'
import Link from "next/link"
export default function adminAuth() {
    return (
        <main className="text-white h-[100vh] flex justify-center items-center bg-gray-200" dir="rtl">
            <div className="bg-blue-950 p-10 rounded-lg">
                <div className="gap-10 flex flex-col">
                    <p className="text-2xl"> پنل مدیریت </p>
                    <form className="flex flex-col">
                        <label htmlFor="username">نام کاربری</label>
                        <input type="text" id="username" className="bg-white rounded-full"/>
                        <label htmlFor="password">رمز عبور</label>
                        <input type="text" id="password" />
                    </form>
                </div>
                <div></div>
            </div>
        </main>
    )
}
