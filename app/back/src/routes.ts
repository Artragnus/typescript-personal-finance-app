import express from "express";
import { createUser } from "./controllers/user";
import { createUserMiddleware } from "./middlewares/user";

export const route = express();

route.post("/signup", createUserMiddleware, createUser);
