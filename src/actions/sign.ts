import { type FormStateSignUp, INITIAL_STATE } from "@/components/SingUp";
import { signUpUserAction } from "./auth";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

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

export async function validateSuccessful(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const results = await signUpUserAction(prevState, formData);

  if (results.success) {
    
  }

  return results;
}