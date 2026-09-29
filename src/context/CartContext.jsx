import { ToastContainer, toast,Bounce } from "react-toastify";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

import { initialProducts } from "../data/product";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load products");
        return response.json();
      })
      .then(setProducts)
      .catch(() => setProducts(initialProducts));
  }, []);

  // Add item into the cart
  const addToCart = (product) => {
    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Item from cart
  const removeFromCart = (productId, removeAll = false) => {
       toast.success("Item Remove From Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const clearCart = () => setCart([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const alreadySaved = prevWishlist.some((item) => item.id === product.id);
      if (alreadySaved) return prevWishlist;
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  const toggleWishlist = (product) => {
    const alreadySaved = wishlist.some((item) => item.id === product.id);

    if (alreadySaved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  // console.log("my cart = ",cart)

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        wishlist,
        clearCart,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
        wishlistCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
