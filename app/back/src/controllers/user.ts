import { Request, Response } from "express";
import prisma from "../database/connection";
import { createUserSchema } from "../schemas/user";
import bcrpyt from "bcrypt";
import * as jwt from "jsonwebtoken";
async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrpyt.hash(password, 10);
    const data = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = data;

    return res.json(user);
  } catch (error) {
    return res.json({ message: error });
  }
}
async function userLogin(req: Request, res: Response) {
  const { id, name, email } = res.locals.user;

  const token = jwt.sign({ id }, "secret", { expiresIn: "7 days" });
  const user = {
    id,
    name,
    email,
    token,
  };
  return res.status(200).json(user);
}

export { createUser, userLogin };
