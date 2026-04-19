import CloseIcon from "../assets/images/close.png";
import DonutImg from "../assets/images/pic (1).png"
import { useState, useEffect } from "react";
import axios from "axios";

function GetAddress({ SetAskAddress }) {
    const [howOrder, SetHowOrder] = useState("Delivery");
    const [address, SetAddress] = useState({});
    const [addressResArr, SetAddressResArr] = useState([]);

    const GetInputData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        SetAddress((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const SaveAddress = () => {
        localStorage.setItem("USER_ADDRESS_YOURMEAL", JSON.stringify(address));
        SetAskAddress(false);
        console.log("We have address");
    }

    useEffect(() => {
        const data = axios.get(`https://api.geoapify.com/v1/geocode/search?city=${address.street}&apiKey=0993f9a905d24db6a70999d20ec52fe8`)
            .then((res) => {
                console.log(res);
                SetAddressResArr(res.data.features);
            }).catch((err) => {
                console.log(err);
            })
    }, [address.street])

    return (
        <div className="md:w-full md:h-full md:fixed top-0 left-0 bg-[#00000099] flex">
            <div className="w-full md:w-65.5 lg:w-85.5 lg:h-108 h-screen md:h-81 bg-[#FFFFFF] md:mx-auto md:mt-17.5 lg:mt-22.5 md:shadow-2xl md:rounded-3xl overflow-hidden fixed md:static top-0 left-0" onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-full flex relative">
                    <img size={24} className="absolute top-2.5 md:top-4 lg:top-6 right-2.5 md:right-4 lg:right-6" src={CloseIcon} alt="" />

                    {/* <div className="bg-[#FFAB08] w-1/2 hidden lg:flex items-center justify-center">
                        <img src={DonutImg} alt="" />
                    </div> */}

                    <div className="h-full w-full flex flex-col justify-between lg:items-center px-2.5 md:px-4 lg:px-6 pt-11 md:pt-14 lg:pt-16 pb-8 md:pb-7.25 lg:pb-6">
                        <div className="w-full flex flex-col gap-4.5 lg:gap-4">
                            <div className="w-full md:w-75 lg:w-full flex items-center justify-between text-[16px] md:text-[16px] lg:text-[24px] font-semibold">
                                <button onClick={() => SetHowOrder("Delivery")} className={howOrder === "Delivery" ? `bg-amber-500` : "bg-[#FFFFFF]"}>Delivery</button>
                                <button onClick={() => SetHowOrder("Pickup")} className={howOrder === "Pickup" ? `bg-amber-500` : "bg-[#FFFFFF]"}>Pickup</button>
                            </div>

                            {howOrder === "Delivery" && <div className="flex flex-col gap-2">
                                <input onChange={(e) => GetInputData(e)} name="street" className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 border pl-3 rounded-lg text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]" type="text" placeholder="Улица, дом, квартира" />
                                <div className="w-full md:w-75 lg:w-full flex justify-between text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]">
                                    <input onChange={(e) => GetInputData(e)} name="floor" className="w-[45%] h-7.5 lg:h-10 border pl-3 rounded-lg" type="text" placeholder="Этаж" />
                                    <input onChange={(e) => GetInputData(e)} name="doorPhone" className="w-[45%] h-7.5 lg:h-10 border pl-3 rounded-lg" type="text" placeholder="Домофон" />
                                </div>
                            </div>}

                            {howOrder === "Pickup" && <div className="flex flex-col gap-2">
                                <select onChange={(e) => GetInputData(e)} className="w-full md:w-75 lg:w-full h-7.5 lg:h-10 border pl-3 rounded-lg text-[10px] lg:text-[12px] leading-[130%] text-[#B1B1B1]" name="branchName" id="">
                                    <option value="Olmazor">Olmazor</option>
                                    <option value="Yunusobod">Yunusobod</option>
                                    <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                                    <option value="Chilonzor">Chilonzor</option>
                                    <option value="Mirobod">Mirobod</option>
                                </select>
                            </div>}
                        </div>

                        <div className="w-full md:w-75 lg:w-full flex flex-col gap-2">
                            <div className="flex gap-1 text-[12px] lg:text-[16px]">
                                <p>Already have an account?</p>
                                <a className="text-[#FF7020]">Sign in</a>
                            </div>
                            {howOrder === "Delivery" && <button onClick={() => SaveAddress()} className="h-7.5 lg:h-10 md:static bg-[#FF7020] hover:bg-[#FFAB08] rounded-lg text-[12px] lg:text-[16px] text-[#FFFFFF]">Заказать сюда</button>}
                            {howOrder === "Pickup" && <button onClick={() => SaveAddress()} className="h-7.5 lg:h-10 md:static bg-[#FF7020] hover:bg-[#FFAB08] rounded-lg text-[12px] lg:text-[16px] text-[#FFFFFF]">Выбрать</button>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 mx-auto flex flex-col gap-1">
                {addressResArr.map((item, i) => {
                    return (
                        <p className="bg-amber-300" key={i}>{i, item.properties.address_line1}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default GetAddress;