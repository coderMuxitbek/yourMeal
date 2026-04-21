import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router';
import axios from 'axios';
import HomePage from './Pages/HomePage.jsx';
import EachProduct from './Pages/EachProduct.jsx';
import './App.css';
import './index.css';
import SignIn from './Pages/SignIn.jsx';

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [askAddress, SetAskAddress] = useState(false);
  const location = useLocation();

  //// Making parallel intercepting routes with products list and product modal
  const background = location.state?.backgroundLocation;


  useEffect(() => {
    SetLoading(true);
     localStorage.removeItem("USER_ADDRESS_YOURMEAL");
  }, []);

  const GetCartMeals = () => {
    SetLoading(true);
    axios.get("http://127.0.0.1:8000/yourMeal/cartMeals", { withCredentials: true })
      .then((res) => {
        console.log(res);
        SetCartItems(res.data.meals);
      }).catch((err) => {
        const storedMeals = JSON.parse(localStorage.getItem("USER_CART_ARRAY_YOURMEAL")) || [];
        SetCartItems(storedMeals);
      }).finally(() => {
        SetLoading(false);
      })
  }

  const AddToLocalStorage = (item) => {
    const myArray = JSON.parse(localStorage.getItem("USER_CART_ARRAY_YOURMEAL")) || [];
    const wantedMeal = myArray.find((el) => el.product._id === item._id);
    localStorage.removeItem("USER_CART_ARRAY_YOURMEAL");

    if (wantedMeal) {
      myArray.forEach((meal) => {
        if (meal.product._id === item._id) {
          meal.qty = meal.qty + 1;
        }
      })
    } else {
      myArray.push({ _id: item._id, product: item, customer: { name: "Pepe", email: "pepe@gmail.com", password: "pepe1234" }, qty: 1 });
    }

    localStorage.setItem("USER_CART_ARRAY_YOURMEAL", JSON.stringify(myArray));
    console.log(JSON.parse(localStorage.getItem("USER_CART_ARRAY_YOURMEAL")));
  }

  const RemoveFromLocalStorage = (id) => {
    let myArray = JSON.parse(localStorage.getItem("USER_CART_ARRAY_YOURMEAL")) || [];
    const wantedMeal = myArray.find((el) => el._id === id);

    if (wantedMeal.qty > 1) {
      myArray.forEach((meal) => {
        if (meal._id === id) {
          meal.qty = meal.qty - 1;
        }
      })
    } else {
      myArray = myArray.filter((p) => p._id !== id);
      console.log("MYARRAY IS", myArray);

    }

    localStorage.setItem("USER_CART_ARRAY_YOURMEAL", JSON.stringify(myArray));
  }

  const AddToCart = (item) => {
    axios.post("http://127.0.0.1:8000/yourMeal/cartMeals", item, { withCredentials: true })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        if (err.status === 401) {
          if (localStorage.getItem("USER_ADDRESS_YOURMEAL")) {
            AddToLocalStorage(item);
          } else {
            SetAskAddress(true);
          }
        }
      }).finally(() => {
        GetCartMeals();
      })
  }

  const RemoveCartItem = (id) => {
    axios.delete(`http://127.0.0.1:8000/yourMeal/cartMeals/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
        if (err.status === 401) {
          RemoveFromLocalStorage(id)
        }
      }).finally(() => {
        GetCartMeals();
      })
  }

  const LogOut = () => {
    axios.delete("http://127.0.0.1:8000/yourMeal/auth", { withCredentials: true })
      .then((res) => {
        console.log("COOKIE CLEARED");
        GetCartMeals()
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    GetCartMeals();
  }, []);

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<HomePage cartItems={cartItems} loading={loading} AddToCart={AddToCart} RemoveCartItem={RemoveCartItem} LogOut={LogOut} askAddress={askAddress} SetAskAddress={SetAskAddress} />} />
        <Route path="/prod/:id" element={<EachProduct AddToCart={AddToCart}/>} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>

      {background && <Routes>
        <Route path="/prod/:id" element={<EachProduct AddToCart={AddToCart}/>} />
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

