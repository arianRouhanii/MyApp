import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function News() {
    return (
        <div className="bg-[#272727] relative gap-10 flex flex-col py-20 px-3 lg:px-16 xl:px-96 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex left-14 xl:left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex right-14 xl:left-5/6"></div>
            <div className="flex flex-col text-sm gap-10 text-end">
                <h2 className="text-4xl text-white"><span className="text-blue-400"> اخبار </span> جاری </h2>
            </div>
            <div className="hidden md:flex swiper-container">
                <div className="swiper-wrapper ">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        loop={true}
                        className="mySwiper text-white w-full "
                        dir="rtl"
                    >
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-container flex md:hidden ">
                <div className="swiper-wrapper ">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        loop={true}
                        className="mySwiper text-white w-full "
                        dir="rtl"
                    >
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full flex flex-row gap-10">
                                <div className="z-10 group">
                                    <div className="bg-black overflow-hidden"><Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image></div>
                                    <div className="relative bottom-5 group-hover:bottom-30 flex flex-row justify-center pr-5">
                                        <div className="inline-block bg-blue-500 w-[90%] p-4 justify-center">
                                            <p className="text-xs mb-1">Septamber 12, 2021</p>
                                            <p className="text-2xl">لورم ایپسوم متن ساختگی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}