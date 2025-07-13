"use client"
interface Stage2Props {
    setPageState: (page: number) => void;
}
export default function Stage2({ setPageState }: Stage2Props) {
    return (
        <form className="2xl:h-[100vh] bg-[#272727] text-xl" dir="rtl">
            <div className="gap-10 px-16 mt-16 justify-center w-full flex flex-col">
                <div className="w-full justify-center flex flex-col gap-5">
                    <h2 className="text-2xl font-bold text-blue-400"> مرحله 2 </h2>
                    <p> لطفا نوع قطعات را انتخاب کنید. </p>
                    <div className="flex flex-col xl:flex-row gap-5 xl:gap-30">
                        <p className="border-y p-1 text-lg md:text-xl"> در انتخاب قطعات به رنگ روبرو آنها توجه کنید. </p>
                        <div className="flex flex-row justify-between gap-0 md:gap-15 xl:gap-30">
                            <div className="flex flex-row-reverse text-sm md:text-lg md:w-[120px] justify-between border border-green-500 rounded-full py-1 px-3 gap-3">
                                <p>🟢</p><p> اقتصادی </p>
                            </div>
                            <div className="flex flex-row-reverse text-sm md:text-lg md:w-[120px] justify-between border border-blue-500 rounded-full py-1 px-3 gap-3">
                                <p>🔵</p><p> مرغوب </p>
                            </div>
                            <div className="flex flex-row-reverse text-sm md:text-lg md:w-[120px] justify-between border border-red-500 rounded-full py-1 px-3 gap-3">
                                <p>🔴</p><p> لوکس </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-30 2xl:mb-0 py-10 flex flex-col md:flex-row xl:flex-col gap-10">
                        <div className="flex-row w-full flex gap-30">
                            <div className=" flex flex-col w-full 2xl:flex-row gap-10">
                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1">
                                        <option> </option>
                                        <option> 🔴 موتور  </option>
                                        <option> 🔵 موتور </option>
                                        <option> 🟢 موتور </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> کابین و تزیینات کابین </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option>  </option>
                                        <option>  🔴 2  </option>
                                        <option> 🔴 3 </option>
                                        <option> 🔴 4 </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع ریل </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 1  </option>
                                        <option> 🔴 2 </option>
                                        <option> 🔴 3 </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع درب طبقات </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 1  </option>
                                        <option> 🔴 2 </option>
                                        <option> 🔴 3 </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع سیم بکسل </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 1  </option>
                                        <option> 🔴 2 </option>
                                        <option> 🔴 3 </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row w-full flex gap-30">
                            <div className=" flex flex-col w-full 2xl:flex-row gap-10">
                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 موتور  </option>
                                        <option> 🔴 موتور </option>
                                        <option> 🔴 موتور </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 موتور  </option>
                                        <option> 🔴 موتور </option>
                                        <option> 🔴 موتور </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 موتور  </option>
                                        <option> 🔴 موتور </option>
                                        <option> 🔴 موتور </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 موتور  </option>
                                        <option> 🔴 موتور </option>
                                        <option> 🔴 موتور </option>
                                    </select>
                                </div>

                                <div className="flex w-full flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <select id="color-select" dir="ltr" className="bg-gray-100 text-black border-blue-400 outline-0 border w-full md:w-[300px] rounded-md p-1" >
                                        <option> </option>
                                        <option>  🔴 موتور  </option>
                                        <option> 🔴 موتور </option>
                                        <option> 🔴 موتور </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex xl:fixed w-full right-0 left-0 px-0 xl:px-16 bottom-0 py-2 bg-[#272727] flex-col gap-5">
                        <div>
                            <button type="submit" onClick={() => setPageState(3)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-full md:w-[200px]" >
                                <p className="text-center"> بعدی </p>
                                <p className="text-end absolute left-5 top-3">&#129120;</p>
                            </button>
                        </div>
                        <div className="bg-gray-400 h-2 w-full">
                            <div className="bg-blue-400 w-1/2 h-full"></div>
                        </div>
                        <p className="text-blue-400 text-center"> 50% </p>
                    </div>
                </div>
        </form>
    )
}