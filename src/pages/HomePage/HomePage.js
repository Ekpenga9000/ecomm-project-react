import React from 'react'; 
import { useState, useEffect } from "react";
import "./HomePage.scss";
import Card from '../../components/card/Card';
import Categories from '../../components/categories/Categories';
import axios from 'axios';

function HomePage() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [productsList, setProductsList] = useState([]);
  const [productCategory, setProductCategory] = useState(null);

  function handleFilter(e) {
    setProductCategory(e);
  }
  
  useEffect(() => {
    axios
      .get(`${SERVER_URL}`)
      .then((res) => {
        const inventory = res.data; 

        if (productCategory && productCategory !== "All") {
          const newInventory = inventory.filter(product => product.category === productCategory);
          setProductsList(newInventory);
        } else {
          setProductsList(res.data);
        }
       
      })
      .catch(err => {
        console.log(err);
      })
  }, [SERVER_URL, productCategory]);
  
 



  return (
    <section className='home'>
      <div className='home__container'>
        <Categories handleFilter={handleFilter} title={ productCategory } />
        {!productsList && <h2>Loading...</h2>}
        <section className='home__shop'>
          {
            productsList && productsList.map(product => {
              return <Card key={product.id} product={ product } />
            })
          }
          
        </section>
      </div>
    </section>
  )
}

export default HomePage