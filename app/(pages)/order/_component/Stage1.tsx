interface Stage1Props {
    setPageState: (page: number) => void;
}
import React, { useState } from 'react'
export default function Stage1({ setPageState }: Stage1Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const options = {
        first1: ['0.63', '1'],first2: ['0.63', '1'],first3: ['0.63', '1'],first4: ['0.63', '1'],
        second1: ['1', '1.6'],second2: ['1', '1.6'],second3: ['1', '1.6'],second4: ['1', '1.6'],second5: ['1', '1.6'],second6: ['1', '1.6'],second7: ['1', '1.6'],
        third1: ['1.6', '2'],third2: ['1.6', '2'],third3: ['1.6', '2'],third4: ['1.6', '2'],third5: ['1.6', '2'],third6: ['1.6', '2'],third7: ['1.6', '2'],third8: ['1.6', '2'],
    }
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }
    return (
        <form className="2xl:h-[100vh] bg-[#272727] text-xl " dir="rtl">
            <div className="gap-10 h-full justify-between flex flex-col">
                <div className="2xl:w-1/2 flex px-5 md:px-16 mt-16 flex-col gap-5">
                    <h2 className="text-2xl text-blue-400 font-bold"> مرحله 1 </h2>
                    <p> لطفا ابتدا نوع آسانسور و ظرفیت کابین و تعداد توقف را انتخاب نموده و سپس سرعت را انتخاب کنید. </p>
                    <div className="flex flex-col justify-center py-10 mb-30 2xl:mb-0 gap-10">
                        <div className="flex flex-col md:w-[200px] gap-3">
                            <label htmlFor="elevtype"> نوع آسانسور </label>
                            <select name="" id="elevtype" className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                <option value=""> کششی </option>
                                <option value=""> گیرلس </option>
                                <option value=""> هیدرولیک </option>
                            </select>
                        </div>
                        <div className="flex flex-col 2xl:flex-row gap-10  justify-between">
                            <div className="flex flex-col md:w-[200px] gap-3">
                                <label htmlFor="elevtype"> ظرفیت کابین </label>
                                <select name="" id="elevtype" className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                    <option value=""> 1 نفر </option>
                                    <option value=""> 2 نفر </option>
                                    <option value=""> 3 نفر </option>
                                    <option value=""> 4 نفر </option>
                                    <option value=""> 5 نفر </option>
                                    <option value=""> 6 نفر </option>
                                    <option value=""> 7 نفر </option>
                                    <option value=""> 8 نفر </option>
                                    <option value=""> 9 نفر </option>
                                    <option value=""> 10 نفر </option>
                                    <option value=""> 11 نفر </option>
                                    <option value=""> 12 نفر </option>
                                    <option value=""> 13 نفر </option>
                                    <option value=""> 14 نفر </option>
                                    <option value=""> 15 نفر </option>
                                    <option value=""> 16 نفر </option>
                                    <option value=""> 17 نفر </option>
                                    <option value=""> 18 نفر </option>
                                    <option value=""> 19 نفر </option>
                                    <option value=""> 20 نفر </option>
                                </select>
                            </div>
                            <div className="flex flex-col md:w-[200px] gap-3">
                                <label htmlFor="select1"> تعداد توقف </label>
                                <select id="select1" value={selectedCategory} onChange={handleCategoryChange} className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                    <option value="first1"> 2 توقف  </option>
                                    <option value="first2"> 3 توقف </option>
                                    <option value="first3"> 4 توقف </option>
                                    <option value="first4"> 5 توقف </option>
                                    <option value="second1"> 6 توقف </option>
                                    <option value="second2"> 7 توقف </option>
                                    <option value="second3"> 8 توقف </option>
                                    <option value="second4"> 9 توقف </option>
                                    <option value="second5"> 10 توقف </option>
                                    <option value="second6"> 11 توقف </option>
                                    <option value="second7"> 12 توقف </option>
                                    <option value="third1"> 13 توقف </option>
                                    <option value="third2"> 14 توقف </option>
                                    <option value="third3"> 15 توقف </option>
                                    <option value="third4"> 16 توقف </option>
                                    <option value="third5"> 17 توقف </option>
                                    <option value="third6"> 18 توقف </option>
                                    <option value="third7"> 19 توقف </option>
                                    <option value="third8"> 20 توقف </option>
                                </select>
                            </div>
                            <div className="flex flex-col md:w-[200px] gap-3">
                                <label htmlFor="select2"> سرعت </label>
                                <select id="select2" className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                    {!selectedCategory ? (
                                        <option value="">--</option>
                                    ) : (
                                        options[selectedCategory as keyof typeof options].map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-5 md:px-16 xl:fixed w-full bottom-0 py-2 bg-[#272727] flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(2)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-full md:w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute left-5 top-3">&#129120;</p>
                        </button>
                    </div>
                    <div className="bg-gray-400 h-2 w-full">
                        <div className="bg-blue-400 w-1/4 h-full"></div>
                    </div>
                    <p className="text-blue-400 text-center"> 25% </p>
                </div>
            </div>
        </form>
    )
}