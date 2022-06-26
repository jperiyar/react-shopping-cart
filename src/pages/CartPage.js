import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderNavigation from "../components/HeaderNavigation";
import "./CartPage.css";

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNavigation />
        <main className="cart-wrapper">
          {this.props.cart.map((c) => {
            return (
              <div className="cart-row">
                <span key={c.id} className="product-desc">
                  <strong>{c.name}</strong> - {c.price}{" "}
                </span>
                <button className="btn-remove"> Remove</button>
              </div>
            );
          })}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartPage);
