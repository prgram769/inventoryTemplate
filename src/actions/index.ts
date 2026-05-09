import { signInUserAction, signUpUserAction } from "./auth";
import { validateSignIn, validateSignUp } from "./sign";

export const actions = {
  auth: {
    signUp: validateSignUp,
    signIn: validateSignIn,
    registerUserAction: signUpUserAction,
    loginUserAction: signInUserAction,
  }
}