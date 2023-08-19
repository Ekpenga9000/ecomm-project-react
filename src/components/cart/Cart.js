import React from 'react'; 
import "./Cart.scss";

function Cart({ cartItems }) {
  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>
  }
  return (
    <section>Your cart get contents</section>
  )
}

export default Cart