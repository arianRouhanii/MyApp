import React, { useState } from "react"
interface Stage3Props{
    setPageState:(page:number)=> void;
}
export default function Stage3({ setPageState }: Stage3Props) {
    const [phoneNumber, setPhoneNumber]= useState('')
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
        const numericValue = e.target.value.replace(/[^0-9]/g,'')
        setPhoneNumber(numericValue)
    }
    return (
        <form className="xl:h-[100vh] bg-[#EAEAEA] text-xl p-16" dir="rtl">
            <div className="gap-10 h-full w-full justify-between flex flex-col">
                <div className="w-full flex flex-col gap-5">
                    <h2 className="text-2xl"> مرحله 3 </h2>
                    <p> لطفا نوع قطعات مورد نظر خود را چک کنید و در مرحله بعد پیش فاکتور دریافت کنید </p>
                    <div className="w-full flex flex-col p-10 gap-10">
                        <div className="flex-col xl:flex-row flex gap-10 lg:gap-15 2xl:gap-30">
                            <div className="xl:w-1/3 flex flex-col gap-10">
                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> موتور </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> کابین و تزیینات </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع ریل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع درب طبقات </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع سیم بکسل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>
                            </div>
                            <div className="xl:w-1/3 flex flex-col gap-10">
                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> موتور </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> کابین و تزیینات  </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع ریل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع درب طبقات </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع سیم بکسل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>
                            </div>
                            <div className="xl:w-1/3 flex flex-col gap-10">
                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> موتور </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> کابین و تزیینات </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع ریل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع درب طبقات </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>

                                <div className="flex flex-col xl:flex-row gap-3 justify-between">
                                    <label htmlFor="elevtype"> نوع سیم بکسل </label>
                                    <input type="text" disabled value={'مثال'}  className="bg-gray-100 outline-0 border w-[200px] rounded-md p-1"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone"> لطفا شماره تلفن خود را وارد کنید  </label>
                            <input type="tel" required value={phoneNumber} onChange={handleInputChange} onInput={handleInputChange} maxLength={11} className="text-center w-[300px] border bg-gray-100 outline-0 rounded-sm p-2" id="phone" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                    <div>
                        <button type="submit" onClick={() => setPageState(1)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
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