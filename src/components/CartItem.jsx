import React from "react";
import { useCart } from "../context/CartContext";

import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const descreaseQ = () => removeFromCart(item.id);

  return (
    <div className="cart-item-card">
      <div className="cart-item-main">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="cart-item-name">{item.name}</h3>

          <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-item-controls">
        <div className="cart-quantity-box">
          <button onClick={descreaseQ} className="cart-qty-button" aria-label="Decrease quantity">
            -
          </button>
          <span className="cart-qty-value">{item.quantity}</span>
          <button onClick={increaseQ} className="cart-qty-button" aria-label="Increase quantity">
            +
          </button>
        </div>
        <p className="cart-item-total">₹{(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id, true)} className="cart-remove-button" aria-label="Remove item">
          <X className="cart-remove-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
