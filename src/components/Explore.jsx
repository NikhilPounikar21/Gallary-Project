import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  const [search, setSearch] = useState("");

  const categories = [
    "Nature",
    "City",
    "Beach",
    "Mountain",
    "Animals",
    "Forest",
  ];

  const featuredImages = [
    {
      title: "Nature",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "City",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      title: "Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-950 text-white px-6 md:px-16 py-24">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Explore Gallery</h1>
        <p className="text-gray-400 mt-3">
          Search and discover beautiful collections
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto flex items-center bg-gray-800 rounded-full px-4 py-3 mb-12 border border-gray-700 focus-within:border-pink-500">
        <FaSearch className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search nature, city, beach..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none text-white"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((item, index) => (
          <button
            key={index}
            className="px-6 py-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Featured Images */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {featuredImages.map((img, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-4 left-4 text-xl font-semibold">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;