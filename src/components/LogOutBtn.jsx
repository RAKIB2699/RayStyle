"use client";
import { signOut } from "next-auth/react";

export default function LogOutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-[#c6d7f2] hover:bg-[#96bbf6] px-4 py-2 rounded"
    >
      Sign Out
    </button>
  );
}
