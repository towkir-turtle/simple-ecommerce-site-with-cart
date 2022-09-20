import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <div className="order-info">
        <p>Selected items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
