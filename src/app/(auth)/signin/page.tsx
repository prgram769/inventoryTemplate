import { SignIn } from "@/components/SignIn";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory sign in",
  description: "Made with ❤️ by rugby01",
};

export default function SignInRoute() {
  return (
    <SignIn/>
  )
}