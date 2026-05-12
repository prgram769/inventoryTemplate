import { type FormStateSignUp } from "@/components/SignUp";
import { signInUserAction, signUpUserAction } from "./auth";
import { createClient } from "@supabase/supabase-js";
import { type FormStateSignIn } from "@/components/SignIn";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;


const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

function redirectToDashboard(error: any) {
  if (error) {
    return;
  }

  window.location.href = "/dashboard";
}

async function signUpNewUser(email: string, password: string, name: string, role: string, callbackFunction: (error: any) => void) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        role: role
      }
    }
  })

  callbackFunction(error);

  return { data, error };
}

async function signInUser(email: string, password: string, callbackFunction: (error: any) => void) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  callbackFunction(error);

  return { data, error };
}

export async function validateSignUp(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const results = await signUpUserAction(prevState, formData);

  if (results.success) {
    signUpNewUser(results.fields.email, results.fields.password, results.fields.name, "user", redirectToDashboard);
  }

  return results;
}

export async function validateSignIn(prevState: FormStateSignIn, formData: FormData): Promise<FormStateSignIn> {
  const results = await signInUserAction(prevState, formData);

  if (results.success) {
    signInUser(results.fields.email, results.fields.password, redirectToDashboard);
  }

  return results;
}