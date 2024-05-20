import z from "zod";
const recordIncomeSchema = z.object({
  amount: z.number(),
  description: z.string(),
  date: z.date(),
});

export { recordIncomeSchema };
