import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* Contact Us Section */}
<section className="w-full bg-gray-900 text-white py-16 px-6 md:px-20" id="contact">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

    {/* Left Side */}
    <div>
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-300 mb-8">
        Have questions, feedback, or need support? We'd love to hear from you.
      </p>

      <div className="space-y-5 text-gray-300">
        <p>📍 Latur, Maharashtra, India</p>
        <p>📧 support@galleryapp.com</p>
        <p>📞 +91 98765 43210</p>
      </div>

      {/* Social Media */}
      <div className="flex gap-4 mt-8">
        <a href="#" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Facebook
        </a>
        <a href="#" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Instagram
        </a>
        <a href="#" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Twitter
        </a>
      </div>
    </div>

    {/* Right Side Contact Form */}
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>
    </div>
  )
}

export default Contact