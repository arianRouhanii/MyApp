'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Stage1 from "./_component/Stage1"
import Stage2 from "./_component/Stage2"
import Stage3 from "./_component/Stage3"
import Stage4 from "./_component/Stage4"
export default function Home() {
  const [pageState, setPageState] = useState(1)
  return (
    <main className="text-white bg-[#272727]">
      <div dir="rtl" className="bg-blue-400 gap-8 text-white flex flex-col-reverse justify-center px-16 h-[10vh] md:h-[30vh]">
        <p className="hidden md:flex">
          در رافد، ما به شفافیت و رضایت شما اهمیت می‌دهیم. می‌دانیم که انتخاب آسانسور یا پله برقی مناسب برای پروژه شما یک تصمیم مهم است. به همین دلیل، شما را تشویق می‌کنیم تا ابتدا به صورت آنلاین استعلام قیمت بگیرید و مقایسه کنید. پس از آنکه با اطمینان کامل از انتخاب خود مطمئن شدید، با خیالی آسوده اجرا و نصب را به تیم متخصص ما بسپارید. ما کیفیت، ایمنی و آرامش خاطر را برای شما تضمین می‌کنیم
        </p>
        <div className=" w-1/3 md:w-1/12 "><Link href={".."}><Image src={'/RafedLogo.png'} alt="Rafed" width={1000} height={1000}></Image></Link></div>
      </div>
      {pageState == 1 && <Stage1 setPageState={setPageState} />}
      {pageState == 2 && <Stage2 setPageState={setPageState} />}
      {pageState == 3 && <Stage3 setPageState={setPageState} />}
      {pageState == 4 && <Stage4 setPageState={setPageState} />}

    </main>
  )
}
