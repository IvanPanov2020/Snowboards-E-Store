import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PaypalButton";

// import { ProductContext } from "../../context";

export default function CartTotals({ value, history }) {
  // const productContext = useContext(ProductContext);
  const { clearCart, cartDiscount, cartTotal, cartSubTotal } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-righht">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">discount : </span>
              <strong>$ {cartDiscount}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
