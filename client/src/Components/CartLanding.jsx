import { useState } from 'react';
import FreeDeliveryImg from '../assets/images/free-icon-delivery-2362252.png';

function CartLanding({ cartItems, CalcTotalPrice }) {
    const [showCart, SetShowCart] = useState(false);

    return (
        <div className="w-auto mx-2.5 bg-amber-400 rounded-[10px] px-2.5 pt-4 mt-7.5 md:mt-9">
            <div className="flex items-center justify-between gap-32.25 pb-4" onClick={() => SetShowCart(prev => !prev)}>
                <p className="text-[24px] font-semibold">Корзина</p>
                <div className="w-10.25 h-5 bg-[#F2F2F3] rounded-[5px] text-center flex items-center justify-center text-[12px]">{cartItems.length}</div>
            </div>

            {<div className={`grid transition-all duration-300 ${showCart ? "grid-rows-[1fr] -mt-2" : "grid-rows-[0fr]"}`}>
                <div className='overflow-hidden'>
                    {cartItems.map((item, i) => {
                        return (
                            <div style={{ borderTop: i === 0 ? "2px solid #F2F2F3" : "none" }} className="flex justify-between items-center py-3.75 border-b-2 border-[#F2F2F3]" key={i}>
                                <div className="flex items-center gap-1.5">
                                    <img className="w-16 h-13 rounded-[5px] object-cover" src={item.img} alt="" />
                                    <div className="flex flex-col gap-1.5 text-[12px]">
                                        <div>
                                            <p>{item.name}</p>
                                            <p className="text-[#B1B1B1]">{item.weight}г</p>
                                        </div>
                                        <p>{item.price}₽</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center justify-center w-21 h-10 bg-[#F2F2F3] rounded-[10px] text-[16px]">
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