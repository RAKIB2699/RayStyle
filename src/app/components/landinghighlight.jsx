"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingHighlight() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/highlight")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">🔥 Highlighted Sunglasses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.brand}</p>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
              <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
