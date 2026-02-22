import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router';
import axios from 'axios';
import HomePage from './Pages/HomePage.jsx';
import EachProduct from './Pages/EachProduct.jsx';
import './App.css';
import './index.css';

function App() {
  const [prods, SetProds] = useState([]);
  const [cartItems, SetCartItems] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [searchParams, SetSearchParams] = useSearchParams("");
  const [filteredCat, SetFilteredCat] = useState([]);
  const location = useLocation();
  console.log(location);
  

  //// Making parallel intercepting routes with products list and product modal
  const background = location.state?.backgroundLocation;



  useEffect(() => {
    SetLoading(true);
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
    <>
      <Routes location={background || location}>
        <Route path='/' element={<HomePage AddFilter={AddFilter} cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} filteredCat={filteredCat} searchParams={searchParams} />} />
        <Route path="/prod/:id" element={<EachProduct/>}/>
      </Routes>

      {background && <Routes>
        <Route path="/prod/:id" element={<EachProduct/>}/>
      </Routes>}
    </>
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

// {
// "name": "Мясная бомба",
// "category": "Бургеры",
// "price": 689,
// "weight": 520,
// "img": "https://i.ibb.co/BHWRRfQd/photo.png"
// }

// {
// "name": "Тяжелый удар",
// "category": "Бургеры",
// "price": 480,
// "weight": 470,
// "img": "https://i.ibb.co/TDw1XnN0/photo-3.png"
// }






// _id
// 696ac47b168dc319c2d19909

// ObjectId
// name
// Мясная бомба

// String
// category
// Бургеры

// String
// price
// 689

// Int32
// weight
// 520

// Int32
// img
// https://i.ibb.co/BHWRRfQd/photo.png

// String


// _id
// 696ac486168dc319c2d1990b
// name
// "Супер сырный"
// category
// "Бургеры"
// price
// 550
// weight
// 512
// img
// "https://i.ibb.co/Zz62Lx4k/photo-1.png"
// _id
// 696c8a7ad476a6d30ccde887
// name
// "Cheesy"
// category
// "Бургеры"
// price
// 639
// weight
// 580
// img
// "https://i.ibb.co/p6KnmhJx/photo-2.png"
// _id
// 696c8bd0d476a6d30ccde889
// name
// "Тяжелый удар"
// category
// "Бургеры"
// price
// 480
// weight
// 470
// img
// "https://i.ibb.co/TDw1XnN0/photo-3.png"
// _id
// 696c8bead476a6d30ccde88b
// name
// "Вечная классика"
// category
// "Бургеры"
// price
// 450
// weight
// 450
// img
// "https://i.ibb.co/HTzt2Xm7/photo-4.png"

