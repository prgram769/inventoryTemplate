import { signInUserAction, signUpUserAction } from "./auth";
import { validateSuccessful } from "./sign";

export const actions = {
  auth: {
    test: validateSuccessful,
    registerUserAction: signUpUserAction,
    loginUserAction: signInUserAction,
  }
}