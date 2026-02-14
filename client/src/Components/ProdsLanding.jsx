import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';


function ProdsLanding({ filteredCat }) {

    return (
        <div className='flex flex-wrap gap-7.5'>
            {filteredCat.length > 0 && filteredCat.map((item, index) => {
                return (
                    <div className='flex flex-col gap-7.25 w-75 h-102.75 bg-[#FFFFFF] p-3 rounded-[10px]' key={index}>
                        <div className='flex flex-col gap-4'>
                            <img className='w-69 h-55 rounded-[10px] object-cover' src={item.img} alt={item.img} />
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold text-[24px] h-6'>{item.price}₽</p>
                                <p className='text-[16px] h-5.25 '>{item.name}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-[16px] text-[#B1B1B1] h-5.25'>{item.weight}г</p>
                            <button className='w-69 h-10 flex items-center justify-center bg-[#F2F2F3] text-[16px] rounded-[10px]'>Добавить</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProdsLanding;