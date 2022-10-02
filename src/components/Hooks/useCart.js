import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../../utilities/localStorage";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCard = getStoredCart();
    const savedCart = [];
    for (const id in storedCard) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
