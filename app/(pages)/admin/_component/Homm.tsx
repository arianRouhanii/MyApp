interface Stage1Props {
    setPageState: (page: number) => void;
}
export default function Homm({ setPageState }: Stage1Props) {
    return (
        <div className=" w-full gap-5 md:gap-10 2xl:mx-30 flex flex-col">
            <h2 className="text-4xl">خوش آمدید</h2>
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-20">
                <div className="w-full md:w-1/2 flex flex-row gap-3 md:gap-10 lg:gap-20">
                    <div className="bg-blue-200 justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <p className="text-xl 2xl:text-2xl"> بازدید سایت </p>
                        <p className="text-2xl 2xl:text-4xl"> 12 </p>
                    </div>
                    <div className="bg-blue-200 justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <p className="text-xl 2xl:text-2xl"> بازدید استعلام </p>
                        <p className="text-2xl 2xl:text-4xl"> 5 </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-row gap-3 md:gap-10 lg:gap-20">
                    <div className="bg-blue-200 justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <p className="text-xl 2xl:text-2xl"> قیمت دلار </p>
                        <p className="text-2xl 2xl:text-4xl"> 92,300 </p>
                    </div>
                    <div className="bg-blue-200 justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <p className="text-xl 2xl:text-2xl"> امروز </p>
                        <p className="text-2xl 2xl:text-4xl"> 1404/6/3 </p>
                    </div>
                </div>
            </div>
            <button onClick={() => setPageState(2)} className="w-full flex flex-row text-2xl bg-gray-300 rounded-lg p-5 justify-between">
                <div className="flex flex-row gap-2">
                    <svg viewBox="0 0 1024 1024" className="w-8 h-8" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M749.7 548.7l-164.6 91.4V823l164.6 91.4L914.3 823V640.1l-164.6-91.4zM841.1 780l-91.4 50.8-91.4-50.8v-96.8l91.4-50.8 91.4 50.8V780z" fill="#0F1F3C"></path><path d="M713.600831 737.455926a36.6 36.6 0 1 0 72.255718-11.719698 36.6 36.6 0 1 0-72.255718 11.719698Z" fill="#0F1F3C"></path><path d="M688.7 479.8c-12.7-6.2-25.7-11.8-38.9-16.6 49.8-40.3 81.6-101.8 81.6-170.6 0-121-98.4-219.4-219.4-219.4s-219.4 98.4-219.4 219.4c0 68.9 31.9 130.5 81.7 170.7-154.2 56.4-264.6 204.5-264.6 378h73.1c0-181.5 147.7-329.1 329.1-329.1 50.7 0 99.3 11.2 144.5 33.3l32.3-65.7zM512 146.3c80.7 0 146.3 65.6 146.3 146.3S592.7 438.9 512 438.9s-146.3-65.6-146.3-146.3S431.4 146.3 512 146.3z" fill="#0F1F3C"></path></g></svg>
                    <p> مشتریان جدید </p>
                </div>
                <div className="h-full aspect-square bg-blue-400 text-white justify-center flex items-center rounded-full pt-1"><p> 2 </p></div>
            </button>
            <button onClick={() => setPageState(2)} className="w-full flex flex-row text-2xl bg-gray-300 rounded-lg p-5 justify-between">
                <div className="flex flex-row gap-2">
                    <svg viewBox="0 0 1024 1024" className="w-8 h-8" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M146.3 73.06v877.71h512l219.43-239.38V73.06H146.3z m512.01 769.46V694.77h135.44L658.31 842.52z m146.27-220.89H585.16v256H219.44V146.2h585.14v475.43z" fill="#0F1F3C"></path><path d="M292.59 219.34h438.86v73.14H292.59zM292.59 365.63H658.3v73.14H292.59zM292.59 511.91h219.43v73.14H292.59z" fill="#0F1F3C"></path></g></svg>
                    <p> پیش فاکتورها </p>
                </div>
                <div className="h-full aspect-square bg-blue-400 text-white justify-center flex items-center rounded-full pt-1"><p> 2 </p></div>
            </button>
        </div>
    )
}
