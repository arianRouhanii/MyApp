interface Stage1Props {
    setPageState: (page: number) => void;
}
import Image from 'next/image';
import React, { useState } from 'react'

export default function Stage1({ setPageState }: Stage1Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [selectedCapacity, setSelectedCapacity] = useState<string>('')
    const [selectedSpeed, setSelectedSpeed] = useState<string>('')
    const options = {
        first1: ['--', '1m/s'], first2: ['--', '1m/s'], first3: ['--', '1m/s'], first4: ['--', '1m/s'],
        second1: ['--', '1m/s', '1.6m/s'], second2: ['--', '1m/s', '1.6m/s'], second3: ['--', '1m/s', '1.6m/s'], second4: ['--', '1m/s', '1.6m/s'], second5: ['--', '1m/s', '1.6m/s'], second6: ['--', '1m/s', '1.6m/s'], second7: ['--', '1m/s', '1.6m/s'],
        third1: ['--', '1.6m/s', '2m/s'], third2: ['--', '1.6m/s', '2m/s'], third3: ['--', '1.6m/s', '2m/s'], third4: ['--', '1.6m/s', '2m/s'], third5: ['--', '1.6m/s', '2m/s'], third6: ['--', '1.6m/s', '2m/s'], third7: ['--', '1.6m/s', '2m/s'], third8: ['--', '1.6m/s', '2m/s'], third9: ['--', '1.6m/s', '2m/s'], third10: ['--', '1.6m/s', '2m/s'], third11: ['--', '1.6m/s', '2m/s'], third12: ['--', '1.6m/s', '2m/s'], third13: ['--', '1.6m/s', '2m/s'],
    }
    const options2 = {
        first1: ['--', '4', '5', '6', '8', '10', '13', '15', '17'], first2: ['--', '4', '5', '6', '8', '10', '13', '15', '17'], first3: ['--', '4', '5', '6', '8', '10', '13', '15', '17'], first4: ['--', '4', '5', '6', '8', '10', '13', '15', '17'], second1: ['--', '4', '5', '6', '8', '10', '13', '15', '17'], second2: ['--', '4', '5', '6', '8', '10', '13', '15', '17'],
        second3: ['--', '5', '6', '8', '10', '13', '15', '17'], second4: ['--', '5', '6', '8', '10', '13', '15', '17'], second5: ['--', '5', '6', '8', '10', '13', '15', '17'],
        second6: ['--', '8', '10', '13', '15', '17'], second7: ['--', '8', '10', '13', '15', '17'], third1: ['--', '8', '10', '13', '15', '17'], third2: ['--', '8', '10', '13', '15', '17'], third3: ['8', '10', '13', '15', '17'],
        third4: ['--', '10', '13', '15', '17'], third5: ['--', '10', '13', '15', '17'], third6: ['--', '10', '13', '15', '17'], third7: ['--', '10', '13', '15', '17'], third8: ['--', '10', '13', '15', '17'], third9: ['--', '10', '13', '15', '17'], third10: ['--', '10', '13', '15', '17'], third11: ['--', '10', '13', '15', '17'], third12: ['--', '10', '13', '15', '17'], third13: ['--', '10', '13', '15', '17'],
    }
    const power1 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '4' && selectedSpeed === '1m/s'
    )
    const power2 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '5' && selectedSpeed === '1m/s'
    )
    const power3 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '6' && selectedSpeed === '1m/s'
    )
    const power4 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '8' && selectedSpeed === '1m/s'
    )
    const power5 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '10' && selectedSpeed === '1m/s'
    )
    const power6 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '13' && selectedSpeed === '1m/s'
    )
    const power7 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '15' && selectedSpeed === '1m/s'
    )
    const power8 = (
        (selectedCategory === 'first1' || selectedCategory === 'first2' || selectedCategory === 'first3' || selectedCategory === 'first4' || selectedCategory === 'second1' || selectedCategory === 'second2') && selectedCapacity === '17' && selectedSpeed === '1m/s'
    )
    const power9 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '4' && selectedSpeed === '1.6m/s'
    )
    const power10 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '5' && selectedSpeed === '1.6m/s'
    )
    const power11 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '6' && selectedSpeed === '1.6m/s'
    )
    const power12 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '8' && selectedSpeed === '1.6m/s'
    )
    const power13 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '10' && selectedSpeed === '1.6m/s'
    )
    const power14 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '13' && selectedSpeed === '1.6m/s'
    )
    const power15 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '15' && selectedSpeed === '1.6m/s'
    )
    const power16 = (
        (selectedCategory === 'second2' || selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '17' && selectedSpeed === '1.6m/s'
    )
    const power17 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '5' && selectedSpeed === '1m/s'
    )
    const power18 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '6' && selectedSpeed === '1m/s'
    )
    const power19 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '8' && selectedSpeed === '1m/s'
    )
    const power20 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '10' && selectedSpeed === '1m/s'
    )
    const power21 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '13' && selectedSpeed === '1m/s'
    )
    const power22 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '15' && selectedSpeed === '1m/s'
    )
    const power23 = (
        (selectedCategory === 'second3' || selectedCategory === 'second4') && selectedCapacity === '17' && selectedSpeed === '1m/s'
    )
    const power24 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '5' && selectedSpeed === '1m/s'
    )
    const power25 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '6' && selectedSpeed === '1m/s'
    )
    const power26 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '8' && selectedSpeed === '1m/s'
    )
    const power27 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '10' && selectedSpeed === '1m/s'
    )
    const power28 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '13' && selectedSpeed === '1m/s'
    )
    const power29 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '15' && selectedSpeed === '1m/s'
    )
    const power30 = (
        (selectedCategory === 'second5' || selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '17' && selectedSpeed === '1m/s'
    )
    const power31 = (
        (selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '8' && selectedSpeed === '1.6m/s'
    )
    const power32 = (
        (selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '10' && selectedSpeed === '1.6m/s'
    )
    const power33 = (
        (selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '13' && selectedSpeed === '1.6m/s'
    )
    const power34 = (
        (selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '15' && selectedSpeed === '1.6m/s'
    )
    const power35 = (
        (selectedCategory === 'second6' || selectedCategory === 'second7') && selectedCapacity === '17' && selectedSpeed === '1.6m/s'
    )
    const power36 = (
        (selectedCategory === 'third1' || selectedCategory === 'third2' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third5' || selectedCategory === 'third6' || selectedCategory === 'third7' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '8' && selectedSpeed === '1.6m/s'
    )
    const power37 = (
        (selectedCategory === 'third1' || selectedCategory === 'third2' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third5' || selectedCategory === 'third6' || selectedCategory === 'third7' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '10' && selectedSpeed === '1.6m/s'
    )
    const power38 = (
        (selectedCategory === 'third1' || selectedCategory === 'third2' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third5' || selectedCategory === 'third6' || selectedCategory === 'third7' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '13' && selectedSpeed === '1.6m/s'
    )
    const power39 = (
        (selectedCategory === 'third1' || selectedCategory === 'third2' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third5' || selectedCategory === 'third6' || selectedCategory === 'third7' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '15' && selectedSpeed === '1.6m/s'
    )
    const power40 = (
        (selectedCategory === 'third1' || selectedCategory === 'third2' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third5' || selectedCategory === 'third6' || selectedCategory === 'third7' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '17' && selectedSpeed === '1.6m/s'
    )
    const power41 = (
        (selectedCategory === 'third1' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third6' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '8' && selectedSpeed === '2m/s'
    )
    const power42 = (
        (selectedCategory === 'third1' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third6' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '10' && selectedSpeed === '2m/s'
    )
    const power43 = (
        (selectedCategory === 'third1' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third6' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '13' && selectedSpeed === '2m/s'
    )
    const power44 = (
        (selectedCategory === 'third1' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third6' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '15' && selectedSpeed === '2m/s'
    )
    const power45 = (
        (selectedCategory === 'third1' || selectedCategory === 'third3' || selectedCategory === 'third4' || selectedCategory === 'third6' || selectedCategory === 'third8' || selectedCategory === 'third9' || selectedCategory === 'third10' || selectedCategory === 'third11' || selectedCategory === 'third12' || selectedCategory === 'third13') && selectedCapacity === '17' && selectedSpeed === '2m/s'
    )
    const power46 = (
        (selectedCategory === 'third5' || selectedCategory === 'third7') && selectedCapacity === '10' && selectedSpeed === '2m/s'
    )
    const power47 = (
        (selectedCategory === 'third5' || selectedCategory === 'third7') && selectedCapacity === '13' && selectedSpeed === '2m/s'
    )
    const power48 = (
        (selectedCategory === 'third5' || selectedCategory === 'third7') && selectedCapacity === '15' && selectedSpeed === '2m/s'
    )
    const power49 = (
        (selectedCategory === 'third5' || selectedCategory === 'third7') && selectedCapacity === '17' && selectedSpeed === '2m/s'
    )
    const Spower1 = (
        selectedCategory === 'second1' && selectedCapacity === '4' && selectedSpeed === '1.6m/s'
    )
    const Spower2 = (
        selectedCategory === 'second1' && selectedCapacity === '5' && selectedSpeed === '1.6m/s'
    )
    const Spower3 = (
        selectedCategory === 'second1' && selectedCapacity === '6' && selectedSpeed === '1.6m/s'
    )
    const Spower4 = (
        selectedCategory === 'second1' && selectedCapacity === '8' && selectedSpeed === '1.6m/s'
    )
    const Spower5 = (
        selectedCategory === 'second1' && selectedCapacity === '10' && selectedSpeed === '1.6m/s'
    )
    const Spower6 = (
        selectedCategory === 'second1' && selectedCapacity === '13' && selectedSpeed === '1.6m/s'
    )
    const Spower7 = (
        selectedCategory === 'second1' && selectedCapacity === '15' && selectedSpeed === '1.6m/s'
    )
    const Spower8 = (
        selectedCategory === 'second1' && selectedCapacity === '17' && selectedSpeed === '1.6m/s'
    )
    const Spower9 = (
        selectedCategory === 'second5' && selectedCapacity === '5' && selectedSpeed === '1.6m/s'
    )
    const Spower10 = (
        selectedCategory === 'second5' && selectedCapacity === '6' && selectedSpeed === '1.6m/s'
    )
    const Spower11 = (
        selectedCategory === 'second5' && selectedCapacity === '8' && selectedSpeed === '1.6m/s'
    )
    const Spower12 = (
        selectedCategory === 'second5' && selectedCapacity === '10' && selectedSpeed === '1.6m/s'
    )
    const Spower13 = (
        selectedCategory === 'second5' && selectedCapacity === '13' && selectedSpeed === '1.6m/s'
    )
    const Spower14 = (
        selectedCategory === 'second5' && selectedCapacity === '15' && selectedSpeed === '1.6m/s'
    )
    const Spower15 = (
        selectedCategory === 'second5' && selectedCapacity === '17' && selectedSpeed === '1.6m/s'
    )
    const Spower16 = (
        selectedCategory === 'third3' && selectedCapacity === '8' && selectedSpeed === '2m/s'
    )
    const Spower17 = (
        selectedCategory === 'third3' && selectedCapacity === '10' && selectedSpeed === '2m/s'
    )
    const Spower18 = (
        selectedCategory === 'third3' && selectedCapacity === '13' && selectedSpeed === '2m/s'
    )
    const Spower19 = (
        selectedCategory === 'third3' && selectedCapacity === '15' && selectedSpeed === '2m/s'
    )
    const Spower20 = (
        selectedCategory === 'third3' && selectedCapacity === '17' && selectedSpeed === '2m/s'
    )

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }
    const handleCapacityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCapacity(e.target.value);
    }
    const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpeed(e.target.value);
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
                                <label htmlFor="select1"> تعداد توقف </label>
                                <select id="select1" value={selectedCategory} onChange={handleCategoryChange} className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                    <option value="">--</option>
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
                                    <option value="third9"> 21 توقف </option>
                                    <option value="third10"> 22 توقف </option>
                                    <option value="third11"> 23 توقف </option>
                                    <option value="third12"> 24 توقف </option>
                                    <option value="third13"> 25 توقف </option>
                                </select>
                            </div>
                            <div className="flex flex-col md:w-[200px] gap-3">
                                <label htmlFor="select3"> ظرفیت کابین </label>
                                <select id="select3" value={selectedCapacity} onChange={handleCapacityChange} className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
                                    {!selectedCategory ? (
                                        <option value="">--</option>
                                    ) : (
                                        options2[selectedCategory as keyof typeof options2].map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>
                            <div className="flex flex-col md:w-[200px] gap-3">
                                <label htmlFor="select2"> سرعت </label>
                                <select id="select2" value={selectedSpeed} onChange={handleSpeedChange} className="bg-gray-100 text-black border-blue-400 outline-0 border rounded-md p-1">
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
                            <div>
                                <p className='text-sm'> :motor power </p>
                                <p className='text-blue-400'>
                                    {power1 ? '3' : ''}{power2 ? '3' : ''}{power3 ? '4' : ''}{power4 ? '6' : ''}{power5 ? '9.2' : ''}{power6 ? '11' : ''}{power7 ? '13' : ''}{power8 ? '15' : ''}
                                    {power9 ? '4' : ''}{power10 ? '4' : ''}{power11 ? '4' : ''}{power12 ? '7' : ''}{power13 ? '13' : ''}{power14 ? '17' : ''}{power15 ? '21' : ''}{power16 ? '23' : ''}
                                    {power17 ? '3' : ''}{power18 ? '4' : ''}{power19 ? '6' : ''}{power20 ? '11' : ''}{power21 ? '11' : ''}{power22 ? '13' : ''}{power23 ? '15' : ''}
                                    {power24 ? '3' : ''}{power25 ? '4' : ''}{power26 ? '6' : ''}{power27 ? '11' : ''}{power28 ? '11' : ''}{power29 ? '15' : ''}{power30 ? '15' : ''}
                                    {power31 ? '7' : ''}{power32 ? '15' : ''}{power33 ? '17' : ''}{power34 ? '21' : ''}{power35 ? '25' : ''}
                                    {power36 ? '7' : ''}{power37 ? '13' : ''}{power38 ? '15' : ''}{power39 ? '19' : ''}{power40 ? '23' : ''}
                                    {power41 ? '7' : ''}{power42 ? '15' : ''}{power43 ? '19' : ''}{power44 ? '25' : ''}{power45 ? '27' : ''}
                                    {power46 ? '19' : ''}{power47 ? '19' : ''}{power48 ? '25' : ''}{power49 ? '27' : ''}
                                    {Spower1 ? '4' : ''}{Spower2 ? '4' : ''}{Spower3 ? '6' : ''}{Spower4 ? '7' : ''}{Spower5 ? '13' : ''}{Spower6 ? '17' : ''}{Spower7 ? '21' : ''}{Spower8 ? '23' : ''}
                                    {Spower9 ? '4' : ''}{Spower10 ? '4' : ''}{Spower11 ? '7' : ''}{Spower12 ? '15' : ''}{Spower13 ? '17' : ''}{Spower14 ? '21' : ''}{Spower15 ? '23' : ''}
                                    {Spower16 ? '7' : ''}{Spower17 ? '17' : ''}{Spower18 ? '19' : ''}{Spower19 ? '25' : ''}{Spower20 ? '27' : ''}
                                    kw
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-5 md:px-16 xl:fixed w-full bottom-0 py-2 bg-[#272727] flex-col gap-5">
                    <div>
                        <button type="submit" onClick={() => setPageState(2)} className=" rounded-full relative flex flex-row justify-center bg-blue-400 hover:bg-blue-500 text-white p-2 cursor-pointer w-full md:w-[200px]" >
                            <p className="text-center"> بعدی </p>
                            <p className="text-end absolute w-6 h-6 left-5 top-3"><Image alt='' src={'/arrowLeft.png'} width={100} height={100}></Image></p>
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