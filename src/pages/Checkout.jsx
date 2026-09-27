import React, { useState } from "react";

import { useCart } from "../context/CartContext";
import OrderConfimation from "./OrderConfirmation";
import { Link } from "react-router-dom";

import { Package, MapPin, Zap } from "lucide-react";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  console.log("shipping data = ", deliveryDetails);

  if (isConfirmed)
    return <OrderConfimation deliveryDetails={deliveryDetails} />;

  return (
    <>
      <div className="page-shell">
        <h2 className="page-heading large">Finalize Order</h2>
        <div className="checkout-layout">
          <div className="checkout-panel">
            <h3 className="checkout-panel-title">
              <MapPin className="detail-icon" />
              <span>Shipping Information</span>
            </h3>

            <form className="checkout-form" onSubmit={handleSumbit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="field-label">
                    {key === "zip" ? "Pin Code " : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
              ))}

              <div className="checkout-submit-wrap">
                <button type="submit" className="primary-button checkout-submit">
                  <span>₹ Pay and Confirm Order (₹{cartTotal.toFixed(2)})</span>
                </button>
              </div>
            </form>
          </div>

          <div className="summary-card checkout-summary">
            <h3 className="summary-title">
              <Package className="detail-icon" />
              <span>Summary</span>
            </h3>
            <div className="summary-body">
              {cart.map((item) => (
                <div key={item.id} className="summary-item-row">
                  <span className="summary-item-name">{item.name}</span>
                  <span className="summary-item-total">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="summary-row">
                <span>SubTotal :</span>
                <span className="summary-value">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping (Express):</span>
                <span className="summary-shipping">Free</span>
              </div>
              <div className="summary-total-row">
                <span>Total Due:</span>
                <span className="summary-total">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
