import { useRef, useEffect, useState } from "react"
import Image from "next/image";
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
        <div className=" w-full relative flex flex-row">
            <div className=" justify-start pl-20 w-full flex p-15 bg-[url(/1.png)] ">
                <div ref={textRef} className="py-30 text-white gap-10 flex flex-col opacity-0 translate-y-6 transition-all ease-out">
                    <p className="text-3xl md:text-5xl"> salam </p>
                    <div className="w-2/3 md:w-1/2 text-sm md:text-lg"><p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  </p></div>
                    <div className="group relative">
                        <div className="group-hover: absolute bg-white h-full w-0"></div>
                        <button  id="mainbtn" className="mainbtn boder  border-[1px] border-white py-2 px-4">BUY NOW </button>
                        </div>
                </div>
            </div>
            <div className="hidden  w-32 justify-end lg:flex flex-col items-center pb-3 gap-2 bg-gray-800">
                <div className="w-[1px] h-16 bg-gray-500"></div>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/facebook.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/instagram.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={20} height={20} src={"/x.svg"}></Image></button>
                <button className="rounded-full w-9 h-9 border border-gray-500 justify-center items-center flex "><Image alt="" width={30} height={30} src={"/telegram.svg"}></Image></button>
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