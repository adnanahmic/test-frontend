import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header";
import { Toppings } from "../../controllers/OrderContext";
import useOrder from "../../hooks/useOrder";
import "./styles.scss";

const OrderDetailsPage: React.FC<{}> = () => {
  const history = useHistory();
  const { pizza, toppings, customerDetails, total } = useOrder();

  console.log(customerDetails);

  useEffect(() => {
    if (!pizza) history.goBack();
  }, [pizza]);

  return (
    <>
      <Header title="Order Summary" />
      <div className="summary">
        <h4>Pizza Details</h4>
        <div>
          <p>
            Amount Paid: <span>{total}</span>
          </p>
          <p>
            Size: <span>{pizza?.variant}</span>
          </p>
          <p>
            Toppings:{" "}
            <span>
              {toppings
                .reduce((arr: any, t: Toppings) => [...arr, t.name], [])
                .join(", ")}
            </span>
          </p>
        </div>
        <h4>Customer Details</h4>
        <div>
          <p>
            Name: <span>{customerDetails?.name}</span>
          </p>
          <p>
            Phone: <span>{customerDetails?.number}</span>
          </p>
          <p>
            Address:{" "}
            <span>
              {customerDetails?.houseNumber}, {customerDetails?.street},{" "}
              {customerDetails?.city} - {customerDetails?.postalCode}
            </span>
          </p>
        </div>
        <h4>Payload</h4>
        <pre>{JSON.stringify({ pizza, toppings, total, customerDetails }, null, 4)}</pre>
      </div>
    </>
  );
};

export default OrderDetailsPage;
