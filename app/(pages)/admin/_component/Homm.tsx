interface Stage1Props {
    setPageState: (page: number) => void;
}

import React, { useState, useEffect } from "react";
export default function Homm({ setPageState }: Stage1Props) {
    const [currentDate, setCurrentDate] = useState<string>('');
    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const persianDate = date.toLocaleDateString('fa-IR', options)
        setCurrentDate(persianDate);
    }, []);

    const [price, setPrice] = useState<string>('...')
    useEffect(() => {
        const onPageLoad = () => {
            fetch("https://corsproxy.io/?https://apiv2.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls").then(res => res.json()).then(data => setPrice(data.stats["usdt-rls"].latest)).catch(() => setPrice('خطا'));
        }
        onPageLoad();
    }, []);
    return (
        <div className=" w-full gap-5 md:gap-10 2xl:mx-30 flex flex-col">
            <h2 className="text-xl font-bold md:text-4xl">خوش آمدید</h2>
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-20">
                <div className="w-full md:w-1/2 flex flex-row gap-3 md:gap-10 lg:gap-20">
                    <div className="bg-blue-200 relative justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <svg viewBox="0 -0.5 21 21" className="absolute opacity-15 w-2/3 h-2/3" version="1.1"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" fill="none" > <g id="Dribbble-Light-Preview" transform="translate(-139.000000, -840.000000)" fill="#6E9FC1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M99.8,698 L101.9,698 L101.9,682 L99.8,682 L99.8,698 Z M97.7,700 L104,700 L104,680 L97.7,680 L97.7,700 Z M85.1,698 L87.2,698 L87.2,686 L85.1,686 L85.1,698 Z M83,700 L89.3,700 L89.3,684 L83,684 L83,700 Z M92.45,698 L94.55,698 L94.55,692 L92.45,692 L92.45,698 Z M90.35,700 L96.65,700 L96.65,690 L90.35,690 L90.35,700 Z" id="stats-[#1368]"> </path> </g> </g> </g> </g></svg>
                        <p className="text-sm md:text-xl 2xl:text-2xl z-10"> بازدید سایت </p>
                        <p className="text-xl md:text-2xl 2xl:text-4xl z-10"> 12 </p>
                    </div>
                    <div className="bg-blue-200 relative justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <svg viewBox="0 0 1024 1024" className="absolute w-2/3 h-2/3 opacity-15" fill="#6E9FC1"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M146.3 73.06v877.71h512l219.43-239.38V73.06H146.3z m512.01 769.46V694.77h135.44L658.31 842.52z m146.27-220.89H585.16v256H219.44V146.2h585.14v475.43z" fill="#6E9FC1"></path><path d="M292.59 219.34h438.86v73.14H292.59zM292.59 365.63H658.3v73.14H292.59zM292.59 511.91h219.43v73.14H292.59z" fill="#6E9FC1"></path></g></svg>
                        <p className="text-sm md:text-xl 2xl:text-2xl"> بازدید استعلام </p>
                        <p className="text-xl md:text-2xl 2xl:text-4xl"> 5 </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-row gap-3 md:gap-10 lg:gap-20">
                    <div className="bg-blue-200 relative justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <svg className="absolute w-2/3 h-2/3 opacity-15" fill="#6E9FC1" viewBox="0 0 24 24" stroke="#6E9FC1"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M8.5,23a9.069,9.069,0,0,0,3.5-.68,8.92,8.92,0,0,0,3.5.68c3.645,0,6.5-1.945,6.5-4.429V14.429C22,11.945,19.145,10,15.5,10c-.169,0-.335.008-.5.017V5.333C15,2.9,12.145,1,8.5,1S2,2.9,2,5.333V18.667C2,21.1,4.855,23,8.5,23ZM20,18.571C20,19.72,18.152,21,15.5,21S11,19.72,11,18.571v-.925a8.329,8.329,0,0,0,4.5,1.211A8.329,8.329,0,0,0,20,17.646ZM15.5,12c2.652,0,4.5,1.28,4.5,2.429s-1.848,2.428-4.5,2.428S11,15.577,11,14.429,12.848,12,15.5,12Zm-7-9C11.152,3,13,4.23,13,5.333S11.152,7.667,8.5,7.667,4,6.437,4,5.333,5.848,3,8.5,3ZM4,8.482A8.466,8.466,0,0,0,8.5,9.667,8.466,8.466,0,0,0,13,8.482V10.33a6.47,6.47,0,0,0-2.9,1.607,7.694,7.694,0,0,1-1.6.174c-2.652,0-4.5-1.23-4.5-2.333Zm0,4.445a8.475,8.475,0,0,0,4.5,1.184c.178,0,.35-.022.525-.031A3.1,3.1,0,0,0,9,14.429v2.085c-.168.01-.33.042-.5.042-2.652,0-4.5-1.23-4.5-2.334Zm0,4.444a8.466,8.466,0,0,0,4.5,1.185c.168,0,.333-.013.5-.021v.036a3.466,3.466,0,0,0,.919,2.293A7.839,7.839,0,0,1,8.5,21C5.848,21,4,19.77,4,18.667Z"></path></g></svg>
                        <p className="text-sm md:text-xl 2xl:text-2xl"> قیمت دلار </p>
                        <p className="text-xl md:text-2xl 2xl:text-4xl"> {price}</p>
                    </div>
                    <div className="bg-blue-200 relative justify-between md:justify-evenly flex flex-row md:flex-col p-2 md:p-0 items-center w-1/2 md:aspect-square rounded-lg">
                        <svg className="absolute w-2/3 h-2/3 opacity-15" fill="#6E9FC1" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                        <p className="text-sm md:text-xl 2xl:text-2xl"> امروز </p>
                        <p className="text-xl md:text-2xl 2xl:text-4xl">{currentDate} </p>
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
