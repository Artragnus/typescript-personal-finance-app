import { z } from "zod";

const userShema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email. Please provide a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default userShema;
