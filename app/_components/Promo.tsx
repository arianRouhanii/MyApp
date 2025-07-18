
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
export default function Promo() {
    useEffect(() => {
        const onPageLoad = () => {
            const video: HTMLElement | null = document?.getElementById('video')
            video?.classList.add('close2')
            const vidbtn: HTMLElement | null = document?.getElementById('vidbtn')
            const vidbtn2: HTMLElement | null = document?.getElementById('vidbtn2')

            vidbtn?.addEventListener("click", function () {
                video?.classList.remove('close2')
            })

            vidbtn2?.addEventListener("click", function () {
                video?.classList.add('close2')
            })
        };

        onPageLoad();
    }, []);
    return (
        <div>
            <div className='fixed top-0 justify-center items-center flex z-50 w-[100%] h-[100vh] close2' id='video' >
                <div className='bg-black opacity-50 w-full h-full' id='vidbtn2'>
                </div>
                <div className='bg-white absolute w-[80%] aspect-video rounded-lg opacity-100'></div>
            </div>
            <div className="lg:bg-fixed gap-10 flex lg:flex-row flex-col p-3 lg:p-15 2xl:px-96  bg-[url(/fixedbg.jpg)] ">
                <div className="text-white lg:p-0 p-3">
                    <button id='vidbtn' className="rounded-full flex justify-center hover:opacity-70 items-center pt-2 pl-1 w-25 h-25 text-4xl bg-blue-400"><p>&#9655;</p></button>
                    <p className="text-xl lg:mb-30 mt-2 text-blue-400"> مشاهده ویدیوی تبلیغاتی </p>
                </div>
                <div className=" w-full lg:hidden flex">
                    <div className=" gap-5 flex flex-col w-[95%] p-10 h-[400px]  bg-[#272727] mx-3 ">
                        <p className="text-xl text-end text-white"> مشتریان چه می گویند؟ </p>
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
                                            <div className='absolute  bottom-[10%] text-8xl text-[#303030]'>01</div>
                                            <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                            <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                                <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile1.jpg"} alt='' height={1000} width={1000}></Image></div>
                                                <div>
                                                    <p className="text-blue-400">Jason brown</p>
                                                    <p>Plaza owner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-gray-400 gap-5 flex relative  flex-col">
                                            <div className='absolute right-0 bottom-[10%] text-8xl text-[#303030]'>02</div>
                                            <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                            <div className="flex z-10 flex-row gap-5 " dir='ltr'>
                                                <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile2.jpg"} alt='' height={1000} width={1000}></Image></div>
                                                <div>
                                                    <p className="text-blue-400">Jason brown</p>
                                                    <p>Plaza owner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-gray-400 gap-5 flex relative  flex-col">
                                            <div className='absolute right-0 bottom-[10%] text-8xl text-[#303030]'>03</div>
                                            <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه  و مجله در ستون و سطرآنچنان که لازم است </p>
                                            <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                                <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile3.jpg"} alt='' height={1000} width={1000}></Image></div>
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
            </div>
            <div className="relative  hidden lg:flex">
                <div className="-bottom-15 gap-5 flex flex-col p-10 h-[400px]  right-15 2xl:right-96 z-10 lg:absolute bg-[#272727] mx-3  lg:w-[35%]">
                    <p className="text-xl text-end text-white"> مشتریان چه می گویند؟ </p>
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
                                        <div className='absolute right-0 bottom-[10%] text-8xl text-[#303030]'>01</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                            <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile1.jpg"} alt='' height={1000} width={1000}></Image></div>
                                            <div>
                                                <p className="text-blue-400">Jason brown</p>
                                                <p>Plaza owner</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-gray-400 gap-5 flex relative  flex-col">
                                        <div className='absolute right-0 bottom-[10%] text-8xl text-[#303030]'>02</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5 " dir='ltr'>
                                            <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile2.jpg"} alt='' height={1000} width={1000}></Image></div>
                                            <div>
                                                <p className="text-blue-400">Jason brown</p>
                                                <p>Plaza owner</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-gray-400 gap-5 flex relative  flex-col">
                                        <div className='absolute right-0 bottom-[10%] text-8xl text-[#303030]'>03</div>
                                        <p className='z-10'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه  و مجله در ستون و سطرآنچنان که لازم است </p>
                                        <div className="flex z-10 flex-row gap-5" dir='ltr'>
                                            <div className="rounded-full w-10 h-10 overflow-hidden"><Image src={"/profile3.jpg"} alt='' height={1000} width={1000}></Image></div>
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
            <div className="bottom-0 md:pl-15 bg-[#303030] h-[100px] w-full">
                <div className="swiper-container lg:w-[55%]">
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
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon1.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon2.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon3.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon4.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon1.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon2.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon3.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                            <SwiperSlide className='text-blue-400 hover:text-white'>
                                <div className='w-full h-full'><Image alt='' src={'/icon4.png'} width={100} height={100}></Image></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}