import { Response, Request } from "express";
import prisma from "../database/connection";

const recordIncome = async (req: Request, res: Response) => {
  const { value, description, date, category, source } = req.body;

  try {
    await prisma.income.create({
      data: {
        value,
        description,
        category,
        date,
        source,
        user: {
          connect: {
            id: res.locals.user.id,
          },
        },
      },
    });
    return res.status(201).json({ message: "Income recorded" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const listIncomes = async (res: Response) => {
  const { id: userId } = res.locals.user;
  try {
    const data = prisma.income.findMany({
      where: {
        userId,
      },
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { recordIncome, listIncomes };
