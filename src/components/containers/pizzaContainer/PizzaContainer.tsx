import React from 'react'
import './PizzaContainer.scss'
import PizzaCard from './pizzaCard/PizzaCard'


const PizzaContainer = () => {
  return (
    <div className="pizzaCont">
        <h2 id='titleText'>PIZZA & DRINK</h2>
        <PizzaCard />
    </div>
  )
}

export default PizzaContainer