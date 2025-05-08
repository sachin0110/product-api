const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Endpoint to fetch product data
app.get("/api/products", (req, res) => {
  const data = fs.readFileSync("./data/products.json", "utf-8");
  res.json(JSON.parse(data));
});

app.listen(port, () =>
  console.log(`✅ Mock API running at http://localhost:${port}/api/products`)
);
