import { signOut } from "@/auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="p-5 border-solid border" type="submit">
        Sign Out
      </button>
    </form>
  )
}
