import React from 'react'

const About = () => {
  return (
    <div>
        {/* 3️⃣ About Us Section */}
<section className="w-full bg-gray-950 text-white py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        About <span className="text-blue-500">Us</span>
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Welcome to our Gallery Platform, where creativity meets inspiration. 
        We provide millions of high-quality images for designers, developers, 
        marketers, and creators around the world.
      </p>
      <p className="text-gray-400 text-md leading-relaxed mb-8">
        Our mission is to make beautiful visuals accessible to everyone. 
        Whether you need images for websites, presentations, blogs, or personal 
        projects, we’ve got you covered.
      </p>

      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
        Learn More
      </button>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="About Us"
        className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
      />
    </div>

  </div>
</section>
    </div>
  )
}

export default About