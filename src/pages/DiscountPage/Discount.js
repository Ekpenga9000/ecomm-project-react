import React from 'react';
import { useNavigate } from 'react-router-dom';

function Discount() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 3000)

  return (
    <h1>No Discounts as the moment</h1>
  )
}

export default Discount