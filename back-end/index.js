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
// // const hashedPassword = await bcrypt.hash(password, genSaltSync(1));
// server.js

import cors from "cors";
import express from "express";
import { sql } from "./config/database.js";
import bcrypt from "bcrypt";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

// Handle sign-up request
app.post("/api/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user data into the database
    const signUpData = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword}) RETURNING *;
    `;
    res.send(signUpData);
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Error signing up");
  }
});

// Handle sign-in request
app.post("/api/signIn", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { email } = req.body;
    const data = await sql`SELECT * FROM users where email=${email}`;
    console.log(data);
    if (data.length === 1) {
      res.send({
        message: "This email is registered.",
      });
    } else if (data.length === 0) {
      res.send({ success: true, statusCode: 200 });
    }
  } catch (err) {
    console.log(err);
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
