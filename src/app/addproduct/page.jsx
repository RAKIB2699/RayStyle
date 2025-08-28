"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "./components/Form";





export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      
        <Form/>
      
    </div>
  );
}
