import { useContext } from "react";
import OrderContext from "../controllers/OrderContext";

const useOrder = () => {
  const order: any = useContext(OrderContext);
  return order;
};

export default useOrder;
