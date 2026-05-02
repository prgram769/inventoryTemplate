"use server"

export async function registerUserAction(formData:FormData) {
  console.log("datos de formulario recibido");

  const fields = {
    name: formData.get("name") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  }

  console.log(fields);
}