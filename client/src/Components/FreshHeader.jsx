import Logo from '../assets/images/logo.png';
import HeaderBurger from '../assets/images/pic.png';

function FreshHeader() {
    return (
        <div className='w-full h-121 md:h-87.5 relative overflow-hidden flex flex-col items-center'>
            <div className='w-152.75 h-152.75 md:w-635 md:h-635 flex flex-col justify-end gap-6 md:gap-5 items-center absolute bg-[#FFAB08] rounded-[100%] bottom-0 pb-[14%] md:pb-[6%]'>
                <img width={150} src={Logo} alt="" />
                <div className='flex flex-col md:flex-row-reverse gap-5 md:gap-2.5 items-center'>
                    <div className='flex flex-col gap-4 md:gap-6.5 md:mb-10 text-center md:text-start'>
                        <p className='font-extrabold text-[30px]/[120%] md:text-[36px] text-[#FFFFFF] font-nunito'>Только самые<br /><span className='text-[#FF5C00]'>сочные бургеры!</span></p>
                        <p className='text-[12px] text-[#FFFFFF]'>Бесплатная доставка от 599₽</p>
                    </div>
                    <img width={227} src={HeaderBurger} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FreshHeader;