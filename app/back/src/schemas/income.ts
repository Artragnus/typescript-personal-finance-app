import z from "zod";
const recordIncomeSchema = z.object({
  amount: z.number(),
  description: z.string(),
  date: z.date(),
  type: z.string(),
  source: z.string(),
});

export { recordIncomeSchema };
