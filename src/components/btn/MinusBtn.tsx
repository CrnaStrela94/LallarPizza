// MinusBtn.tsx
import React from 'react';
import "./__minusbtn.scss";

type Props = {
  onClick: () => void;
};

const MinusBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="minus-button" onClick={onClick}>
      <span id='minus'>-</span>
    </button>
  );
};

export default MinusBtn;