import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h2 className="text-4xl font-extrabold text-white">Wishlist ({wishlist.length})</h2>
        <Link to="/" className="text-orange-400 font-semibold hover:text-orange-300 transition">
          Continue Shopping
        </Link>
      </div>

      {wishlist.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-10 text-center shadow-xl">
          <p className="text-xl font-bold text-white">Your wishlist is empty.</p>
          <p className="mt-2 text-sm text-gray-400">
            Save products you love and move them to cart when you're ready.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 flex flex-col h-full"
            >
              <Link to={`/product/${item.id}`} className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover object-center transition duration-500 hover:scale-110"
                />
              </Link>

              <div className="p-5 flex flex-col grow">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-2xl font-extrabold text-white mb-2 hover:text-orange-400 transition duration-200 line-clamp-1">
                    {item.name}
                  </h3>
                </Link>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto gap-3">
                  <span className="text-xl font-extrabold text-orange-400">
                    ₹{item.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700 transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-red-500 hover:text-red-400 transition"
                >
                  <Trash2 className="w-4 h-4" />
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
