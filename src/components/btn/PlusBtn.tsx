import React from "react";
import "./__plusbtn.scss";
import plus from "../../assets/plus.svg"

interface PlusBtnProps {
  onClick?: () => void;
}

export const PlusBtn: React.FC<PlusBtnProps> = ({ onClick }) => {
  const handleClick = onClick || (() => { });

  return (
    <button className="plus-button" onClick={handleClick}>
      <img src={plus} alt="" />
    </button>
  );
};
