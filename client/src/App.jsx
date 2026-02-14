import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import FilterNav from './Components/FilterNav.jsx';
import LandingProducts from './Components/landingProducts.jsx';
import FreshHeader from './Components/FreshHeader.jsx';
import { useSearchParams } from 'react-router';

function App() {
  const [prods, SetProds] = useState([]);
  const [cartItems, SetCartItems] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [searchParams, SetSearchParams] = useSearchParams("");
  const [filteredCat, SetFilteredCat] = useState([]);

  useEffect(() => {
    SetLoading(true)
  }, [])


  const CalcTotalPrice = () => {
    let price = 0;
    cartItems.map((item) => {
      price += item.price;
    })

    return price;
  }

  const AddFilter = (cat) => {
    SetSearchParams(`?cat=${cat}`);
  }

  useEffect(() => {
    SetLoading(true);
    axios.get(searchParams.get("cat") ? `http://127.0.0.1:8000/yourMeal/products/?category=${searchParams.get("cat")}` : `http://127.0.0.1:8000/yourMeal/products`)
      .then((res) => {
        SetFilteredCat(res.data.meals);
        SetLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [searchParams]);

  useEffect(() => {
    SetLoading(true);
    axios.get("http://127.0.0.1:8000/yourMeal/cartMeals")
      .then((res) => {
        SetCartItems(res.data.meals);
        SetLoading(false);
      }).catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <div>
      <FreshHeader/>
      <FilterNav/>
      {/* <FilterNav AddFilter={AddFilter} />
      <LandingProducts prods={prods} cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} loading={loading} filteredCat={filteredCat} /> */}
    </div>
  )
}

export default App;

// {
// "name": "Супер сырный",
// "category": "Бургеры",
// "price": 550,
// "weight": 512,
// "img": "https://i.ibb.co/Zz62Lx4k/photo-1.png"
// }
