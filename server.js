import express from "express";
import { initialProducts } from "./src/data/product.js";

const app = express();
let products = [...initialProducts];
const cart = [];

app.use(express.json());

app.get("/api/products", (req, res) => {
	const category = req.query.category;
	const matchingProducts = category
		? products.filter((product) => product.category === category)
		: products;

	res.json(matchingProducts);
});

app.post("/api/products", (req, res) => {
	const product = {
		...req.body,
		id: Math.max(...products.map((item) => item.id)) + 1,
	};

	products.push(product);
	res.status(201).json(product);
});

app.put("/api/products/:id", (req, res) => {
	const productIndex = products.findIndex(
		(product) => product.id === Number(req.params.id)
	);

	if (productIndex === -1) {
		return res.status(404).json({ message: "Product not found" });
	}

	products[productIndex] = {
		...products[productIndex],
		...req.body,
		id: products[productIndex].id,
	};

	res.json(products[productIndex]);
});

app.delete("/api/products/:id", (req, res) => {
	const productIndex = products.findIndex(
		(product) => product.id === Number(req.params.id)
	);

	if (productIndex === -1) {
		return res.status(404).json({ message: "Product not found" });
	}

	const [deletedProduct] = products.splice(productIndex, 1);
	res.json(deletedProduct);
});

app.get("/cart", (req, res) => {
	res.json(cart);
});

app.post("/cart", (req, res) => {
	const body = req.body || {};
	const productId = Number(body.productId ?? body.id);
	const quantity = body.quantity === undefined ? 1 : Number(body.quantity);

	if (!Number.isInteger(productId) || !Number.isInteger(quantity) || quantity < 1) {
		return res.status(400).json({ message: "A valid productId and positive quantity are required" });
	}

	const product = products.find((item) => item.id === productId);
	if (!product) {
		return res.status(404).json({ message: "Product not found" });
	}

	const cartItem = cart.find((item) => item.id === productId);
	if (cartItem) {
		cartItem.quantity += quantity;
		return res.json(cartItem);
	}

	const newCartItem = { ...product, quantity };
	cart.push(newCartItem);
	res.status(201).json(newCartItem);
});

app.put("/cart/:id", (req, res) => {
	const productId = Number(req.params.id);
	const quantity = Number(req.body?.quantity);
	const cartItem = cart.find((item) => item.id === productId);

	if (!Number.isInteger(quantity) || quantity < 1) {
		return res.status(400).json({ message: "Quantity must be a positive integer" });
	}
	if (!cartItem) {
		return res.status(404).json({ message: "Cart item not found" });
	}

	cartItem.quantity = quantity;
	res.json(cartItem);
});

app.delete("/cart/:id", (req, res) => {
	const productIndex = cart.findIndex((item) => item.id === Number(req.params.id));
	if (productIndex === -1) {
		return res.status(404).json({ message: "Cart item not found" });
	}

	const [removedItem] = cart.splice(productIndex, 1);
	res.json(removedItem);
});

app.listen(3000, () => console.log("Server running on port 3000"));
