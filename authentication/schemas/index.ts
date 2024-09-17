import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(1, "Password is Required"),
});
