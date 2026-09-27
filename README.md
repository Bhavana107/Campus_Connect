# 🛍️ Smart Shopping Website

A modern **React-based e-commerce shopping website** developed using **React.js and Vite**. The project demonstrates component-based architecture, React state management, routing, reusable components, product filtering, wishlist functionality, shopping cart management, and a basic checkout workflow.

---

## 📌 Project Overview

The **Smart Shopping Website** is a frontend e-commerce application designed to provide users with a simple and interactive shopping experience.

Users can:

* Browse available products
* Search for products
* Filter products by category
* Filter products by price range
* View detailed product information
* Add products to the shopping cart
* Increase or decrease product quantities
* Add products to a wishlist
* Move wishlist products to the cart
* View cart totals
* Enter delivery information
* Complete a simulated checkout
* Receive order confirmation feedback

The application follows a **component-based React architecture**, with reusable components and centralized cart/wishlist state management.

---

## ✨ Features

### 🛒 Product Browsing

* Displays a collection of electronic products.
* Products are organized into categories such as:

  * 📱 Phones
  * 💻 Laptops
  * 📷 Cameras
  * 📱 Tablets
* Each product contains:

  * Product name
  * Price
  * Description
  * Category
  * Product image

Product data is maintained in a centralized product data file.

### 🔍 Search & Filtering

Users can search products using their name or description.

The website also provides:

* Category filtering
* Price-range filtering
* Combined filtering
* Clear filters functionality
* Empty search-result handling

The product list dynamically updates based on the selected filters.

### 📦 Product Details

Each product has its own detailed page.

Users can:

* View the product image
* View product name and price
* Read the product description
* Add the product to the cart
* Add/remove the product from the wishlist
* Return to the product listing

Product pages use dynamic routing through React Router.

### ❤️ Wishlist

Users can save products they are interested in for later.

Wishlist functionality includes:

* Add product to wishlist
* Remove product from wishlist
* View saved products
* Add wishlist items directly to cart
* Continue shopping from the wishlist

### 🛒 Shopping Cart

The cart supports:

* Adding products
* Increasing product quantity
* Decreasing product quantity
* Removing products
* Clearing the cart
* Calculating total quantity
* Calculating the total price

Cart state is shared across the application using **React Context API**.

### 💳 Checkout

The checkout page provides a simulated order placement flow.

Users can:

1. Review their cart
2. Enter shipping information
3. View the order summary
4. View the total amount
5. Confirm the order
6. Receive an order confirmation

This is a **frontend simulation** and does not process real payments.

### 🔔 User Notifications

The project uses **React Toastify** to display feedback notifications when users add or remove products from the cart.

### 🧩 React Class Component

The project includes a dedicated React class component:

`ClassInfoBox.jsx`

This component extends `React.Component` and receives its content through props, demonstrating the use of a **class-based React component** alongside modern functional components.

---

## 🛠️ Technologies Used

| Technology            | Purpose                             |
| --------------------- | ----------------------------------- |
| **React.js**          | Building the user interface         |
| **Vite**              | Development server and build tool   |
| **JavaScript (ES6+)** | Application logic                   |
| **React Router**      | Page navigation and dynamic routing |
| **React Context API** | Global cart and wishlist state      |
| **React Hooks**       | State and lifecycle management      |
| **Lucide React**      | UI icons                            |
| **React Toastify**    | User notifications                  |
| **CSS**               | Styling and responsive UI           |

The project's `package.json` specifies React 19, Vite, React Router, Lucide React, and React Toastify among its dependencies.

---

## 🏗️ Project Architecture

The application follows a modular React structure.

```text
Shopping-Website/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── ProductCard
│   │   ├── CartItem
│   │   ├── SearchFilter
│   │   ├── CategoryFilter
│   │   ├── PriceFilter
│   │   └── ClassInfoBox
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── product.js
│   │
│   ├── pages/
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderConfirmation.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

The repository itself is organized around `public`, `src`, Vite configuration, ESLint configuration, and package-management files.

---

## 🧭 Application Routes

The application uses **React Router** for navigation.

| Route          | Page            |
| -------------- | --------------- |
| `/`            | Product Listing |
| `/product/:id` | Product Details |
| `/wishlist`    | Wishlist        |
| `/cart`        | Shopping Cart   |
| `/checkout`    | Checkout        |

These routes are defined in `App.jsx`.

---

## 🔄 Application Flow

```text
                ┌─────────────────┐
                │   Product List  │
                └────────┬────────┘
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Search      Filter      Category
             │           │           │
             └───────────┼───────────┘
                         ▼
                  Product Results
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
       Product Details            Wishlist
             │                       │
             └───────────┬───────────┘
                         ▼
                    Add to Cart
                         │
                         ▼
                   Shopping Cart
                         │
                         ▼
                     Checkout
                         │
                         ▼
                Order Confirmation
```

---

## 🧠 State Management

The project uses **React Context API** to manage shopping-related state.

`CartContext.jsx` maintains:

* Product data
* Cart items
* Wishlist items
* Cart quantity
* Cart total
* Wishlist count

It also provides functions such as:

```javascript
addToCart()
removeFromCart()
clearCart()
addToWishlist()
removeFromWishlist()
toggleWishlist()
isInWishlist()
```

This allows different components and pages to access and update shopping data without passing the state manually through multiple levels of components.

---

## 🧩 Component-Based Architecture

The application separates the UI into reusable components.

For example:

```text
App
│
├── Navbar
│
├── ProductList
│   ├── SearchFilter
│   ├── CategoryFilter
│   ├── PriceFilter
│   ├── ClassInfoBox
│   └── ProductCard
│
├── ProductDetail
│
├── Wishlist
│
├── Cart
│   └── CartItem
│
├── Checkout
│
└── Footer
```

This structure improves **reusability, maintainability, and separation of concerns**.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Bhavana107/Shopping-Website.git
```

### 2. Navigate to the project

```bash
cd Shopping-Website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The Vite development server will provide a local URL, typically:

```text
http://localhost:5173/
```

---

## 📦 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

These scripts are defined in the project's `package.json`.

---

## 🎯 Learning Objectives

This project demonstrates practical implementation of:

* React functional components
* React class components
* Props and component communication
* React Hooks
* `useState`
* `useEffect`
* `useMemo`
* Context API
* React Router
* Dynamic routes
* Conditional rendering
* Array filtering and mapping
* Form handling
* Event handling
* State management
* Reusable UI components
* E-commerce application workflows

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🔐 User authentication
* 💳 Real payment gateway integration
* 🗄️ Backend database integration
* 📦 Order history
* 👤 User profiles
* 🔎 Advanced product search
* ⭐ Product ratings and reviews
* 📊 Admin dashboard
* 📱 Improved mobile responsiveness
* 💾 Persistent cart and wishlist using localStorage or a database
* 🚚 Real-time order tracking
* 🔔 Enhanced notification system



This project is developed for **educational and academic purposes**.
