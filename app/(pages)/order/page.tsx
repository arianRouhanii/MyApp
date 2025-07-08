'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Stage1 from "./_component/Stage1"
import Stage2 from "./_component/Stage2"
import Stage3 from "./_component/Stage3"
export default function Home() {
  const [pageState, setPageState] = useState(1)
  return (
    <main className="text-black">
      <div className="absolute w-1/12 p-3 left-16 top-2 "><Link href={""}><Image src={'/RafedLogo.png'} alt="Rafed" width={1000} height={1000}></Image></Link></div>
      {pageState == 1 && <Stage1 setPageState={setPageState} />}
      {pageState == 2 && <Stage2 setPageState={setPageState} />}
      {pageState == 3 && <Stage3 setPageState={setPageState} />}
    </main>
  )
}
