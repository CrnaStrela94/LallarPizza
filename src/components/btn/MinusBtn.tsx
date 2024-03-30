import React from 'react'
import "./__minusbtn.scss"
import minus from "../../assets/Minus.svg"

interface MinusBtnProps {
  onClick: () => void;
}

const MinusBtn: React.FC<MinusBtnProps> = ({ onClick }) => {
  return (
    <button className="minus-button" onClick={onClick}>
      <img id="minus" src={minus} alt="minus" />
    </button>
  )
}

export default MinusBtn;