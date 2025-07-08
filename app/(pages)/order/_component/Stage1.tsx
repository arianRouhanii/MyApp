
export default function Stage1({ setPageState }: any) {
    return (
        <form className="2xl:h-[100vh] bg-[#EAEAEA] text-xl p-16" dir="rtl">
            <div className="gap-10 h-full justify-between flex flex-col">
                <p>
                    در رافد، ما به شفافیت و رضایت شما اهمیت می‌دهیم. می‌دانیم که انتخاب آسانسور یا پله برقی مناسب برای پروژه شما یک تصمیم مهم است. به همین دلیل، شما را تشویق می‌کنیم تا ابتدا به صورت آنلاین استعلام قیمت بگیرید و مقایسه کنید. پس از آنکه با اطمینان کامل از انتخاب خود مطمئن شدید، با خیالی آسوده اجرا و نصب را به تیم متخصص ما بسپارید. ما کیفیت، ایمنی و آرامش خاطر را برای شما تضمین می‌کنیم
                </p>
                <div className="2xl:w-1/2 flex flex-col gap-5">
                    <h2 className="text-2xl"> مرحله 1 </h2>
                    <p> لطفا ابتدا نوع آسانسور و ظرفیت کابین و تعداد توقف را انتخاب نموده و سپس سرعت را انتخاب کنید </p>
                    <div className="flex flex-col py-10 gap-10">
                        <div className="flex flex-col w-[200px] gap-3">
                            <label htmlFor="elevtype"> نوع آسانسور </label>
                            <select name="" id="elevtype" className="bg-gray-100 outline-0 border rounded-md p-1">
                                <option value=""> گیرلس </option>
                                <option value=""> گیرلس </option>
                                <option value=""> گیرلس </option>
                            </select>
                        </div>
                        <div className="flex flex-col 2xl:flex-row gap-10  justify-between">
                            <div className="flex flex-col w-[200px] gap-3">
                                <label htmlFor="elevtype"> ظرفیت کابین </label>
                                <select name="" id="elevtype" className="bg-gray-100 outline-0 border rounded-md p-1">
                                    <option value=""> 2 نفر </option>
                                    <option value=""> 3 نفر </option>
                                    <option value=""> 4 نفر </option>
                                    <option value=""> 5 نفر </option>
                                    <option value=""> 6 نفر </option>
                                    <option value=""> 7 نفر </option>
                                    <option value=""> 8 نفر </option>
                                    <option value=""> 9 نفر </option>
                                    <option value=""> 10 نفر </option>
                                </select>
                            </div>
                            <div className="flex flex-col w-[200px] gap-3">
                                <label htmlFor="elevtype"> تعداد توقف </label>
                                <select name="" id="elevtype" className="bg-gray-100 outline-0 border rounded-md p-1">
                                    <option value=""> 2 توقف  </option>
                                    <option value=""> 3 توقف </option>
                                    <option value=""> 4 توقف </option>
                                    <option value=""> 5 توقف </option>
                                    <option value=""> 6 توقف </option>
                                    <option value=""> 7 توقف </option>
                                    <option value=""> 8 توقف </option>
                                    <option value=""> 9 توقف </option>
                                    <option value=""> 10 توقف </option>
                                </select>
                            </div>
                            <div className="flex flex-col w-[200px] gap-3">
                                <label htmlFor="elevtype"> سرعت </label>
                                <select name="" id="elevtype" className="bg-gray-100 outline-0 border rounded-md p-1">
                                    <option value=""> 1 </option>
                                    <option value=""> 2 </option>
                                    <option value=""> 3 </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(2)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
                    <div className="bg-gray-400 h-2 w-full">
                        <div className="bg-blue-400 w-1/4 h-full"></div>
                    </div>
                    <p className="text-blue-400 text-center"> 25% </p>
                </div>
            </div>
        </form>
    )
}