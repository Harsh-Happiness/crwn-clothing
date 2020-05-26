import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Headers from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in-and-up/sign-in-and-up.component";

function App() {
  return (
    <div className="body">
      <Headers />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
