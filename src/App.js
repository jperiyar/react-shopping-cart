import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import store from "./store/index";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
