import React from "react";
import "./App.scss";
import { OrderContextController } from "./controllers/OrderContext";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <OrderContextController>
        <Routes />
      </OrderContextController>
    </div>
  );
}

export default App;
