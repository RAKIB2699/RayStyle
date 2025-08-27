"use client";
import React from "react";
import GoogleLogIn from "../components/GoogleLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-12 px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200 
        bg-gradient-to-br from-[#f6f7fb] to-[#e2e6ef] p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-[#96bbf6]">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Login to continue your journey
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end text-sm">
            <a href="#" className="text-[#96bbf6] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#c6d7f2] hover:bg-[#96bbf6] rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
       
        {/* Google Button */}
        <GoogleLogIn/>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a
            href="/auth/register"
            className="text-[#96bbf6] font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
