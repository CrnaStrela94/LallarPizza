import React from "react";
import "./__plusbtn.scss";

interface PlusBtnProps {
  onClick?: () => void; // Define onClick prop as optional
}

export const PlusBtn: React.FC<PlusBtnProps> = ({ onClick }) => {
  const handleClick = onClick || (() => {}); // Use onClick if provided, otherwise use an empty function

  return (
    <button className="plus-button" onClick={handleClick}>
      <span id="plus">+</span>
    </button>
  );
};
