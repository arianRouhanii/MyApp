export default function Homm() {
    return (
        <div className=" w-full gap-10 mx-30 hidden flex-col">
            <h2 className="text-4xl">خوش آمدید</h2>
            <div className="w-full flex flex-row gap-20">
                <div className="bg-blue-200 justify-evenly flex flex-col items-center w-1/4 aspect-square rounded-lg">
                    <p className="text-2xl"> بازدید سایت </p>
                    <p className="text-4xl"> 12 </p>
                </div>
                <div className="bg-blue-200 justify-evenly flex flex-col items-center w-1/4 aspect-square rounded-lg">
                    <p className="text-2xl"> بازدید استعلام </p>
                    <p className="text-4xl"> 5 </p>
                </div>
                <div className="bg-blue-200 justify-evenly flex flex-col items-center w-1/4 aspect-square rounded-lg">
                    <p className="text-2xl"> قیمت دلار </p>
                    <p className="text-4xl"> 92,300 </p>
                </div>
                <div className="bg-blue-200 justify-evenly flex flex-col items-center w-1/4 aspect-square rounded-lg">
                    <p className="text-2xl"> امروز </p>
                    <p className="text-4xl"> 30 مهر 1404 </p>
                </div>
            </div>
            <button className="w-full flex flex-row text-2xl bg-gray-300 rounded-lg p-5 justify-between">
                <p> مشتریان جدید </p>
                <div className="h-full aspect-square bg-blue-400 text-white justify-center flex items-center rounded-full"><p> 2 </p></div>
            </button>
            <button className="w-full flex flex-row text-2xl bg-gray-300 rounded-lg p-5 justify-between">
                <p> مشتریان جدید </p>
                <div className="h-full aspect-square bg-blue-400 text-white justify-center flex items-center rounded-full"><p> 2 </p></div>
            </button>
        </div>
    )
}
