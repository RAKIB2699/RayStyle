"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6 max-w-[1600px] w-11/12 mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#4c80d3]">Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">{p.brand}</p>
            <p className="font-bold text-[#5b89d3]">${p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="inline-block mt-3 text-sm bg-[#5b89d3] hover:bg-[#4c80d3] text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
