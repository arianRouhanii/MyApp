
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
export default function Promo() {
    return (
        <div>
            <div className="bg-fixed flex p-15 bg-[url(/Picture.webp)] ">
                <div className="">
                    <button className="rounded-full flex justify-center hover:opacity-70 items-center w-25 h-25 text-4xl bg-blue-400">&#9655;</button>
                    <p className="text-xl mb-30 mt-2"> مشاهده ویدیوی تبلیغاتی </p>
                </div>
            </div>
            <div className="relative ">
                <div className="-bottom-15 gap-5 flex flex-col p-10 h-[400px]  right-15 absolute bg-gray-800  w-[35%]">
                    <p className="text-xl text-end"> مشتریان چه می گویند؟ </p>
                    <hr className="text-gray-400" />
                    <div className="swiper-container">
                        <div className="swiper-wrapper ">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}

                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                loop={true}
                                className="mySwiper w-full "
                                dir="rtl"
                            >
                                <SwiperSlide>
                                    <div className="text-gray-400 gap-5 flex relative  flex-col">
                                        <div className='absolute right-0 bottom-[10%] text-8xl text-gray-700'>66</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                            <div className="rounded-full w-10 h-10 bg-white"></div>
                                            <div>
                                                <p className="text-blue-400">Jason brown</p>
                                                <p>Plaza owner</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-gray-400 gap-5 flex relative  flex-col">
                                        <div className='absolute right-0 bottom-[10%] text-8xl text-gray-700'>66</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5 " dir='ltr'>
                                            <div className="rounded-full w-10 h-10 bg-white"></div>
                                            <div>
                                                <p className="text-blue-400">Jason brown</p>
                                                <p>Plaza owner</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-gray-400 gap-5 flex relative  flex-col">
                                        <div className='absolute right-0 bottom-[10%] text-8xl '>66</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه  و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                            <div className="rounded-full w-10 h-10 bg-white"></div>
                                            <div >
                                                <p className="text-blue-400">Jason brown</p>
                                                <p>Plaza owner</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div className="bottom-0 pl-15 pt-10 bg-gray-500 text-black h-[100px] w-full">
                <div className="swiper-container w-[55%]">
                    <div className="swiper-wrapper ">
                        <Swiper

                            slidesPerView={4}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper w-full text-blue-400 "
                        >
                            <SwiperSlide className='text-blue-400 flex hover:text-white'>
                                slide 1
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 2
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 3
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 4
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 5
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 6
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 7
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                slide 8
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}