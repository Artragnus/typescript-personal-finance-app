import { Response, Request } from "express";
import prisma from "../database/connection";

const recordIncome = async (req: Request, res: Response) => {
  const { amount, description, date } = req.body;

  try {
    const income = await prisma.income.create({
      data: {
        value: amount,
        description,
        date,
        user: {
          connect: {
            id: res.locals.user.id,
          },
        },
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { recordIncome };
