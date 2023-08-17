const port = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
  res.send(db.getProducts());
});

app.get("/products/:id", (req, res, next) => {
  res.send(db.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  db.saveProduct(product);
  res.send(product);
});

app.put("/products/:id", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  db.updateProduct(product, req.params.id);
  res.send(product);
}); 

app.delete('/products/:id', (req, res, next) => {
    res.send(db.deleteProduct(req.params.id));
})

app.listen(port || 80, () => {
  console.log(`Server listening on port ${port}`);
});
