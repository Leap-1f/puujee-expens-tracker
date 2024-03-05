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
import { sql } from "./config/database.js";

const app = express();

const PORT = 8080;
app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send(data);
});
app.post("/users/createTable", async (req, res) => {
  const data =
    await sql`INSERT INTO users(name, email) VALUES( 'Pj', 'Purevsambuu.bukh@gmail.com') RETURNING *`;
  console.log(data);
  res.send(data);
});
app.put("/users/changeTable", async (req, res) => {
  const { name, email } = req.body;
  const data =
    await sql`INSERT INTO users(name, email) VALUES(${bat}, ${fdshabfdbfda@gm}) RETURNING *`;
  res.send(data);
});

app.delete("/users/dropTable", async (req, res) => {
  const data = await sql`DELETE FROM users `;
  res.send(data);
});
app.listen(PORT, () => {
  console.log(`started server on port ${PORT}`);
});
