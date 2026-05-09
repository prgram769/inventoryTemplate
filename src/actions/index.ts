import { signInUserAction, signUpUserAction } from "./auth";
import { test } from "./sign";

export const actions = {
  auth: {
    test: test,
    registerUserAction: signUpUserAction,
    loginUserAction: signInUserAction,
  }
}