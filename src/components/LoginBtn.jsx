"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default  function AuthButton() {
 return <Link href="/auth/login" className="bg-[#c6d7f2] hover:bg-[#96bbf6] px-4 py-2 rounded">Log in</Link>
}
