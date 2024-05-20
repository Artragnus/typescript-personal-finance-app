import { Request, Response, NextFunction } from "express";
import { createUserSchema } from "../schemas/user";
import prisma from "../database/connection";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

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
      return res.status(400).json({ message: "Email already exists" });
    }
    next();
  } catch (error) {
    return res.json(error);
  }
}

async function userLoginMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.locals.user = user;
    next();
  } catch (error) {
    return res.json(error);
  }
}

async function userAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const token = authorization.split(" ")[1];

  const decoded = jwt.verify(token, "secret") as JwtPayload;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    res.locals.user = user;

    next();
  } catch (error) {
    return res.json("Internal server error");
  }
}

export { createUserMiddleware, userLoginMiddleware, userAuthMiddleware };
