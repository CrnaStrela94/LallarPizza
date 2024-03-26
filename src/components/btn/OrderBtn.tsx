import React from 'react';
import bagImage from '../../assets/bag-svgrepo.svg'; 
import "./__orderbtn.scss"

const handleClick =()=>{

}
const OrderBtn = () => {
  return (
    <button className="order-button" onClick={handleClick}>
      <span className='button-text'> <img src={bagImage} alt="Shopping Bag" />Place Order</span>
    </button>
  );
};

export default OrderBtn;