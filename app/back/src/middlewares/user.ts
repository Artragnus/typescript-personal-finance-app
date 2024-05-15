import { Request, Response, NextFunction } from "express";
import { createUserSchema } from "../schemas/user";
import prisma from "../database/connection";

async function createUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, email, password } = createUserSchema.parse(req.body);
    const validateUniqueEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (validateUniqueEmail) {
      return res.json({ message: "Email already exists" });
    }
    next();
  } catch (error) {
    return res.json(error);
  }
}

export { createUserMiddleware };
