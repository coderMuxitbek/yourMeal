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

function FilterNav({AddFilter}) {
    const [btnstate, setBtnState] = useState(null);

    const ToggleBtnImg = (e) => {
        e.stopPropagation();
        setBtnState((prev) => e.target.name);
    }

    return (
        <div className='w-[97%] overflow-x-scroll flex-nowrap overflow-y-clip flex gap-2 text-[16px] mt-7.5 ml-2.5 scrollbar-hide'>
            {filterBtnImgs.map((item, i) => {
                return (
                    <button onClick={(e) => AddFilter(e.target.name)} name={item.name} key={i} style={{ backgroundColor: btnstate === item.name ? "#FFAB08" : "#FFFFFF" }} className='h-10 flex flex-none items-center gap-2 px-2 rounded-3xl bg-[#FFFFFF] box-border border-2 border-transparent hover:border-2 hover:border-[#FFAB08]'>
                        <img className='w-6 h-6' name={item.name} onClick={(e) => ToggleBtnImg(e)} src={item.img} alt={item.name} />
                        <p className='text-[12px]'>{item.name}</p>
                    </button>
                )
            })}
        </div>
    )
}

//onClick={(e) => setBtnState((prev) => e.target.name)}

export default FilterNav;