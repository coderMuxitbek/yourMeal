import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "../assets/images/close.png";
import { Link } from "react-router-dom";

function EachProduct() {
    const [meal, SetMeal] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/yourMeal/products/prod/${id}`)
            .then((res) => {
                SetMeal(res.data.meals);

            }).catch((err) => {
                console.log(err);
            })
    }, [id]);

    const BackWithImg = (e) => {
        e.stopPropagation();
        navigate(-1);
    }

    return (
        <div className="md:w-full md:h-full md:fixed top-0 left-0 bg-[#00000099]" onClick={() => navigate(-1)}>
            <div className="md:w-131 lg:w-171 lg:h-108 h-screen md:h-81 bg-[#FFFFFF] md:mx-auto md:mt-17.5 md:shadow-2xl md:rounded-3xl fixed md:static top-0 left-0">
                <div className="w-full h-full relative px-2.5 md:px-4 lg:px-6 pt-8 md:pt-4 lg:pt-6 md:pb-6 lg:pb-9">
                    <img size={24} className="absolute top-2.5 md:top-4 right-2.5 md:right-4" src={CloseIcon} alt="" onClick={() => BackWithImg(e)} />
                    <div className="w-full flex flex-col items-start gap-3 md:gap-4 lg:gap-6">
                        <p className="text-[28px] lg:text-[40px] leading-[120%] font-semibold">{meal.name}</p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4">
                            <img className="w-full md:w-56.5 lg:w-69 h-58 md:h-45 lg:h-55 object-cover rounded-2xl" src={meal.img} alt="" />
                            <div>
                                <p className="text-[12px] lg:text-[16px] leading-[130%]">{meal.description}</p>
                                <div className="flex flex-col gap-1 mt-2.5">
                                    <p className="text-[10px] lg:text-[12px] leading-[130%] font-semibold">Состав:</p>
                                    <div className="flex flex-col gap-0.5">
                                        {meal.ingredients?.map((ingred, i) => <p className="text-[10px] lg:text-[12px] leading-[130%]" key={i}>{ingred}</p>)}
                                    </div>
                                    <p className="text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]">{meal.weight}г, ккал {meal.calories}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-4 text-end absolute md:static bottom-8 right-2.5 left-2.5 md:mt-6 lg:mt-10">
                        <div className="w-full flex justify-between md:justify-start md:gap-2 lg:gap-4 text-[12px] lg:text-[16px]">
                            <button className="w-54.5 lg:w-69 h-7.5 lg:h-10 bg-[#FF7020] rounded-lg text-[#FFFFFF]">Добавить</button>
                            <div className="w-18.5 lg:w-21 h-7.5 lg:h-10 flex justify-between items-center bg-[#F2F2F3] rounded-lg py-1.75 px-2">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <p className="text-[16px] lg:text-[24px] leading-[130%] font-semibold">{meal.price}₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachProduct;