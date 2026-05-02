import * as z from "zod";

export const Form = z.object({
  name: z
  .string()
  .regex(/^[a-z]+$/, "The name doesn't contain numbers."),
  username: z
  .string()
  .min(3, "The username must be at least 3 characters")
  .max(20, "The username must be less than 20 characters"),
  password: z
  .string()
  .min(6, "The password must be at least 6 characters")
});