import CloseIcon from "../assets/images/close.png";
import { useNavigate } from "react-router-dom";
import DonutImg from "../assets/images/pic (1).png"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function SignIn() {
    const navigate = useNavigate();
    const [user, SetUser] = useState({});

    const GetInputData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        SetUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const SignBtn = () => {
        axios.post("http://127.0.0.1:8000/yourMeal/auth/", user, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                navigate(-1);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="md:w-full md:h-full md:fixed top-0 left-0 bg-[#00000099]" onClick={() => navigate(-1)}>
            <div className="w-full md:w-131 lg:w-171 lg:h-108 h-screen md:h-81 bg-[#FFFFFF] md:mx-auto md:mt-17.5 lg:mt-22.5 md:shadow-2xl md:rounded-3xl overflow-hidden fixed md:static top-0 left-0" onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-full flex relative">
                    <img size={24} className="absolute top-2.5 md:top-4 lg:top-6 right-2.5 md:right-4 lg:right-6" src={CloseIcon} alt="" onClick={() => navigate(-1)} />

                    <div className="bg-[#FFAB08] w-1/2 hidden lg:flex items-center justify-center">
                        <img src={DonutImg} alt="" />
                    </div>

                    <div className="h-full w-full lg:w-1/2 flex flex-col justify-between lg:items-center px-2.5 md:px-4 lg:px-6 pt-8 md:pt-5 lg:pt-11 pb-8 md:pb-7.25 lg:pb-6">
                        <div className="w-full flex flex-col gap-4.5 lg:gap-4">
                            <h4 className="text-[16px] md:text-[16px] lg:text-[24px] font-semibold">Sign in</h4>
                            <div className="flex flex-col gap-2">
                                <input onChange={GetInputData} name="name" className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 border pl-3 rounded-lg text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]" type="text" placeholder="Ваше имя" />
                                <input onChange={GetInputData} name="email" className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 border pl-3 rounded-lg text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]" type="text" placeholder="Аккаунт" />
                            </div>

                            <div className="text-[10px]">
                                <div className="flex items-center gap-2">
                                    <input value="Самовывоз" name="Самовывоз" type="radio" />
                                    <span>Самовывоз</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input value="Доставка" name="Доставка" type="radio" />
                                    <span>Доставка</span>
                                </div>
                            </div>

                            <div>
                                <input onChange={GetInputData} name="name" className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 border pl-3 rounded-lg text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]" type="text" placeholder="Улица, дом, квартира" />
                            </div>
                        </div>

                        <button onClick={() => SignBtn()} className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 md:static bg-[#FF7020] hover:bg-[#FFAB08] rounded-lg text-[12px] lg:text-[16px] text-[#FFFFFF]">Создать аккаунт</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;