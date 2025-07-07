import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Projects() {
    return (

        <div className="bg-[#272727] relative gap-10 flex flex-col py-15 md:py-20 px-3 lg:px-16 2xl:px-96 w-full">

            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex left-14 xl:left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex right-14 xl:left-5/6"></div>
            <div className="flex flex-col text-sm text-end gap-10 ">
                <h2 className="z-10 text-4xl text-white">  <span className="text-blue-400"> پروژه </span> های ما</h2>
            </div>
            <div className="swiper-container hidden md:flex">
                <div className="swiper-wrapper swiper-wrapper1" >
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
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 1 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 2 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 3 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 4 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-container md:hidden flex">
                <div className="swiper-wrapper swiper-wrapper1" >
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
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 1 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 2 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/1.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 3 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full z-10 flex flex-row gap-10">
                                <div className="group">
                                    <div className="overflow-hidden  bg-black" >
                                        <Image className="group-hover:opacity-60 group-hover:scale-110 " alt="" width={1000} height={1000} src={"/2.png"}></Image>
                                    </div>
                                    <div className="relative group-hover:bottom-40 bottom-25 gap-2 items-center flex flex-col ">
                                        <p className="text-blue-400"> پروژه  </p>
                                        <p className="text-2xl"> پروژه 4 </p>
                                        <div className="w-1/6 group-hover:w-[90%] h-[1px] bg-gray-400"></div>
                                        <div className="opacity-0 group-hover:opacity-100 text-2xl hover:text-blue-400 " >&lArr;</div>
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