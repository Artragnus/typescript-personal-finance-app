import { Request, Response } from "express";
import prisma from "../database/connection";
const recordExpense = async (req: Request, res: Response) => {
  const { value, description, date, categoryId, source } = req.body;
  try {
    const response = await prisma.expense.create({
      data: {
        value,
        description,
        date,
        categoryId,
        source,
        userId: res.locals.user.id,
      },
    });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const listExpenses = async (res: Response) => {
  const { id: userId } = res.locals.user;
  try {
    const data = prisma.expense.findMany({
      where: {
        userId,
      },
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { recordExpense, listExpenses };
