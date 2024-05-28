import { Request, Response } from "express";
import prisma from "../database/connection";
const recordExpense = async (req: Request, res: Response) => {
  const { value, description, date, category, source } = req.body;
  try {
    const response = await prisma.expenses.create({
      data: {
        value,
        description,
        date,
        category,
        source,
        userId: res.locals.user.id,
      },
    });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export { recordExpense };
