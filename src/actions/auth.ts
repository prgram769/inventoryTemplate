"use server"

import { SignInForm, SignUpForm } from "@/validations/auth";
import z from "zod";
import { type FormStateSignUp } from "@/components/SignUp";
import { type FormStateSignIn } from "@/components/SignIn";

export async function signUpUserAction(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const fields = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const validatedFields = SignUpForm.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    return { success: false, message: "Validation error", error: flattenedErrors.fieldErrors, fields}
  }

  return {success: true, message: "Validation successful", error: null, fields}
}

export async function signInUserAction(prevState: FormStateSignIn, formData: FormData): Promise<FormStateSignIn> {
  const fields = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const validatedFields = SignInForm.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    return { success: false, message: "Validation error", error: flattenedErrors.fieldErrors, fields };
  }

  return { success: true, message: "Validation successful", error: null, fields };
}