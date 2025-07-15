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
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
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
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
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
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full 2xl:w-1/2 gap-5 text-white flex flex-col p-3 rounded-xl bg-gray-400 ">
                        <h2 className="text-2xl"> موتورها </h2>
                        <form >
                            <p> + موتور جدید </p>
                            <div className="flex text-xs md:text-lg flex-col md:flex-row gap-3">
                                <div className="w-full md:w-5/6 gap-3 flex flex-row">
                                    <input type="text" placeholder="نام موتور" className="bg-white outline-0 w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <input type="number" placeholder="قیمت (تومان)" className="bg-white outline-0  w-2/6 md:w-2/5 placeholder:text-gray-400 px-3 py-1 text-black rounded-full" />
                                    <select className="bg-white  w-2/6 md:w-1/5 rounded-full outline-0 text-black px-3 py-1">
                                        <option value=""> اقتصادی </option>
                                        <option value=""> مرغوب </option>
                                        <option value=""> لوکس </option>
                                    </select>
                                </div>
                                <input type="submit" value="ثبت" className="bg-blue-400 cursor-pointer w-full md:w-1/6 rounded-full px-3 py-2 md:py-1  hover:bg-blue-500" />
                            </div>
                        </form>
                        <div className="overflow-y-scroll h-[140px] text-black w-full flex flex-col gap-3 scroll-auto">
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between  text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-row bg-white justify-between text-xs md:text-lg  items-center rounded-full px-3 py-1">
                                <p className="overflow-hidden w-1/3 whitespace-nowrap "> موتور اسانسور بهران 6.1 کیلووات </p>
                                <p className="text-[10px] md:text-lg"> 109,000,000 </p>
                                <p> اقتصادی </p>
                                <div className="flex flex-row gap-1">
                                    <button className="border border-red-500 rounded-full w-6 h-6 p-1">
                                        <svg viewBox="0 0 512 512" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>trashcan</title> <g id="Page-1" stroke="none" fill="none"> <g id="Shape" fill="#ff0000" transform="translate(64.000000, 42.666667)"> <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"> </path> </g> </g> </g></svg>
                                    </button>
                                    <button className="border border-blue-500 rounded-full w-6 h-6 p-0.5">
                                        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#0000ff"></path> </g></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
