interface Stage3Props {
    setPageState: (page: number) => void;
}
export default function Prices({ setPageState }: Stage3Props) {
    return (
        <div className="w-full gap-10 flex flex-col">
            <button onClick={() => setPageState(3)} className="hidden"></button>
            <h2 className="text-xl font-bold md:text-4xl">قیمتها </h2>
            <div className="overflow-y-scroll gap-10 flex flex-col h-[100%]">
                <div className="flex flex-col 2xl:flex-row gap-10">
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row gap-10">
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row gap-10">
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-row gap-3">
                                <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0 w-2/6 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                <select className="bg-white w-1/6 rounded-full outline-0 text-black px-3 py-1">
                                    <option value=""> اقتصادی </option>
                                    <option value=""> مرغوب </option>
                                    <option value=""> لوکس </option>
                                </select>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                    <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
