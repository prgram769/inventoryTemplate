import { SignIn } from "@/components/SignIn";

export default function Home() {
  const styles = {
    divContainer: "flex justify-center items-center min-h-screen m-0",
  }

  return (
    <div className={styles.divContainer}>
      <main>
        <SignIn/>
      </main>
    </div>
  );
}