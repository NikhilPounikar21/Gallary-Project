import React, { useEffect, useState } from "react";
import { fetchImages } from "../services/imageApi";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    try {
      setLoading(true);
      const data = await fetchImages(page);
      setImages(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <>
      <Navbar />
      <Hero />
      <Explore />

      <div className="bg-black min-h-screen pt-24 px-6 pb-10 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">📸 Explore Gallery</h1>
          <p className="text-gray-400 mt-2">
            Stunning images from around the world
          </p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {loading ? (
            <h2 className="text-center">Loading Images...</h2>
          ) : (
            images.map((img) => <Card key={img.id} elem={img} />)
          )}
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="bg-gray-700 px-5 py-2 rounded"
          >
            Prev
          </button>

          <h3>Page {page}</h3>

          <button
            onClick={() => setPage(page + 1)}
            className="bg-amber-400 text-black px-5 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Gallery;