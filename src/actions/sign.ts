import { INITIAL_STATE } from "@/components/SingUp";
import { signUpUserAction } from "./auth";

export async function test() {
  const results = await signUpUserAction(INITIAL_STATE, );

  if (results.success) {
    
  }
}