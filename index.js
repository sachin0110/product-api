const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to fetch product data
app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("./data/products.json", "utf-8");
  res.json(JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`✅ Mock API running at http://localhost:${PORT}/api/products`);
});
