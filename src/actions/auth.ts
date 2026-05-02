"use server"

import { Form } from "@/validations/auth";

export async function registerUserAction(formData:FormData) {
  console.log("datos de formulario recibido");

  const fields = {
    name: formData.get("name") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  }

  const validatedFields = Form.safeParse(fields);
  
  if (!validatedFields.success) {
    console.log(validatedFields.error.format().name?._errors);
  }
}