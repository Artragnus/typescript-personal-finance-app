import z, { date } from "zod";

const recordExpenseSchema = z.object({
  value: z.number(),
  description: z.string(),
  category: z.string(),
  source: z.string(),
  date: z.optional(date()),
});

export { recordExpenseSchema };
