import Image from "next/image"
export default function About() {
    return (
        <div className="bg-gray-800 gap-10 flex relative md:flex-row flex-col-reverse py-20 px-16 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex left-14"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-500 hidden lg:flex right-14"></div>
            <div className="w-full md:w-1/2 flex flex-col justify-end relative">
                <div className="border-[1px] absolute  top-4 z-10  w-full h-[90%] left-5 border-gray-500"> </div>
                <div className="relative z-10"><Image className=" hover:scale-95 " alt="" width={1000} height={1000} src={"/Picture.webp"}></Image></div>
                <div className="relative z-10 bottom-5 flex flex-row justify-start pl-5"><p className="inline-block bg-blue-500 px-8 py-4  text-sm justify-end">دفتر تهران</p></div>
            </div>
            <div className="flex z-10 flex-col text-end text-sm gap-10 w-full md:w-1/2">
                <h2 className="text-4xl"> درباره <span className="text-blue-400">کمپانی</span> </h2>
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            </div>
        </div>
    )
}