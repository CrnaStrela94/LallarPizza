import React from 'react'
import './PizzaCard.scss'
import pizzaImg from '../../../../assets/pizza.png'

const PizzaCard = () => {
  return (
    <div className='cardContainer'>
        <img src={pizzaImg} alt="Pizza Image"></img>
        <div className='textContainer'>
            <h3>Lallar Special</h3>
            <p>Onion, Onio, Grass, Cow</p>
        </div>
        <div className='priceCont'>
            <p>110kr</p>
        </div>
    </div>
  )
}

export default PizzaCard