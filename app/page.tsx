import { auth } from "@/auth"
import SignIn from "./components/sign-in"
import { SignOut } from "./components/sign-out"

export default async function Home() {
  const session = await auth()
  return (
    <div className="p-52">
      {session ? (
        <div>
          <p>Signed in as {session.user.email}</p>
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  )
}
