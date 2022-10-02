import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <div className="order-info review-order-info">
        <h2>Order Summary</h2>
        <p>Selected items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
