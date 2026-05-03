"use server"

import { Form } from "@/validations/auth";
import z from "zod";
import { type FormState } from "@/components/SingUp";

export async function registerUserAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const fields = {
    name: formData.get("name") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  }

  const validatedFields = Form.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    return { success: false, message: "Validation error", error: flattenedErrors.fieldErrors, fields}
  }

  return {success: true, message: "Validation successful", error: null, fields}
}