import { Request, Response, NextFunction } from "express";
import { recordExpenseSchema } from "../schemas/expenses";

const recordExpenseMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { value, description, date, type } = recordExpenseSchema.parse(
      req.body
    );
  } catch (error) {
    return res.json(error);
  }
  next();
};

export { recordExpenseMiddleware };
