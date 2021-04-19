import React from "react";
import "../../App.css";
export default function CartItem({ item, value }) {
  const { id, brand, title, img, price, total, count } = item;
  const { increaseQuantity, decrementQuantity, remuveItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10  col-lg-2   ">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid  "
          alt="product"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2 mb-10 ">
        <span className="d-lg-none"></span>
        <h5>{brand}</h5>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 mb-10 ">
        <span className="d-lg-none">price:</span>
        {price}$
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 mb-10 ">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decrementQuantity(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increaseQuantity(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button className="all-btn" onClick={() => remuveItem(id)}>
          Remuve Item
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total}</strong>
      </div>
    </div>
  );
}
