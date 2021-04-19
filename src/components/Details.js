import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import "../cssComponents/buttons.css";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value.items);
          const {
            id,
            brand,
            title,
            img,
            price,
            size,
            gender,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h1>Brend: {brand}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-muted mt-3 mb-2">
                    <strong>Size: {size} </strong>
                  </h4>
                  <h4 className="text-uppercase text-muted mt-3 mb-2">
                    <strong>{gender}</strong>
                  </h4>
                  <h4 className="text-uppercase text-muted mt-3 mb-2">
                    <strong>price: {price} $</strong>
                  </h4>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Info:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <button className="all-btn">Back to Products</button>
                    </Link>
                    <button
                      className="all-btn"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addItemToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
