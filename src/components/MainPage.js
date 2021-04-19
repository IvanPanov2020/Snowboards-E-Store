import React, { Component } from "react";
import Category from "./Category";
import { ProductConsumer } from "../context";
import Title from "./Title";
/*
1. import categories from data1.js
2. crete new conponent for showing category item
3. map all categories in to list of category component
4. create one finction onCategorySelect(categoryID) -> [1. set selectedCategory in context 2.redirect to the page for listing all products.]
5. pass this function on the categorySelect component




*/
export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our  " title="products" />
            <div className="row"></div>
            <ProductConsumer>
              {(value) => {
                return value.categories.map((item) => {
                  return (
                    <Category
                      key={item.id}
                      category={item}
                      onCategorySelect={value.setSelectedCategory}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
