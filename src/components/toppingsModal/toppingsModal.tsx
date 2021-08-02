import React from "react";
import Modal from "react-modal";
import { Toppings } from "../../controllers/OrderContext";
import useOrder from "../../hooks/useOrder";

import "./styles.scss";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "60px",
    right: "10px",
    left: "auto",
    bottom: "auto",
    width: "80%",
    maxWidth: "300px",
  },
};

interface Props {
  isOpen: boolean;
  closeModal: any;
  onNext: any;
}

const DummyToppings = [
  { name: "olives", price: 3 },
  { name: "pepperoni", price: 4 },
  { name: "mushrooms", price: 2 },
  { name: "pepper", price: 2 },
];

const ToppingsModal: React.FC<Props> = ({ isOpen, closeModal, onNext }) => {
  const { pizza, toppings, modifyToppings, total, setToppings } = useOrder();

  const handleCloseModal = () => {
    setToppings([]);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <div className="modal">
        <h3>Choose Toppings</h3>
        <p>{pizza?.variant} Pizza</p>
        <div>
          {DummyToppings.map(({ name, price }) => (
            <div
              className={`modal-card ${
                toppings.find((t: Toppings) => t.name === name)
                  ? "modal-card__selected"
                  : ""
              }`}
              key={name}
              onClick={() => modifyToppings({ name, price })}
            >
              <span>{name}</span> + ${price}
            </div>
          ))}
        </div>
        <h3>Total Amount: ${total}</h3>
        <button onClick={onNext}>Continue</button>
      </div>
    </Modal>
  );
};

export default ToppingsModal;
