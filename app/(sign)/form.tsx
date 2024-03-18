import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { SubmitButton } from "./submit-button"

export default function Form({
  searchParams,
  formType
}: {
    searchParams: { message: string },
    formType: "sign-in" | "sign-up"
  }) {
  const { signIn, signUp } = useAuth();

  const form = {
    action: formType === "sign-in" ? signIn : signUp,
    buttonText: formType === "sign-in" ? "Sign In" : "Sign Up",
    linkText: formType === "sign-in" ? "Don't have an account? Sign up" : "Already have an account? Sign in",
    href: formType === "sign-in" ? "/signup" : "/login"
  }

  return (
      <form className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-main">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-2 mb-6 border rounded-md bg-inherit"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-2 mb-6 border rounded-md bg-inherit"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={form.action}
          className="px-4 py-2 mb-2 bg-green-700 rounded-md text-main"
          pendingText="Signing In..."
        >
          {form.buttonText}
        </SubmitButton>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-main/10 text-main">
            {searchParams.message}
          </p>
      )}
      <Link href={form.href} className="text-center text-main">
        {form.linkText}
      </Link>
      </form>
  )
}
