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
app.post("api/signUpp", async (req, res) => {
  const { currency } = req.body;
  try {
    const userDataCurrency = await sql`
    INSERT INTO users currency_type 
    VALUES ${currency}, RETURNING *;`;
    res.send(userDataCurrency);
  } catch (error) {
    console.log("error signing up:", error);
    res.status(500).send("error signing up");
  }
});

app.post("/api/signUp", async (req, res) => {
  const { name, email, password, currency_type } = req.body;
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user data into the database
    const signUpData = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword}, ${currency_type}) RETURNING *;
    `;
    res.send(signUpData);
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Error signing up");
  }
});

app.post("/api/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Өгөгдсөн data дээр үндэслэн хэрэглэгчийн өгөгдлийг татаж авах
    const userData = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (userData.length === 1) {
      // Хэрэв өгсөн имэйлтэй хэрэглэгч байгаа бол нууц үгээ баталгаажуулна
      const user = userData[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Нууц үг таарч, хэрэглэгчийг баталгаажуулсан
        res.send({
          message: "Authentication successful.",
          user: {
            // id: user.id,
            // email: user.email,
            // password: user.password,
          },
        });
      } else {
        // Password does not match
        res.status(401).send({ message: "Incorrect password." });
        res.send("Incorrect password");
      }
    } else {
      // Өгөгдсөн имэйлтэй хэрэглэгч олдсонгүй
      res.status(404).send({ message: "User not found." });
      res.send("User not found.");
    }
  } catch (err) {
    console.error("Error during sign-in:", err);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port http://127.0.0.1:${PORT}`);
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
