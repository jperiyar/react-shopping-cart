import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderNavigation from "../components/HeaderNavigation";
import Product from "../components/Product";
import { addToCart } from "../store/reducers/shopReducers";

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.products = [
      { id: 1, name: "Great Value Whole Milk, 1 gallon", price: "$3.50" },
      { id: 2, name: "Organic Bananas, bunch", price: "$5.20" }
    ];
  }

  addToCart = (id) => {
    const newProductToAdd = this.state.cart.find((p) => p.id === id);
    const cartItemIndex = this.cart.findIndex((c) => c.id === id);

    if (cartItemIndex > -1) {
    } else {
      const updatedCart = [...this.state.cart];
      updatedCart.push(newProductToAdd);

      this.setState({ cart: updatedCart });
    }
  };
  render() {
    return (
      <React.Fragment>
        <HeaderNavigation />
        {this.products.map((product) => {
          return (
            <Product
              product={product}
              productClicked={this.props.addToCart.bind(this, product)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
