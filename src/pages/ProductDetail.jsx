import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";

import { Heart, ShoppingCart, ChevronLeft, Tag, Zap } from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  // console.log("data from id = ",useParams())

  const { id } = useParams();
  const [product, setproduct] = useState();

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const saved = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    setproduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  // console.log("my product = ", product);

  return (
    <>
      <div className="detail-page">
        <Link to={"/"}>
          <button className="detail-back">
            <ChevronLeft className="button-icon" />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="detail-grid">
          <div className="detail-image-wrap">
            <img src={product?.image} alt={product?.name} className="detail-image" />
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{product?.name}</h1>

            <button
              type="button"
              className={`wishlist-button detail ${saved ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
              aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`button-icon ${saved ? "fill-current" : ""}`} />
              <span>{saved ? "Saved" : "Save to Wishlist"}</span>
            </button>

            <p className="detail-price">₹{product?.price.toFixed(2)}</p>

            <h2 className="detail-subheading">
              <Tag className="detail-icon" />
              <span>Product Overview</span>
            </h2>

            <p className="detail-copy">{product?.description}</p>

            <ul className="detail-list">
              <li className="detail-list-item">
                <Zap className="detail-icon" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>
              <li className="detail-list-item">
                <Zap className="detail-icon" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className="detail-list-item">
                <Zap className="detail-icon" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>

            <div className="detail-actions">
              <button onClick={() => addToCart(product)} className="primary-button detail-button">
                <ShoppingCart className="button-icon" />
                <span>Add to Cart</span>
              </button>

              <Link to={"/"} className="secondary-button detail-link-button">
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
