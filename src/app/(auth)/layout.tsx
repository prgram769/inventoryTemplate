export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  const styles = {
    container: "flex flex-col justify-center items-center min-h-screen m-0",
  }

  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}