import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-manufacturer">
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} star</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
