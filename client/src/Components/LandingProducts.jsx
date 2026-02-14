import ProdsLayout from './ProdsLanding.jsx';
import CartLanding from './cartLanding.jsx';
import Loader from './Loader.jsx';

function LandingProducts({ prods, cartItems, CalcTotalPrice, loading, filteredCat }) {
    return (
        <div className='flex flex-col gap-6 mt-12.5'>
            {loading ? <Loader /> :
                <>
                    <h2 className='text-[40px]/[120%] font-semibold tracking-[0%] ml-82.5'></h2>
                    <div className='flex items-start gap-7.5'>
                        <CartLanding cartItems={cartItems} CalcTotalPrice={CalcTotalPrice}/>
                        <ProdsLayout prods={prods} filteredCat={filteredCat} />
                    </div>
                </>}
        </div>

    )
}

export default LandingProducts;