// Footer.jsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e2e6ef] text-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-gray-900 text-xl font-bold mb-4">MyBrand</h2>
            <p className="text-gray-800">
              MyBrand is your go-to platform for amazing products and services.
              We focus on quality and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-gray-900 text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-800 hover:text-gray-900">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-gray-900 text-xl font-bold mb-4">Contact</h2>
            <p className="text-gray-800">Email: support@mybrand.com</p>
            <p className="text-gray-800">Phone: +880 1234 567890</p>
            <p className="text-gray-800">Address: 123 Main Street, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-700">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
