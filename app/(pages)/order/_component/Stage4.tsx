interface Stage4Props {
    setPageState: (page: number) => void;
}
export default function Stage4({ setPageState }: Stage4Props) {
    return (
        <form className="2xl:h-[100vh] bg-[#EAEAEA] text-xl p-16" dir="rtl">
            <div className="gap-10 h-full justify-between flex flex-col">
                <div className="2xl:w-1/2 flex flex-col gap-5">
                    <h2 className="text-2xl font-bold text-blue-400"> مرحله 4 </h2>
                    <p> در این مرحله پیش فاکتور خود را دریافت کنید.در صورت هرگونه سوال با ما تماس بگیرید. </p>
                    <div className="flex flex-col py-10 gap-10">
                        <div className="flex flex-col w-[200px] gap-3">
                            <button className="bg-blue-400 border border-black text-white rounded-lg p-2">دانلود فایل</button>
                        </div>
                        <div className="flex flex-col 2xl:flex-row gap-10  justify-between">
                            <div className="flex flex-col w-[200px] gap-3">
                                <button className="bg-gray-100 border border-blue-400 hover:text-blue-400 hover:border-black rounded-lg p-2"> کارشناس فروش </button>
                            </div>
                            <div className="flex flex-col w-[200px] gap-3">
                                <button className="bg-gray-100 border border-blue-400 hover:text-blue-400 hover:border-black rounded-lg p-2"> کارشناس فروش </button>
                            </div>
                            <div className="flex flex-col w-[200px] gap-3">
                                <button className="bg-gray-100 border border-blue-400 hover:text-blue-400 hover:border-black rounded-lg p-2"> کارشناس فروش </button>
                            </div>
                        </div>
                        <p className="border-r px-3 flex"> آدرس: اصفهان </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(1)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
                    <div className="bg-gray-400 h-2 w-full">
                        <div className="bg-blue-400 w-full h-full"></div>
                    </div>
                    <p className="text-blue-400 text-center"> 100% </p>
                </div>
            </div>
        </form>
    )
}