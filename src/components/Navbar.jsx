import React from "react";
import { Link } from "react-router-dom";

import { Heart, Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount, wishlistCount } = useCart();
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <Home className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase">
                WDM<span className="text-orange-400">STORE</span>
              </h1>
            </div>
          </Link>

          <nav className="nav-actions">
            <Link to="/wishlist" className="wishlist-link" aria-label="Wishlist">
              <Heart className="w-6 h-6 text-orange-400" />
              {wishlistCount > 0 && (
                <span className="nav-badge">{wishlistCount}</span>
              )}
            </Link>

            <Link
              to={"/cart"}
              className="cart-link"
            >
              <ShoppingCart className="w-6 h-6 text-orange-400" />
              {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
