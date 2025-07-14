import Image from "next/image"
export default function Service() {
    return (
        <div id="service" className="bg-[#272727] relative gap-10 flex flex-col py-15 md:py-20 px-3 lg:px-16 2xl:px-96 w-full">
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex left-14 xl:left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-1/3 left-1/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 lg:left-2/3 left-5/6"></div>
            <div className="absolute top-0  h-full w-[1px] bg-gray-700 hidden lg:flex right-14 xl:left-5/6"></div>
            <div className="flex flex-col text-end text-sm gap-10 ">
                <h2 className="z-10 text-4xl text-white">  <span className="text-blue-400"> سرویس </span> های ما</h2>
            </div>
            <div className="text-white w-full flex flex-col z-10 md:flex-row-reverse gap-10">
                <div className="group md:w-1/3 hover:bg-gray-700 p-5 flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-5" dir="rtl">
                        <div className="w-10 h-10"><Image alt="" src={'/elevator.png'} width={1000} height={1000}></Image></div>
                        <p> طراحی و نصب آسانسور رافد  </p>
                        <div className="group-hover:w-full group-hover:bg-blue-400 h-[1px] w-[10%] bg-white" > </div>
                        <p> در رافد، ما به شما کمک می‌کنیم تا بهترین و مدرن‌ترین آسانسورها را برای ساختمان خود داشته باشید. تیم متخصص ما از مرحله مشاوره و طراحی اولیه تا نصب و راه‌اندازی کامل، با شما همراه است. ما با استفاده از به‌روزترین تکنولوژی‌ها و رعایت دقیق استانداردهای ایمنی، آسانسورهایی با عملکرد بی‌نقص، ظاهری زیبا و دوام بالا ارائه می‌دهیم که آسایش و اطمینان را برای کاربران به ارمغان می‌آورد </p>
                    </div>
                    <div className="flex flex-row justify-start text-4xl bat text-[#272727] group-hover:text-gray-700"><p>01</p></div>
                </div>
                <div className="group md:w-1/3 hover:bg-gray-700 p-5 flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-5" dir="rtl">
                        <div className="w-10 h-10"><Image alt="" src={'/escalator.png'} width={1000} height={1000}></Image></div>
                        <p> طراحی و نصب پله برقی رافد  </p>
                        <div className="group-hover:w-full group-hover:bg-blue-400 h-[1px] w-[10%]  bg-white" > </div>
                        <p> با رافد، فضاهای عمومی و تجاری خود را با پله برقی‌های با کیفیت و ایمن، متحول کنید. ما در زمینه طراحی و نصب انواع پله برقی برای مراکز خرید، فرودگاه‌ها، ایستگاه‌های مترو و سایر مکان‌های پرتردد، تجربه گسترده‌ای داریم. تمرکز ما بر طراحی ارگونومیک، مصرف انرژی بهینه و ایمنی حداکثری است تا تجربه‌ای روان و بدون دغدغه را برای میلیون‌ها نفر فراهم کنیم </p>
                    </div>
                    <div className="flex flex-row justify-start text-4xl bat text-[#272727] group-hover:text-gray-700"><p>02</p></div>
                </div>
                <div className="group md:w-1/3 hover:bg-gray-700 p-5 flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-5" dir="rtl">
                        <div className="w-10 h-10"><Image alt="" src={'/maintenance1.png'} width={1000} height={1000}></Image></div>
                        <p> سرویس و نگهداری آسانسور و پله برقی رافد </p>
                        <div className="group-hover:w-full group-hover:bg-blue-400 h-[1px] w-[10%]  bg-white" > </div>
                        <p> برای اطمینان از عملکرد پایدار و افزایش طول عمر آسانسورها و پله برقی‌های شما، رافد خدمات سرویس و نگهداری دوره‌ای و اضطراری را ارائه می‌دهد. تیم مجرب ما با بازدیدهای منظم، بررسی‌های فنی دقیق و انجام تعمیرات لازم، از بروز مشکلات احتمالی پیشگیری می‌کند. با رافد، آسوده‌خاطر باشید که تجهیزات شما همیشه در بهترین شرایط کاری قرار دارند و ایمنی و کارایی آن‌ها تضمین شده است </p>
                    </div>
                    <div className="flex flex-row justify-start text-4xl bat text-[#272727] group-hover:text-gray-700"><p>03</p></div>
                </div>
            </div>
        </div>
    )
}