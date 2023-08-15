import "./Nav.scss";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


function Nav({cartCount}) {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setCart(cartCount);

  },[cartCount])
 
  return (
    <nav className='nav'>
          <section className='nav__container'>
              <h3 className='nav__logo'>
                  <Link to="/" className='nav__logo--link'> 
                  💃Grey House.
                  </Link>   
              </h3>
              
              <ul className='nav__list'>
                  <li className='nav__item'>
                      <Link to="/discounts" className='nav__link'>
                        DISCOUNTS 
                      </Link>
                  </li>
                  <li className='nav__item'>
                    <FiShoppingCart style={{ "color": "#fff" }} />
                    <span className='nav__cart-item'>{ cartCount }</span>
                  </li>
              </ul>
          </section>  
    </nav>
  )
}

export default Nav