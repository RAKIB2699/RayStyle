'use client'
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const GoogleLogIn = () => {
    const handleLogIn = ()=>{
        signIn('google', {callbackUrl: "/"})
    }
  return (
    <button
      type="button"
      onClick={handleLogIn}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-1.5 rounded-md shadow-sm bg-white hover:bg-gray-100 transition duration-200"
    >
      <FcGoogle className="text-xl" />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
};

export default GoogleLogIn;

