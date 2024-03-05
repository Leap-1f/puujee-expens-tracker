// app.js

// require("dotenv").config();
import postgres from "postgres";
import dotenv from "dotenv";
// import ps from "ps";
dotenv.config();
// console.log(process.env.PGDATABASE);
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }
