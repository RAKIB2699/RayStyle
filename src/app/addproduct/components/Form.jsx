"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const totalSells = form.totalSells.value;
    const image = form.image.value;
    const description = form.description.value;
    const feature = form.features.value;
    const features = feature.split(",");

    const formData = {
      name,
      brand,
      category,
      price,
      rating,
      totalSells,
      image,
      description,
      features,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        formData
      );
      if (res.status === 201 || res.status === 200) {
        setMessage("✅ Product added successfully!");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#eeeff1] rounded-2xl shadow-2xl p-8 sm:p-10 space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#5181cf] mb-4">
          Add Products
        </h2>

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            step="0.1"
            max="5"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="number"
            name="totalSells"
            placeholder="Total Sells"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
          />
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white col-span-2"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition resize-none bg-white"
        ></textarea>

        {/* Features */}
        <input
          type="text"
          name="features"
          placeholder="Features (comma separated)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#5b89d3] focus:outline-none transition bg-white"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 text-lg rounded-xl bg-[#6381b3] text-white shadow-md hover:bg-[#608ace] transition disabled:opacity-70"
        >
          <FaPlus className="text-lg" />
          {loading ? "Adding..." : "Add Product"}
        </button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center font-medium text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
