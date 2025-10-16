"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button
          onClick={() => signOut()}
          className="text-red-600 font-semibold"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-blue-600 font-semibold"
        >
          Sign in
        </button>
      )}
    </>
  );
};

export default SignInButton;
