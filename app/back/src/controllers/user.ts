import { Request, Response } from "express";
import prisma from "../database/connection";
import { createUserSchema } from "../schemas/user";
import bcrpyt from "bcrypt";

async function createUser(req: Request, res: Response) {
  const { name, email, password } = createUserSchema.parse(req.body);

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

    return res.json(data);
  } catch (error) {
    return res.json({ message: error });
  }
}

export { createUser };
