import { Request, Response, NextFunction } from "express";
import { recordExpenseSchema } from "../schemas/expenses";

const recordExpenseMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedBodyRequest = recordExpenseSchema.parse(req.body);
    if (!validatedBodyRequest) {
      return res.status(400).json({ message: "Invalid request" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  next();
};

export { recordExpenseMiddleware };
