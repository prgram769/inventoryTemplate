import { SignIn } from "@/components/SignIn";
import Link from "next/link";

export default function Home() {
  const styles = {
    container: "flex justify-center items-center min-h-screen m-0",
  }

  return (
    <main className={styles.container}>
      <div className="flex flex-col">
        <Link href={"/signin"}>
          Sign In
        </Link>
        <Link href={"/singup"}>
          Sing Up
        </Link>
      </div>
    </main>
  );
}