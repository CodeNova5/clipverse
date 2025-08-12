"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="p-6 text-center">
      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
