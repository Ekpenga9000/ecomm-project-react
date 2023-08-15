import React from 'react';
import "./Categories.scss";

function Categories({ handleFilter, title }) {
    const handleValue = (e) => {
        handleFilter(e.target.innerHTML);
    }

    if (!title) {
        title = "All";
    }

  return (
    <section className='categories'>
          <ul className='categories__list'>
                <li className='categories__item' onClick={handleValue}>All</li>
                <li className='categories__item' onClick={handleValue}>Women</li>
                <li className='categories__item' onClick={handleValue}>Men</li>
                <li className='categories__item' onClick={handleValue}>Accessories</li>
                <li className='categories__item' onClick={handleValue}>Shoes</li>
          </ul> 
          <h3 className='categories__title'>{ title }</h3>
          </section>
  )
}

export default Categories