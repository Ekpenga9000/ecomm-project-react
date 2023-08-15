import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';


function Card({product}) {
  const URL = process.env.REACT_APP_SERVER_IMG_URL;
  const { id, name, price, color, img_link, brand } = product;

  return (
    <Link to={`/products/${id}`} className='card'>
            <div className='card__img-container'>
              <img src={`${URL}${img_link}`} alt={name} className='card__img'/>  
            </div>
            <div className='card__body'>
                <p className='card__brand'> {brand} </p>
                <p className='card__title'>{name}</p>
                <div className='card__desc'>
                <span className='card__color'>{color}</span>  
          <span className='card__price'>${price}</span>  
                </div>
            </div>
        </Link>
  )
}

export default Card;