import './App.scss';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsDetails from './pages/ProductsDetailsPage/ProductsDetails';
import Nav from './components/NavBar/Nav';
import Discount from './pages/DiscountPage/Discount';
import Cart from "./components/cart/Cart";

function App() {
  const [cartArray, setCartArray] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // const []

  function incrementCartNumber(cartObj) {
    let cart = cartArray;
    cart.push(cartObj);
    
    setCartArray(cart);
    
    let count = 0;
    for (let i = 0; i < cartNumber.length; i++){
      count += cartNumber[i];
    }
    setCartCount(count);
    console.log("Cart items", cartNumber);
  }
  return (
    <BrowserRouter>
      <Nav cartNumber={ cartCount } />
      <Routes>
        <Route path='/' element={<HomePage/> }/>  
        <Route path='/products/:productid' element={<ProductsDetails incrementCartNumber={ incrementCartNumber } /> }/>  
        <Route path='/discounts' element={<Discount />} /> 
        <Route path='/cart' element={<Cart cartItems={cartArray} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Passing the data as an object with the item name and the quantity
// This would be passed into Nav bar once the data has been dealt with
// We are also going to have a cart Component that would store the selections. In an array of Objects.
// The cart Component could be nested in the Nav Component.
/*
  const cartObj ={
    productId : id,
    quantity : quantity,
    totalPrice : price * qunatity
  }

*/