import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import PricePill from "../../components/pricepill/pricepill";
import "./styles.scss";
import useOrder from "../../hooks/useOrder";
import ToppingsModal from "../../components/toppingsModal/toppingsModal";
import CustomerModal from "../../components/customerModal/customerModal";

const Pizzas = [
  {
    variant: "small",
    price: 15,
  },
  {
    variant: "medium",
    price: 20,
  },
  {
    variant: "large",
    price: 25,
  },
];

const HomePage: React.FC<{}> = () => {
  const { pizza, setPizza } = useOrder();
  const [modalType, setModalType] = useState<String | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const toppingsFormNext = () => {
    setModalType("customer-form");
  };

  const customerFormClose = () => {
    setModalType("toppings-form");
  };

  useEffect(() => {
    if (pizza) openModal("toppings-form");
  }, [pizza]);

  return (
    <>
      <Header title="Order Your Pizza" />
      <div className="order">
        <h2>Choose Pizza Size</h2>
        <div className="order-container">
          {Pizzas.map(({ variant, price }) => (
            <div
              className="order-card"
              key={variant}
              onClick={() => setPizza({ variant, price })}
            >
              <PricePill price={price} />
              <img src={`/images/${variant}.png`} />
              <h3>{variant}</h3>
            </div>
          ))}
        </div>
      </div>
      <ToppingsModal
        isOpen={modalType === "toppings-form"}
        closeModal={closeModal}
        onNext={toppingsFormNext}
      />
      <CustomerModal
        isOpen={modalType === "customer-form"}
        closeModal={customerFormClose}
      />
    </>
  );
};

export default HomePage;
