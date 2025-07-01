import { useRef, useEffect, useState } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export default function Start() {
    const textRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (textRef.current) {
            textRef.current.classList.remove("opacity-0", "translate-y-6");
            textRef.current.classList.add("opacity-100", "translate-y-0");
        }
    }, []);

    const [offset, setOffset] = useState(314);

    useEffect(() => {
        const onScroll = () => {
            const scroll = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            const percent = scroll / height;
            const newOffset = 314 - 314 * percent;
            setOffset(newOffset);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div className="w-full h-[100vh] flex flex-row">
            <div className="relative swiper-container w-full lg:w-[92%]">
                <div className="swiper-wrapper ">
                    <Swiper
                        navigation={true}
                        loop={true}
                        modules={[ Autoplay]}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper">
                        <SwiperSlide className="px-10 xl:px-56 py-30 w-1/2 flex justify-end items-end flex-col bg-[url(/start1.png)] ">
                            <div className="py-30 text-black  gap-10 flex flex-col  " dir="rtl">
                                <p className="w-full xl:w-2/3 text-3xl md:text-5xl">
                                    قبل از تصمیم‌گیری، آنلاین استعلام بگیرید، با اطمینان خاطر خرید کنید و باقی کار را به ما بسپارید
                                </p>
                                <div className="w-full xl:w-1/2 text-sm md:text-lg">
                                    <p>
                                        در رافد، ما به شفافیت و رضایت شما اهمیت می‌دهیم. می‌دانیم که انتخاب آسانسور یا پله برقی مناسب برای پروژه شما یک تصمیم مهم است. به همین دلیل، شما را تشویق می‌کنیم تا ابتدا به صورت آنلاین استعلام قیمت بگیرید و مقایسه کنید. پس از آنکه با اطمینان کامل از انتخاب خود مطمئن شدید، با خیالی آسوده اجرا و نصب را به تیم متخصص ما بسپارید. ما کیفیت، ایمنی و آرامش خاطر را برای شما تضمین می‌کنیم
                                    </p>
                                </div>
                                <div className="group flex relative xl:w-2/3">
                                    <div className="group-hover: absolute bg-black h-full w-0"></div>
                                    <button id="mainbtn" className="mainbtn boder hover:bg-black hover:text-blue-400 border-[1px] text-2xl border-black py-4 px-10 "> استعلام آنلاین </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-10 xl:px-56 py-30 flex justify-center items-center flex-col bg-[url(/start2.png)]">
                            <div className="py-30 text-black gap-10 flex flex-col  " dir="rtl">
                                <p className="w-full xl:w-2/3 text-3xl md:text-5xl">
                                    قبل از تصمیم‌گیری، آنلاین استعلام بگیرید، با اطمینان خاطر خرید کنید و باقی کار را به ما بسپارید
                                </p>
                                <div className="w-full xl:w-1/2 text-sm md:text-lg">
                                    <p>
                                        در رافد، ما به شفافیت و رضایت شما اهمیت می‌دهیم. می‌دانیم که انتخاب آسانسور یا پله برقی مناسب برای پروژه شما یک تصمیم مهم است. به همین دلیل، شما را تشویق می‌کنیم تا ابتدا به صورت آنلاین استعلام قیمت بگیرید و مقایسه کنید. پس از آنکه با اطمینان کامل از انتخاب خود مطمئن شدید، با خیالی آسوده اجرا و نصب را به تیم متخصص ما بسپارید. ما کیفیت، ایمنی و آرامش خاطر را برای شما تضمین می‌کنیم
                                    </p>
                                </div>
                                <div className="group flex relative xl:w-2/3">
                                    <div className="group-hover: absolute bg-black h-full w-0"></div>
                                    <button id="mainbtn" className="mainbtn boder hover:bg-black hover:text-blue-400 border-[1px] text-2xl border-black py-4 px-10"> استعلام آنلاین </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="hidden lg:w-[8%] justify-end lg:flex flex-col items-center pb-3 gap-2 bg-[#272727]">
                <div className="w-[1px] h-16 bg-gray-700"></div>
                <button className="rounded-full w-9 h-9 border border-gray-500 hover:border-blue-400 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/facebook.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 hover:border-blue-400 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/instagram.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 hover:border-blue-400 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/x.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 hover:border-blue-400 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/telegram.svg"}></Image></button>
            </div>


            <a href="#top" className="bg-white rounded-full z-50 bottom-5 right-5 fixed" >
                <svg width={40} height={40}>
                    <circle
                        cx={20}
                        cy={20}
                        r={19}
                        stroke="#eee"
                        strokeWidth={2}
                        fill="none"
                    />
                    <circle
                        cx={20}
                        cy={20}
                        r={19}
                        stroke="#3498db"
                        strokeWidth={2}
                        fill="none"
                        strokeDasharray="314"
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 0s ease-out' }}
                    />
                    <text
                        x="20"
                        y="22"
                        textAnchor="middle"
                        fontSize="20"
                        fill="#3498db"
                        dominantBaseline="middle"
                    >
                        &#8679;
                    </text>
                </svg>

            </a>
            <div className="border-white border-b hidden w-16 absolute bottom-15 left-15 lg:flex  border-l aspect-square "></div>
        </div>
    )
}