import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../cssComponents/category.css";

export default class Category extends Component {
  render() {
    const { id, text, img, type } = this.props.category;

    return (
      <div
        className="category"
        onClick={() => this.props.onCategorySelect(type)}
      >
        <Link id="category-id" to="/items" className="ml-auto">
          <h2 className="category-title">{text}</h2>
          <img id="category-img" src={img} />
        </Link>
      </div>
    );
  }
}
