import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router';
import axios from 'axios';
import HomePage from './Pages/HomePage.jsx';
import EachProduct from './Pages/EachProduct.jsx';
import './App.css';
import './index.css';
import SignIn from './Pages/SignIn.jsx';

function App() {
  const [prods, SetProds] = useState([]);
  const [cartItems, SetCartItems] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [prodLoading, SetProdLoading] = useState(false);
  const [searchParams, SetSearchParams] = useSearchParams("");
  const [filteredCat, SetFilteredCat] = useState([]);
  const location = useLocation();


  //// Making parallel intercepting routes with products list and product modal
  const background = location.state?.backgroundLocation;


  useEffect(() => {
    SetLoading(true);
    SetProdLoading(true);
  }, []);


  const CalcTotalPrice = () => {
    let price = 0;
    cartItems.map((item) => {
      price += item.product.price * item.qty;
    });
    return price;
  }

  const AddFilter = (cat) => {
    SetSearchParams(`?cat=${cat}`);
  }

  const GetCartMeals = () => {
    SetLoading(true);
    axios.get("http://127.0.0.1:8000/yourMeal/cartMeals", { withCredentials: true })
      .then((res) => {
        SetCartItems(res.data.meals);
        SetLoading(false);
      }).catch((err) => {
        console.log(err);
      })
  }

  const GetProducts = () => {
    SetProdLoading(true);
    axios.get(searchParams.get("cat") ? `http://127.0.0.1:8000/yourMeal/products/?category=${searchParams.get("cat")}` : `http://127.0.0.1:8000/yourMeal/products`)
      .then((res) => {
        SetFilteredCat(res.data.meals);
        SetProdLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const AddToCart = (item) => {
    axios.post("http://127.0.0.1:8000/yourMeal/cartMeals", item, { withCredentials: true })
      .then((res) => {
        console.log(res);
        GetCartMeals();
      }).catch((err) => {
        console.log(err);
      })
  }

  const RemoveCartItem = (item) => {
    axios.delete("http://127.0.0.1:8000/yourMeal/cartMeals", item, { withCredentials: true})
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    GetProducts();
  }, [searchParams]);

  useEffect(() => {
    GetCartMeals();
  }, [])


  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<HomePage AddFilter={AddFilter} cartItems={cartItems} CalcTotalPrice={CalcTotalPrice} filteredCat={filteredCat} searchParams={searchParams} loading={loading} prodLoading={prodLoading}  AddToCart={AddToCart} RemoveCartItem={RemoveCartItem} />} />
        <Route path="/prod/:id" element={<EachProduct />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>

      {background && <Routes>
        <Route path="/prod/:id" element={<EachProduct />} />
        <Route path='/signin' element={<SignIn />} />
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

