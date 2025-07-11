export default function Prices() {
    return (
        <div className="w-full gap-10 hidden flex-col">
            <h2 className="text-4xl">قیمتها </h2>
            <div className="flex flex-row gap-10">
                <div className="w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                    <h2 className="text-2xl"> موتورها </h2>
                    <form >
                        <p> + موتور جدید </p>
                        <div className="flex flex-row gap-3">
                            <input type="text" placeholder="نام موتور" className="bg-white outline-0 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                            <input type="text" placeholder="قیمت (تومان)" className="bg-white outline-0 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                            <select className="bg-white w-2/6 rounded-full outline-0 text-black px-3 py-1">
                                <option value=""> اقتصادی </option>
                                <option value=""> مرغوب </option>
                                <option value=""> لوکس </option>
                            </select>
                            <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                        </div>
                    </form>
                    <div className="overflow-hidden text-black w-full flex flex-col gap-3 scroll-auto">
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
                            <p> اقتصادی </p>
                            <div className="flex flex-row gap-1">
                                <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
                            <p> اقتصادی </p>
                            <div className="flex flex-row gap-1">
                                <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
                            <p> اقتصادی </p>
                            <div className="flex flex-row gap-1">
                                <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                    <h2 className="text-2xl"> موتورها </h2>
                    <form >
                        <p> + موتور جدید </p>
                        <div className="flex flex-row gap-3">
                            <input type="text" placeholder="نام موتور" className="bg-white outline-0 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                            <input type="text" placeholder="قیمت (تومان)" className="bg-white outline-0 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                            <select className="bg-white w-2/6 rounded-full outline-0 text-black px-3 py-1">
                                <option value=""> اقتصادی </option>
                                <option value=""> مرغوب </option>
                                <option value=""> لوکس </option>
                            </select>
                            <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-1/6 rounded-full px-3 py-1" />
                        </div>
                    </form>
                    <div className="overflow-hidden text-black w-full flex flex-col gap-3 scroll-auto">
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
                            <p> اقتصادی </p>
                            <div className="flex flex-row gap-1">
                                <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
                            <p> اقتصادی </p>
                            <div className="flex flex-row gap-1">
                                <div className="bg-red-500 rounded-full w-5 h-5"></div>
                                <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row bg-white justify-between items-center rounded-full px-3 py-1">
                            <p> موتور اسانسور بهران 6.1 کیلووات </p>
                            <p> 109,000,000 </p>
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
    )
}
