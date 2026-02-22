import BurgerImg from '../assets/images/free-icon-cheeseburger-2362255.png';
import OnionImg from '../assets/images/free-icon-onion-2362361.png';
import HotdogImg from '../assets/images/free-icon-hotdog-sandwich-2362313.png';
import ComboImg from '../assets/images/free-icon-fast-food-2362274.png';
import ShaurmaImg from '../assets/images/free-icon-burrito-2362225.png';
import PizzaImg from '../assets/images/free-icon-pizza-2362372.png';
import NoodlesImg from '../assets/images/free-icon-noodles-2362350.png';
import DoughnutImg from '../assets/images/free-icon-doughnut-2362260.png';
import KetchupImg from '../assets/images/free-icon-ketchup-2362341.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router';

const filterBtnImgs = [
    {
        name: "Бургеры",
        img: BurgerImg
    },
    {
        name: "Закуски",
        img: OnionImg
    },
    {
        name: "Хот-доги",
        img: HotdogImg
    },
    {
        name: "Комбо",
        img: ComboImg
    },
    {
        name: "Шаурма",
        img: ShaurmaImg
    },
    {
        name: "Пицца",
        img: PizzaImg
    },

    {
        name: "Вок",
        img: NoodlesImg
    },
    {
        name: "Десерты",
        img: DoughnutImg
    },
    {
        name: "Соусы",
        img: KetchupImg
    }
];

function FilterNav({ AddFilter }) {
    const [searchParams, SetSearchParams] = useSearchParams("");

    const HandleBtnClick = (e) => {
        AddFilter(e.target.name);
    }

    return (
        <div className='w-full xl:w-307.75 overflow-x-scroll flex-nowrap overflow-y-clip flex gap-2 md:gap-3 lg:gap-6 xl:gap-0 xl:justify-between text-[16px] mt-7.5 pl-2.5 md:pl-16 lg:pl-8 xl:pl-0 lg:mt-10 xl:ml-18.75 scrollbar-hide'>
            {filterBtnImgs.map((item, i) => {
                return (
                    <button onClick={(e) => HandleBtnClick(e)} name={item.name} key={i} style={{ backgroundColor: searchParams.get("cat") === item.name ? "#FFAB08" : "#FFFFFF" }} className='h-7.5 lg:h-10 flex flex-none items-center gap-2 px-2 lg:px-3.5 rounded-3xl bg-[#FFFFFF] box-border border-2 border-transparent hover:border-2 hover:border-[#FFAB08]'>
                        <img className='w-6 h-6 pointer-events-none' src={item.img} alt={item.name} />
                        <a className='text-[12px] lg:text-[16px] pointer-events-none'>{item.name}</a>
                    </button>
                )
            })}
        </div>
    )
}

export default FilterNav;