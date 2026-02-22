import { useState } from 'react';
import FreeDeliveryImg from '../assets/images/free-icon-delivery-2362252.png';

function CartLanding({ cartItems, CalcTotalPrice }) {
    const [showCart, SetShowCart] = useState(false);

    return (
        <div className={`${showCart ? "md:w-75" : "md:w-36.25"} bg-[#FFFFFF] lg:w-75 mx-2.5 md:ml-16 lg:mx-0 rounded-[10px] px-2.5 lg:px-4 pt-4 lg:pt-6 mt-7.5 md:mt-9 lg:mt-0 transition-all duration-300`}>
            <div className="flex justify-between items-center pb-4 lg:pb-6" onClick={() => SetShowCart(prev => !prev)}>
                <p className="text-[16px] lg:text-[24px] font-semibold">Корзина</p>
                <div className="w-8 h-4 bg-[#F2F2F3] rounded-[5px] text-center flex items-center justify-center text-[10px]">{cartItems.length}</div>
            </div>

            {<div className={`grid transition-all duration-300 ${showCart ? "grid-rows-[1fr] -mt-3" : "lg:grid-rows-[1fr] lg:-mt-3 grid-rows-[0fr]"}`}>
                <div className='overflow-hidden'>
                    {cartItems.map((item, i) => {
                        return (
                            <div style={{ borderTop: i === 0 ? "2px solid #F2F2F3" : "none" }} className="flex justify-between items-center py-3.75 border-b-2 border-[#F2F2F3]" key={i}>
                                <div className="flex items-center gap-1.5">
                                    <img className="min-w-16 h-13 rounded-[5px] object-cover" src={item.img} alt="" />
                                    <div className="flex flex-col gap-1.5 text-[12px]">
                                        <div>
                                            <p>{item.name}</p>
                                            <p className="text-[#B1B1B1]">{item.weight}г</p>
                                        </div>
                                        <p>{item.price}₽</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-18.5 lg:w-21 h-7.5 lg:h-10 py-1.75 lg:py-2.25 px-2 lg:px-3 bg-[#F2F2F3] rounded-[10px] text-[12px] lg:text-[16px]">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>)
                    })}

                    {cartItems.length > 0 ? <div>
                        <div className="flex items-center justify-between pb-6 pt-4 border-[#F2F2F3] text-[16px]">
                            <p>Итого</p>
                            <p>{CalcTotalPrice()}₽</p>
                        </div>

                        <button className="w-full h-10 flex items-center justify-center bg-[#FF7020] text-[#FFFFFF] text-[16px] rounded-[10px] ">Оформить заказ</button>
                        <div className="flex items-center gap-2 mt-2 pb-4">
                            <img className="w-6 h-6" src={FreeDeliveryImg} alt="" />
                            <p className="text-[12px]/[100%] tracking-[0%]">Бесплатная доставка</p>
                        </div>
                    </div> : <h1>Тут пока пусто :(</h1>}
                </div>
            </div>}
        </div>
    )
}

export default CartLanding;