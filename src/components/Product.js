import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, brand, title, img, price, inCart } = this.props.product;
    return (
      <div className="category">
        <div className="">
          <ProductConsumer>
            {(value) => (
              <div className="" onClick={() => value.handleDetail(id)}>
                <div className="">
                  <h5 className=""> {brand} </h5>
                  <p className=""> {title} </p>
                </div>
                <Link to="/details">
                  <img src={img} alt="product" className="" height="200px" />
                </Link>

                <h5 className="font-italic">
                  Price:
                  <span className="text-center">$</span>
                  {price}
                </h5>
              </div>
            )}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
