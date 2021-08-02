import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import OrderDetailsPage from "./pages/orderdetails/orderdetails";

const Routes: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/summary" component={OrderDetailsPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
