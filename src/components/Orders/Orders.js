import { faCreditCard, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { removeFromLocalDb } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromLocalDb(product.id);
  };

  return (
    <div className="order-container">
      <div className="order-review">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <div className="links">
            <Link className="clear-cart-link" to="/inventory">
              <button className="clear-cart-button order-section">
                Clear Cart
                <FontAwesomeIcon className="icon" icon={faTrashAlt} />
              </button>
            </Link>
            <Link className="checkout-button-link" to="/orders">
              <button className="checkout-button order-section">
                Proceed Checkout
                <FontAwesomeIcon className="icon" icon={faCreditCard} />
              </button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
