import React from "react";
import { Link } from "react-router-dom";

import { Heart, Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount, wishlistCount } = useCart();
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to={"/"} className="brand-link">
            <div className="brand-wrap">
              <Home className="brand-mark" />
              <h1 className="brand-text">
                WDM<span className="brand-highlight">STORE</span>
              </h1>
            </div>
          </Link>

          <nav className="nav-actions">
            <Link to="/wishlist" className="wishlist-link" aria-label="Wishlist">
              <Heart className="nav-icon" />
              {wishlistCount > 0 && (
                <span className="nav-badge">{wishlistCount}</span>
              )}
            </Link>

            <Link to={"/cart"} className="cart-link">
              <ShoppingCart className="nav-icon" />
              {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
