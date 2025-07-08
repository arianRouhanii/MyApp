'use client'
import { useState } from "react"
import Stage1 from "./_component/Stage1"
import Stage2 from "./_component/Stage2"
import Stage3 from "./_component/Stage3"
import Stage4 from "./_component/Stage4"
export default function Home() {
  const [pageState, setPageState] = useState(1)
  return (
    <main className="text-black">
      {pageState == 1 && <Stage1 setPageState={setPageState} />}
      {pageState == 2 && <Stage2 setPageState={setPageState} />}
      {pageState == 3 && <Stage3 setPageState={setPageState} />}
      {pageState == 4 && <Stage4 setPageState={setPageState} />}
    </main>
  )
}
