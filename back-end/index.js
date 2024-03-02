import express from "express";
import { user } from "./Mock/user.js";
import { category } from "./Mock/category.js";
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  res.send(user);
});
app.get("/category", (request, response) => {
  response.send(category);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
