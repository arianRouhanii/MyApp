import Image from "next/image"
export default function About() {
    return (
        <div className="bg-[#272727] gap-10 flex relative md:flex-row flex-col-reverse py-20 px-3 pt lg:px-16 xl:px-96 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex left-14 xl:left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex right-14 xl:left-5/6"></div>
            <div className="w-full md:w-1/2 flex flex-col justify-end relative">
                <div className="border-[1px] hidden md:flex absolute  top-4 z-10  w-full h-[90%] left-5 border-gray-500"> </div>
                <div className="relative z-10"><Image className=" hover:scale-95 " alt="" width={1000} height={1000} src={"/about.png"}></Image></div>
                <div className="relative z-10 bottom-5 flex flex-row justify-start pl-5"><p className="inline-block bg-blue-500 px-8 py-4 text-white  text-sm justify-end">دفتر تهران</p></div>
            </div>
            <div className="flex text-white z-10 flex-col text-end text-sm gap-10 w-full md:w-1/2">
                <h2 className="text-4xl">
                    درباره ما
                    <span>:</span>
                    <span className="text-blue-400"> رافد آسمان سا </span>
                </h2>
                <p> رافد آسمان سا با سال‌ها تجربه در صنعت آسانسور و پله برقی، نامی مطمئن در زمینه ارائه راه‌حل‌های جامع و تخصصی حمل و نقل عمودی است. ما با تیمی مجرب و متعهد از مهندسین و تکنسین‌ها، در تمامی مراحل طراحی، مشاوره، نصب، راه‌اندازی و خدمات پس از فروش آسانسور و پله برقی، همواره در کنار شما هستیم </p>
                <p> ماموریت ما در رافد آسمان سا، ارائه محصولاتی با بالاترین استانداردهای کیفیت، ایمنی و نوآوری است تا با ایجاد تجربه‌ای ایمن، راحت و کارآمد، به بهبود کیفیت زندگی و فضای شهری کمک کنیم. تعهد ما به رضایت مشتری، دقت در جزئیات و استفاده از به‌روزترین فناوری‌ها، ما را به انتخابی مطمئن در این صنعت تبدیل کرده است </p>
            </div>
        </div>
    )
}