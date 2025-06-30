
export default function Service() {
    return (
        <div className="bg-gray-800 relative gap-10 flex flex-col py-20 px-16 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex left-14"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex right-14"></div>
            <div className="flex flex-col text-end text-sm gap-10 ">
                <h2 className="z-10 text-4xl">  <span className="text-blue-400"> سرویس </span> های ما</h2>
            </div>
            <div className="w-full flex flex-row-reverse gap-10">
                <div className="w-1/3 hover:bg-gray-700 p-5 flex flex-col text-end gap-5">
                    <p> لورم ایپسوم </p>
                    <div className=" h-[1px] w-full bg-white"> </div>
                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                    <div className="flex flex-row justify-start text-4xl"><p>01</p></div>
                </div>
                <div className="w-1/3 hover:bg-gray-700 p-5 flex flex-col text-end gap-5">
                    <p> لورم ایپسوم </p>
                    <div className=" h-[1px] w-full bg-white"> </div>
                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                    <div className="flex flex-row justify-start text-4xl"><p>02</p></div>
                </div>
                <div className="w-1/3 hover:bg-gray-700 p-5 flex flex-col text-end gap-5">
                    <p> لورم ایپسوم </p>
                    <div className=" h-[1px] w-full bg-white"> </div>
                    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                    <div className="flex flex-row justify-start text-4xl"><p>03</p></div>
                </div>
            </div>
        </div>
    )
}