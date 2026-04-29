import { Input } from "@/components/ui/Input";

function SignIn() {

  const styles = {
    divContainer: "w-full max-w-md",
    title: "text-3xl font-bold"
  }

  return (
    <div className={styles.divContainer}>
      <form>
        <Input/>
      </form>
    </div>
  )
}

export { SignIn };