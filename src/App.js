import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";
import SingIn from "../src/UserAccount/SingIn";
import MainPage from "../src/components/MainPage";
import Cart from "../src/components/cart/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/items" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/singin" component={SingIn}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
