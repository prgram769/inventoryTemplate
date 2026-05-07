import { signInUserAction, signUpUserAction } from "./auth";

// if () {
  
// }

export const actions = {
  auth: {
    registerUserAction: signUpUserAction,
    loginUserAction: signInUserAction,
  }
}