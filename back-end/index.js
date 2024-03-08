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
import express from "express";
import { sql } from "./config/database.js";
import bcrypt, { genSalt } from "bcrypt";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello server deer huselt tani irlee");
});

app.post("/api/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, genSaltSync(1));

    const data = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
`;

    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

// //
// import express from "express";
// import cors from "cors";
// import userRouter from "./src/router/user.js";

// const port = 3000;
// const app = express();

// // Apply CORS middleware
// app.use(cors());
// // Parse JSON bodies
// app.use(express.json());

// // Define route for users
// app.use("/users", userRouter);

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
