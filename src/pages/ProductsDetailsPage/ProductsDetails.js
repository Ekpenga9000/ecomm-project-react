import React from 'react'; 
import "./ProductsDetails.scss";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductsDetails({incrementCartNumber}) {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const URL = process.env.REACT_APP_SERVER_IMG_URL;
  const { productid } = useParams(); 
  const [productItem, setProductItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
 
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/${productid}`)
      .then((res) => {
        setProductItem(res.data[0]);
      })
      .catch(console.error);
  }, [SERVER_URL, productid])

  const addQty = () => {
    let count = quantity; 
    setQuantity(count+1);
  }

  const subQty = () => {
    let count = quantity; 
    if (count > 1) {
      setQuantity(count - 1);
    }
  }

  
  if (!productItem) {
    return <section>Loading...</section>
  }
  
  const {
    category, name,
    type, color,
    size,
    img_link, description,
    id,
    brand,
    price
  } = productItem

  function handleCart() {
    const cartObj ={
      productId : id,
      quantity : quantity,
      totalPrice : price * quantity
    }
    incrementCartNumber(cartObj);
  }
   
  return (
    <section className='product' id={id}>
      <article className='product__container'>
        <Link to={"/"} className='product__home'>Home</Link>
        <div className='product__main'>
          <div className='product__img-container'>
            <img src={`${URL}${img_link}`} alt={ name } className='product__img'/>
          </div>
          <div className='product__details'>
            <p className='product__category'>{category}</p>
            <h2 className='product__name'>{name}</h2>
            <p className='product__brand'>{ brand }</p>
            <h3 className='product__desc-title'> Description</h3>
             <p className='product__desc'>{description}</p>
            <div className='product__qty-container'>
              <h3 className='product__qty-title'>Quantity</h3>
              <div className='product__btn-container'>
                <button className='product__btn' onClick={subQty}> - </button>
                <span className='product__qty'>{ quantity }</span>
                <button className='product__btn' onClick={addQty}> + </button>
              </div>
              <h3 className='product__price'>$ {quantity * price}</h3>
            </div>
            <div className='product__buy-btn'>
                <button className='product__add' onClick={handleCart}>ADD TO CART</button>
                <button className='product__buy'>BUY NOW</button>
            </div>
          </div>
        </div>
        <ul className='product__item-container'>
          <li className='product__item'>Type: {type}</li>
          <li className='product__item'>Size: {size}</li>
          <li className='product__item'>Color: {color}</li>
        </ul>
      </article>

      <article className='product__carousel'>
        productList
      </article>
    </section>
  )
}

export default ProductsDetails