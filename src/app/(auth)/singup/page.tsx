import { SignUp } from "../../../components/SingUp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory sign up",
  description: "Made with ❤️ by rugby01",
};

export default function SignUpRoute() {
  return (
    <SignUp/>
  )
}