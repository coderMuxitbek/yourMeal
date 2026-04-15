import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import FreshHeader from '../Components/FreshHeader.jsx';
import FilterNav from '../Components/FilterNav.jsx';
import ProdsLanding from '../Components/ProdsLanding.jsx';
import CartLanding from '../Components/CartLanding.jsx';
import { useState } from 'react';

function HomePage({ AddFilter, cartItems, CalcTotalPrice, filteredCat, searchParams, loading, prodLoading, AddToCart, RemoveCartItem, LogOut }) {
    const location = useLocation();

    return (
        <div>
            <div className='flex justify-between'>
                <Link to={"/signin"} state={{ backgroundLocation: location }}>
                    <div className='w-20 h-20 flex items-center justify-center rounded-[50%] bg-amber-400'>Sign in</div>
                </Link>
                <button onClick={() => LogOut()} className='w-20 h-20 flex items-center justify-center rounded-[50%] bg-amber-400'>Log out</button>
            </div>
            {/* <FreshHeader /> */}
            <FilterNav AddFilter={AddFilter} />
            {/* <LandingProducts prods={prods} cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} loading={loading} filteredCat={filteredCat} /> */}
            <div className='lg:grid lg:grid-cols-3 xl:grid-cols-4 items-start lg:gap-7.5 lg:mx-8 xl:mx-18.75 lg:mt-30.5'>
                <CartLanding cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} loading={loading} AddToCart={AddToCart} RemoveCartItem={RemoveCartItem} />
                <ProdsLanding filteredCat={filteredCat} searchParams={searchParams} AddToCart={AddToCart} prodLoading={prodLoading} />
            </div>
        </div>
    )
}

export default HomePage;