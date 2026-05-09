import { type FormStateSignUp, INITIAL_STATE } from "@/components/SignUp";
import { signInUserAction, signUpUserAction } from "./auth";
import { createClient } from "@supabase/supabase-js";
import { type FormStateSignIn } from "@/components/SignIn";
import { sign } from "crypto";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;


const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

async function signUpNewUser(email: string, password: string, username: string, name: string, role: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        username: username,
        role: role
      }
    }
  })
}

async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
}

export async function validateSignUp(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const results = await signUpUserAction(prevState, formData);

  if (results.success) {
    signUpNewUser(results.fields.email, results.fields.password, results.fields.username, results.fields.name, "user");
  }

  return results;
}

export async function validateSignIn(prevState: FormStateSignIn, formData: FormData): Promise<FormStateSignIn> {
  const results = await signInUserAction(prevState, formData);

  if (results.success) {
    signInUser(results.fields.email, results.fields.password);
  }

  return results;
}