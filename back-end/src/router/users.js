import { Router } from "express";
import { getAllUsers } from "../controller/users";
import express from "express";
const user = express.Router();

user.get("/").get(getAllUsers);

export { user };
