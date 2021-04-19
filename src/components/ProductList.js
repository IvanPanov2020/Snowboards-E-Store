import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

import SortButton from "./SortButton";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
            return (
              <div>
                <div onGenderSelect={value.setSelectedGender} />
                <div className="py-5">
                  <div className="container">
                    <Title name="our  " title="products" />
                    {value.products
                      .filter((x) => x.type === value.selectedCategory)
                      .map((product) => {
                        return <Product key={product.id} product={product} />;
                      })}
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
