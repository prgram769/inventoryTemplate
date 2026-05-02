import Link from "next/link";

export default function Home() {
  const styles = {
    container: "flex flex-col justify-center items-center min-h-screen m-0",
    internalDiv: "flex flex-col px-6 py-6 border-2 rounded-2xl bg-amber-300",
    links: "font-bold m-3 border-1 px-2 py-2 rounded",
    title: "text-4xl m-3"
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Inventory</h1>
      <div className={styles.internalDiv}>
        <Link className={styles.links} href={"/signin"}>
          Sign In
        </Link>
        <Link className={styles.links} href={"/singup"}>
          Sign Up
        </Link>
      </div>
    </main>
  );
}