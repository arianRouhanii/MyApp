"use client"
import { useRef, useEffect } from "react"
export default function Stage2({ setPageState }: any) {
    const selectRef = useRef<HTMLSelectElement>(null)
    const updateSelectColor = () => {
        if (selectRef.current) {
            const selectedOption = selectRef.current.options[selectRef.current.selectedIndex]
            selectRef.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor();
    }, [])

    const selectRef2 = useRef<HTMLSelectElement>(null)
    const updateSelectColor2 = () => {
        if (selectRef2.current) {
            const selectedOption = selectRef2.current.options[selectRef2.current.selectedIndex]
            selectRef2.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor2();
    }, [])

    const selectRef3 = useRef<HTMLSelectElement>(null)
    const updateSelectColor3 = () => {
        if (selectRef3.current) {
            const selectedOption = selectRef3.current.options[selectRef3.current.selectedIndex]
            selectRef3.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor3();
    }, [])
    const selectRef4 = useRef<HTMLSelectElement>(null)
    const updateSelectColor4 = () => {
        if (selectRef4.current) {
            const selectedOption = selectRef4.current.options[selectRef4.current.selectedIndex]
            selectRef4.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor4();
    }, [])
    const selectRef5 = useRef<HTMLSelectElement>(null)
    const updateSelectColor5 = () => {
        if (selectRef5.current) {
            const selectedOption = selectRef5.current.options[selectRef5.current.selectedIndex]
            selectRef5.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor5();
    }, [])
    const selectRef6 = useRef<HTMLSelectElement>(null)
    const updateSelectColor6 = () => {
        if (selectRef6.current) {
            const selectedOption = selectRef6.current.options[selectRef6.current.selectedIndex]
            selectRef6.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor6();
    }, [])
    const selectRef7 = useRef<HTMLSelectElement>(null)
    const updateSelectColor7 = () => {
        if (selectRef7.current) {
            const selectedOption = selectRef7.current.options[selectRef7.current.selectedIndex]
            selectRef7.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor7();
    }, [])
    const selectRef8 = useRef<HTMLSelectElement>(null)
    const updateSelectColor8 = () => {
        if (selectRef8.current) {
            const selectedOption = selectRef8.current.options[selectRef8.current.selectedIndex]
            selectRef8.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor8();
    }, [])
    const selectRef9 = useRef<HTMLSelectElement>(null)
    const updateSelectColor9 = () => {
        if (selectRef9.current) {
            const selectedOption = selectRef9.current.options[selectRef9.current.selectedIndex]
            selectRef9.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor9();
    }, [])
    const selectRef10 = useRef<HTMLSelectElement>(null)
    const updateSelectColor10 = () => {
        if (selectRef10.current) {
            const selectedOption = selectRef10.current.options[selectRef10.current.selectedIndex]
            selectRef10.current.style.color = selectedOption.style.color
        }
    }
    useEffect(() => {
        updateSelectColor10();
    }, [])
    return (
        <form className="2xl:h-[100vh] bg-[#EAEAEA] text-xl p-16" dir="rtl">
            <div className="gap-10 h-full w-full justify-between flex flex-col">
                <div className="w-full flex flex-col gap-5">
                    <h2 className="text-2xl"> مرحله 2 </h2>
                    <p> لطفا نوع قطعات را انتخاب کنید </p>
                    <div className="flex flex-col xl:flex-row gap-5 xl:gap-30">
                        <p> *در انتخاب قطعات به رنگ روبرو آنها توجه کنید </p>
                        <div className="flex flex-row gap-15 xl:gap-30">
                            <div className="flex flex-row-reverse gap-3">
                                <p className="text-green-500">&#9679;</p><p> اقتصادی </p>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <p className="text-blue-500">&#9679;</p><p> مرغوب </p>
                            </div>
                            <div className="flex flex-row-reverse gap-3">
                                <p className="text-orange-500 ">&#9679;</p><p> لوکس </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-10 flex flex-col gap-10">
                        <div className="flex-row flex gap-30">
                            <div className=" flex flex-col 2xl:flex-row gap-10">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef} onChange={updateSelectColor}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> کابین و تزیینات کابین </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef2} onChange={updateSelectColor2}>
                                            <option className="text-black" style={{ color: 'black' }}>  </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; 2  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; 3 </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; 4 </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع ریل </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef3} onChange={updateSelectColor3}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; 1  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; 2 </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; 3 </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع درب طبقات </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef4} onChange={updateSelectColor4}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; 1  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; 2 </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; 3 </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> نوع سیم بکسل </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef5} onChange={updateSelectColor5}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; 1  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; 2 </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; 3 </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row flex gap-30">
                            <div className=" flex flex-col 2xl:flex-row gap-10">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef6} onChange={updateSelectColor6}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef7} onChange={updateSelectColor7}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef8} onChange={updateSelectColor8}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef9} onChange={updateSelectColor9}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="standard-select"> موتور </label>
                                    <div className="select">
                                        <select id="color-select" dir="ltr" className="bg-gray-100 outline-0 border w-[300px] rounded-md p-1" ref={selectRef10} onChange={updateSelectColor10}>
                                            <option className="text-black" style={{ color: 'black' }}> </option>
                                            <option className="text-orange-500" style={{ color: 'orange' }}>  &#9679; موتور  </option>
                                            <option className="text-blue-500" style={{ color: 'blue' }}> &#9679; موتور </option>
                                            <option className="text-green-500" style={{ color: 'green' }}> &#9679; موتور </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(3)} className="rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
                    <div className="bg-gray-400 h-2 w-full">
                        <div className="bg-blue-400 w-1/2 h-full"></div>
                    </div>
                    <p className="text-blue-400 text-center"> 50% </p>
                </div>
            </div>
        </form>
    )
}