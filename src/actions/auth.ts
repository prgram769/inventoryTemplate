"use server"

import { Form } from "@/validations/auth";
import z from "zod";

export async function registerUserAction(prevState: { fields: { name: string, username: string, password: string } }, formData: FormData) {
  console.log("datos de formulario recibido");

  const fields = {
    name: formData.get("name") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  }

  const validatedFields = Form.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    console.log(flattenedErrors.fieldErrors);

    return { success: false, message: "Validation error", zodErrors: flattenedErrors.fieldErrors, data: fields }
  }

  console.log("Validation successful");
}