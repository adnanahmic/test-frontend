import React from "react";
import "./styles.scss";

interface Props {
  price: number;
}

const PricePill: React.FC<Props> = ({ price }) => {
  return (
    <div className="pill">
      <span>$ {price}</span>
    </div>
  );
};

export default PricePill;
