import FreshHeader from '../Components/FreshHeader.jsx';
import FilterNav from '../Components/FilterNav.jsx';
import ProdsLanding from '../Components/ProdsLanding.jsx';
import CartLanding from '../Components/CartLanding.jsx';

function HomePage({AddFilter, cartItems, CalcTotalPrice, filteredCat, searchParams}) {
    return (
        <div>
            <FreshHeader />
            <FilterNav AddFilter={AddFilter}/>
            {/* <LandingProducts prods={prods} cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} loading={loading} filteredCat={filteredCat} /> */}
            <div className='lg:grid lg:grid-cols-3 xl:grid-cols-4 items-start lg:gap-7.5 lg:mx-8 xl:mx-18.75 lg:mt-30.5'>
                <CartLanding cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} />
                <ProdsLanding filteredCat={filteredCat} searchParams={searchParams} />
            </div>
        </div>
    )
}

export default HomePage;