"use client";
import React from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import GoogleLogIn from "../components/GoogleLogin";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-12 px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200 
        bg-gradient-to-br from-[#f6f7fb] to-[#e2e6ef] p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-[#96bbf6] bg-clip-text">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Sign up to get started with us
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo URL
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <FaImage className="text-gray-400 mr-2" />
              <input
                type="url"
                id="photo"
                placeholder="https://example.com/profile.jpg"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <FaEnvelope className="text-gray-400 mr-2" />
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
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-purple-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#c6d7f2] hover:bg-[#96bbf6] rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <GoogleLogIn />

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-[#96bbf6] font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
