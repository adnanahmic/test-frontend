import React, { ChangeEvent, useMemo, useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
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
}

const CustomerModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const history = useHistory();
  const { total, setToppings, setCustomerDetails } = useOrder();
  const [customerData, setCustomerData] = useState({
    name: "",
    number: "",
    street: "",
    houseNumber: "",
    city: "",
    postalCode: "",
  });

  const isDisabled = useMemo(
    () => !Object.values(customerData).every((val) => val),
    [customerData]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });

  const handleCloseModal = () => {
    setCustomerDetails(null);
    closeModal();
  };

  const handleSubmit = () => {
    setCustomerDetails(customerData);
    history.push("/summary");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <div className="modal">
        <h3>Enter Details</h3>
        <p>Amount to pay: ${total}</p>
        <div className="modal-userForm">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter full name"
          />
          <input
            type="text"
            name="number"
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          <input
            type="text"
            name="houseNumber"
            onChange={handleChange}
            placeholder="Enter house address"
          />
          <input
            type="text"
            name="street"
            onChange={handleChange}
            placeholder="Enter street address"
          />
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Enter city"
          />
          <input
            type="text"
            name="postalCode"
            onChange={handleChange}
            placeholder="Enter postal code"
          />
        </div>
        <button onClick={handleSubmit} disabled={isDisabled}>
          Place Order
        </button>
      </div>
    </Modal>
  );
};

export default CustomerModal;
