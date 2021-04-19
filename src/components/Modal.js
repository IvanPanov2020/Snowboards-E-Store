import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../cssComponents/buttons.css";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, brand, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize pl-5"
                      >
                        <h5>item added to cart</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h3>{brand}</h3>
                        <h4>{title}</h4>
                        <h5 className="text-muted ">price: ${price}</h5>
                        <Link to="/">
                          <button
                            className="all-btn"
                            onClick={() => closeModal()}
                          >
                            Store
                          </button>
                        </Link>
                        <Link to="/cart">
                          <button
                            className="all-btn"
                            onClick={() => closeModal()}
                          >
                            Go to Cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-content: center;
  justify-content: center;
  #modal {
    background: #ffffff;
  }
`;
