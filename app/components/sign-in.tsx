import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="p-5 border-solid border" type="submit">
        Signin with Google
      </button>
    </form>
  )
}
