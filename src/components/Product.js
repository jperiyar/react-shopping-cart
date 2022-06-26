import "./Product.css";

const Product = ({ product, productClicked }) => {
  return (
    <main>
      <div className="product-wrapper">
        <span>
          <strong>{product.name} </strong> - {product.price}
        </span>
        <button className="btn-add-cart" onClick={productClicked}>
          Add to cart
        </button>
      </div>
    </main>
  );
};

export default Product;
