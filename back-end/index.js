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
//
// import express from "express";
// import cors from "cors";
// import { sql } from "./config/database.js";

// const app = express();

// const PORT = 8080;
// app.get("/users", async (req, res) => {
//   const data = await sql`SELECT * FROM users`;
//   console.log(data);
//   res.send(data);
// });
// app.post("/users/createTable", async (req, res) => {
//   const data =
//     await sql`INSERT INTO users(name, email) VALUES( 'Pj', 'Purevsambuu.bukh@gmail.com') RETURNING *`;
//   console.log(data);
//   res.send(data);
// });
// app.put("/users/changeTable", async (req, res) => {
//   const { name, email } = req.body;
//   const data =
//     await sql`INSERT INTO users(name, email) VALUES(${bat}, ${fdshabfdbfdagm}) RETURNING *`;
//   res.send(data);
// });
// app.post("/users/createTable", async (req, res) => {
//   const data =
//     await sql`INSERT INTO users(name, email) VALUES( 'Pj', 'Purevsambuu.bukh@gmail.com') RETURNING *`;
//   res.send(data);
// });
// app.listen(PORT, () => {
//   console.log(`started server on port ${PORT}`);
// });
//
import express from "express";

import { user } from "./src/router/user.js";
import cors from "cors";
const port = 3000;
const app = express();
// app.use = cors();
app.use(express.json());

app.get("users", user);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
