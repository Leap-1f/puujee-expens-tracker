// import express from "express";
// import { user } from "./Mock/user.js";
// import { category } from "./Mock/category.js";
// const app = express();
// const port = 3000;

// app.get("/user", (req, res) => {
//   res.send(user);
// });
// app.get("/category", (request, response) => {
//   response.send(category);
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
import express from "express";
import cors from "cors";
app.use(cors());
const app = express();

const PORT = 8080;
app.get("/api/home", (req, res) => {
  res.json({ messages: "helllo world", });
});
app.listen(PORT, () => {
  console.log(`started server on port ${PORT}`);
});
