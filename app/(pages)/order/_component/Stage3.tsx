import React, { useState } from "react"
interface Stage3Props {
    setPageState: (page: number) => void;
}
export default function Stage3({ setPageState }: Stage3Props) {
    const [phoneNumber, setPhoneNumber] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '')
        setPhoneNumber(numericValue)
    }
    return (
        <form className="2xl:h-[100vh] bg-[#272727] text-xl" dir="rtl">
            <div className="gap-10 px-16 mt-16 justify-center w-full flex flex-col">
                <div className="w-full justify-center flex flex-col gap-5">
                    <h2 className="text-2xl font-bold text-blue-400"> مرحله 3 </h2>
                    <p> لطفا نوع قطعات را چک کنید و در مرحله بعد پیش فاکتور دریافت نمایید. </p>
                    <div className="w-full py-10 mb-30 2xl:mb-0 flex flex-col gap-10">
                        <div className="flex-row flex gap-30">
                            <div className=" flex flex-col w-full 2xl:flex-row gap-10">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🟢 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> کابین و تزیینات کابین </label>
                                    <input type="text" disabled id="standard-select" value={'🟢 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع ریل </label>
                                    <input type="text" disabled id="standard-select" value={'🟢 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع درب طبقات </label>
                                    <input type="text" disabled id="standard-select" value={'🟢 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع سیم بکسل </label>
                                    <input type="text" disabled id="standard-select" value={'🟢 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-row flex gap-30">
                            <div className=" flex flex-col 2xl:flex-row w-full gap-10">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🔴 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🔴 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🔴 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🔵 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <input type="text" disabled id="standard-select" value={'🔵 مثال '} dir="ltr" className="bg-gray-200 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone"> لطفا شماره تلفن خود را وارد کنید: </label>
                            <input type="tel" required value={phoneNumber} onChange={handleInputChange} onInput={handleInputChange} maxLength={11} className="border-blue-400 text-black text-center w-full md:w-[300px] border bg-gray-100 outline-0 rounded-sm p-2" id="phone" />
                        </div>
                    </div>
                </div>
                    <div className="flex xl:fixed w-full right-0 left-0 px-0 xl:px-16 bottom-0 py-2 bg-[#272727] flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(4)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-full md:w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
                    <div className="bg-gray-400 h-2 w-full">
                        <div className="bg-blue-400 w-3/4 h-full"></div>
                    </div>
                    <p className="text-blue-400 text-center"> 75% </p>
                </div>
            </div>
        </form>
    )
}