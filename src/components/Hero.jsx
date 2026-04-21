import React from 'react'

const Hero = () => {
  return (
    <div>
         {/* Add Hero Section Here */}
      <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore <span className="text-blue-500">Beautiful</span> Images
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Search millions of high quality photos
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Search photos..."
              className="px-5 py-4 rounded-xl text-black w-full md:w-[500px]"
            />

            <button className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero