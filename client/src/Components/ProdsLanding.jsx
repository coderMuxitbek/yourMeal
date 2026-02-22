import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router';


function ProdsLanding({ filteredCat, searchParams }) {
    const location = useLocation();

    return (
        <div className='flex flex-col gap-4 lg:gap-6 mx-2.5 md:mx-16 lg:mx-0 mt-20 lg:mt-0 lg:col-span-2 xl:col-span-3 relative'>
            {searchParams.get("cat") ? <h3 className='text-[28px] lg:text-[40px] leading-[120%] font-semibold absolute -top-12.5 lg:-top-18'>{searchParams.get("cat")}</h3> : null}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5 lg:gap-7.5'>
                {filteredCat.length > 0 && filteredCat.map((item, index) => {
                    return (
                        <Link to={`/prod/${item._id}`} state={{ backgroundLocation: location }} key={index}>
                            <div className='flex flex-col gap-4 lg:gap-7.25 p-1 lg:p-3 rounded-[10px]'>
                                <div className='flex flex-col gap-2.5 lg:gap-4'>
                                    <img className='w-full h-30 lg:h-55 rounded-[10px] object-cover' src={item.img} alt={item.img} />
                                    <div className='flex flex-col gap-1 lg:gap-2'>
                                        <p className='font-semibold text-[16px] lg:text-[24px] h-4 lg:h-6'>{item.price}₽</p>
                                        <p className='text-[12px] lg:text-[16px] leading-[130%] h-4 lg:h-5.25'>{item.name}</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1.75 lg:gap-2'>
                                    <p className='font-semibold text-[12px] lg:text-[16px] leading-[130%] text-[#B1B1B1] h-4 lg:h-5.25'>{item.weight}г</p>
                                    <button className='w-full h-7.5 lg:h-10 flex items-center justify-center bg-[#F2F2F3] text-[12px] lg:text-[16px] rounded-[10px]'>Добавить</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProdsLanding;