import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="wishlist-page">
      <div className="wishlist-page-header">
        <h2 className="wishlist-page-title">Wishlist ({wishlist.length})</h2>
        <Link to="/" className="wishlist-page-link">
          Continue Shopping
        </Link>
      </div>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty-box">
          <p className="wishlist-empty-title">Your wishlist is empty.</p>
          <p className="wishlist-empty-text">
            Save products you love and move them to cart when you're ready.
          </p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <Link to={`/product/${item.id}`} className="wishlist-card-image-wrap">
                <img src={item.image} alt={item.name} className="wishlist-card-image" />
              </Link>

              <div className="wishlist-card-body">
                <Link to={`/product/${item.id}`} className="wishlist-card-name-link">
                  <h3 className="wishlist-card-name">{item.name}</h3>
                </Link>

                <p className="wishlist-card-desc">{item.description}</p>

                <div className="wishlist-price-row">
                  <span className="wishlist-price">₹{item.price.toFixed(2)}</span>

                  <button type="button" onClick={() => addToCart(item)} className="wishlist-cart-button">
                    <ShoppingCart className="wishlist-button-icon" />
                    Add to Cart
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="wishlist-remove-button"
                >
                  <Trash2 className="wishlist-button-icon" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
