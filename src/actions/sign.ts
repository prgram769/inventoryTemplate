"use server";

import { type FormStateSignUp } from "@/components/SignUp";
import { signUpUserAction } from "./auth";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
// import { signInUserAction, signUpUserAction } from "./auth";
// import { createClient } from "@supabase/supabase-js";
// import { type FormStateSignIn } from "@/components/SignIn";

// const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

// async function redirectToDashboard(error: any) {
//   if (error) {
//     return;
//   }

//   window.location.href = "/userDashboard";
// }
async function validateSignUp(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const validation = await signUpUserAction(prevState, formData);

  if (!validation.success) {
    return validation;
  }

  const { email, password, name, role } = validation.fields;

  const allowedRoles = [ "user", "admin" ];

  if (!allowedRoles.includes(role)) {
    return { ...validation, success: false, message: "Invalid role", error: { role: ["Role isn't valid"] } };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, { cookies: { get: (name) => cookieStore.get(name)?.value } } );
}
// async function signUpNewUser(email: string, password: string, name: string, role: string, callbackFunction: (error: any) => void) {
//   const { data, error } = await supabase.auth.signUp({
//     email: email,
//     password: password,
//     options: {
//       data: {
//         name: name,
//         role: role
//       }
//     }
//   })

//   callbackFunction(error);

//   return { data, error };
// }

// async function signInUser(email: string, password: string, callbackFunction: (error: any) => void) {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email,
//     password: password,
//   })

//   callbackFunction(error);

//   return { data, error };
// }

// export async function validateSignUp(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
//   const results = await signUpUserAction(prevState, formData);

//   if (results.success) {
//     await signUpNewUser(results.fields.email, results.fields.password, results.fields.name, results.fields.role, redirectToDashboard);
//   }

//   return results;
// }

// export async function validateSignIn(prevState: FormStateSignIn, formData: FormData): Promise<FormStateSignIn> {
//   const results = await signInUserAction(prevState, formData);

//   if (results.success) {
//     await signInUser(results.fields.email, results.fields.password, redirectToDashboard);
//   }

//   return results;
// }