import React from 'react'
import "./__plusbtn.scss"

const plusClick=()=>{
    
}

export const PlusBtn = () => {
  return (
    <>
    <button className="plus-button"onClick={plusClick}> <span id='plus'>+</span></button>
    </>
  )
}