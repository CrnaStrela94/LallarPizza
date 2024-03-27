import React from 'react'
import "./__minusbtn.scss"
import minus from "../../assets/Minus.svg"

const minusClick=()=>{
    
}
const MinusBtn = () => {
  return (
    <>
    <button className="minus-button" onClick={minusClick}><img id="minus" src={minus} alt="minus" /></button>
    </>
  )
}

export default MinusBtn;