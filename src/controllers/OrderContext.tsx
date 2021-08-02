import { createContext, useEffect, useMemo, useState } from "react";

const OrderContext = createContext({});

export type Pizza = {
  variant: string;
  price: number;
};

export type Toppings = {
  name: string;
  price: number;
};

export type Customer = {
  name: string;
  number: string;
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
};

const OrderContextController = ({ children }: any) => {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [toppings, setToppings] = useState<Toppings[]>([]);
  const [customerDetails, setCustomerDetails] = useState<Customer | null>(null);

  const total = useMemo(
    () =>
      pizza
        ? pizza.price +
          toppings.reduce((sum, topping) => sum + topping?.price, 0)
        : 0,
    [pizza, toppings]
  );

  const modifyToppings = (topping: Toppings) => {
    let currentToppings = toppings;
    if (currentToppings.find(({ name }) => name === topping.name))
      currentToppings = currentToppings.filter(
        ({ name }) => name !== topping.name
      );
    else currentToppings.push(topping);
    setToppings([...currentToppings]);
  };

  const value = useMemo(
    () => ({
      pizza,
      setPizza,
      toppings,
      modifyToppings,
      setToppings,
      customerDetails,
      setCustomerDetails,
      total,
    }),
    [pizza, toppings, customerDetails, total]
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export { OrderContextController };
export default OrderContext;
