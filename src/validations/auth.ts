import * as z from "zod";

export const SignUpForm = z.object({
  name: z
  .string()
  .min(1, "The name must be at least 1 characters")
  .max(100, "The name must be less than 100 characters")
  .regex(/^[a-zA-Z]+$/, "The name can't contain numbers."),
  email: z.email("The email must be a valid email address"),
  password: z
  .string()
  .min(6, "The password must be at least 6 characters")
  .max(100, "The password must be less than 100 characters")
});

/* Is possible in the future I will delete the following */

export const SignInForm = z.object({
  // username: z
  // .string()
  // .min(3, "The username must be at least 3 characters")
  // .max(20, "The username must be less than 20 characters"),
  email: z.email("The email must be a valid email address"),
  password: z
  .string()
  .min(6, "The password must be at least 6 characters")
  .max(100, "The password must be less than 100 characters")
})