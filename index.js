const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

// Sample product data
const products = [
  { pid: 1, pname: 'Product 1', price: 20, quantity: 10, category: 'Category1' },
  { pid: 2, pname: 'Product 2', price: 30, quantity: 15, category: 'Category2' },
  // Add more products as needed
];

// Middleware to parse JSON in request body
app.use(express.json());

// Route to display all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Route to display a selected product based on ID
app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const selectedProduct = products.find(product => product.pid === productId);

  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Route to display products based on selected category using query string
app.get('/products/category', (req, res) => {
  const category = req.query.category;
  const filteredProducts = products.filter(product => product.category === category);

  res.json(filteredProducts);
});

// Home page with hyperlinks
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Product App</h1>
    <ul>
      <li><a href="/products">Show All Products</a></li>
      <li><a href="/products/category?category=Category1">Category1 Products</a></li>
      <li><a href="/products/category?category=Category2">Category2 Products</a></li>
    </ul>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
