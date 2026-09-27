import React from "react";
import { Link } from "react-router-dom";

import { Heart, ShoppingCart } from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const saved = isInWishlist(product.id);

  return (
    <>
      <div className="product-card">
        <button
          type="button"
          className={`wishlist-button ${saved ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`nav-icon small ${saved ? "fill-current" : ""}`} />
        </button>

        <Link to={`/product/${product.id}`} className="product-link">
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="price-badge">₹{product.price.toFixed(2)}</div>
        </Link>

        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <h3 className="card-title">{product.name}</h3>
          </Link>

          <p className="card-text">{product.description}</p>
          <div className="card-meta">
            <span className="category-tag">{product.category}</span>
          </div>

          <button onClick={() => addToCart(product)} className="primary-button card-button">
            <ShoppingCart className="button-icon" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
