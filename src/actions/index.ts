import { signInUserAction, signUpUserAction } from "./auth";

export const actions = {
  auth: {
    registerUserAction: signUpUserAction,
    loginUserAction: signInUserAction,
  }
}