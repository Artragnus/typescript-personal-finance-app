import express from "express";
import { createUser, userLogin } from "./controllers/user";
import {
  createUserMiddleware,
  userAuthMiddleware,
  userLoginMiddleware,
} from "./middlewares/user";
import { recordExpenseMiddleware } from "./middlewares/expenses";
import { recordExpense } from "./controllers/expenses";
import { recordIncome, listIncomes } from "./controllers/income";
import { recordIncomeMiddleware } from "./middlewares/income";

export const route = express();

route.post("/signup", createUserMiddleware, createUser);
route.post("/login", userLoginMiddleware, userLogin);

route.use(userAuthMiddleware);

route.post("/record-income", recordIncomeMiddleware, recordIncome);
route.post("/record-expense", recordExpenseMiddleware, recordExpense);
route.get("/list-incomes", listIncomes);
