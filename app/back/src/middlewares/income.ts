import { recordIncomeSchema } from "../schemas/income";
import { Request, Response, NextFunction } from "express";
const recordIncomeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedBodyRequest = recordIncomeSchema.parse(req.body);
    if (!validatedBodyRequest) {
      return res.status(400).json({ message: "Invalid request" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  next();
};

export { recordIncomeMiddleware };
