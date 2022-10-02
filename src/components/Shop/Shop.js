import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToLocalDb, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import useProducts from "../Hooks/useProducts";
import Product from "../Product/Product";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];

    const exists = products.find(
      (product) => product.id === selectedProduct.id
    );

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToLocalDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <div className="links">
            <Link className="clear-cart-link" to="/inventory">
              <button className="clear-cart-button">
                Clear Cart
                <FontAwesomeIcon className="icon" icon={faTrashAlt} />
              </button>
            </Link>
            <Link className="review-order-link" to="/orders">
              <button className="review-order-button">
                Review Order
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
