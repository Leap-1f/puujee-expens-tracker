// import { sql } from "../../config/database.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
