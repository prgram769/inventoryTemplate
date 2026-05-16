"use server";

import { type FormStateSignUp } from "@/components/SignUp";
import { signUpUserAction } from "./auth";
import { signInUserAction } from "./auth";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { redirect } from "next/navigation";
import { type FormStateSignIn } from "@/components/SignIn";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export async function validateSignUp(prevState: FormStateSignUp, formData: FormData): Promise<FormStateSignUp> {
  const validation = await signUpUserAction(prevState, formData);

  if (!validation.success) {
    return validation;
  }

  const { email, password, name, role } = validation.fields;

  const allowedRoles = ["user", "admin"];

  if (!allowedRoles.includes(role)) {
    return { ...validation, success: false, message: "Invalid role", error: { role: ["Role isn't valid"] } };
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      get: (name) => cookieStore.get(name)?.value
    }
  });

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
        role: role,
      }
    }
  })

  if (error) {
    return { ...validation, success: false, message: "Error signing up user", error: { email: [error.message] } };
  }

  if (role == "user") {
    await redirect("/userDashboard");
  } else if (role == "admin") {
    await redirect("/adminDashboard");
  }

  return validation;
}

export async function validateSignIn(prevState: FormStateSignIn, formData: FormData): Promise<FormStateSignIn> {
  const validation = await signInUserAction(prevState, formData);

  const { email, password } = validation.fields;

  const supabase = createServerClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      get: async (name) => {
        const cookieStore = await cookies();
        await cookieStore.get(name)?.value
      },
      set: async (name, value, options) => {
        const cookieStore = await cookies();
        await cookieStore.set(name, value, options);
      },
      remove: async (name, options) => {
        const cookieStore = await cookies();
        await cookieStore.set(name, "", {...options, maxAge: 0});
      }
    }
  });

  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error || !user) {
    return { ...validation, success: false, message: "Error signing in user", error: { email: [error?.message || "User not found"] } };
  }

  if (user.user_metadata.role == "user") {
    redirect("/userDashboard");
  } else if (user.user_metadata.role == "admin") {
    redirect("/adminDashboard");
  }

  return validation;
}