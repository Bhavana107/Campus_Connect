import React from "react";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <>
      <div className="page-shell">
        <div className="back-link-row">
          <Link to={"/"} className="back-link">
            <ChevronLeft className="button-icon" />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className="page-heading">Shopping Cart ({cartCount})</h2>

        <div className="cart-layout">
          <div className="cart-items-column">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="summary-card">
            <h3 className="summary-title">
              <span className="summary-currency">₹</span>
              <span>Order Total</span>
            </h3>
            <div className="summary-body">
              <div className="summary-row">
                <span>SubTotal :</span>
                <span className="summary-value">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping (Express):</span>
                <span className="summary-shipping">Free</span>
              </div>
              <div className="summary-total-row">
                <span>Estimated Total:</span>
                <span className="summary-total">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link to={"/checkout"} className="primary-button summary-button">
              <Zap className="button-icon" />
              <span>Proceed Securely</span>
            </Link>

            <p className="secure-note">All transactions are encrypted and secure.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
