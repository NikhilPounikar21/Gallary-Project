import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">PixGallery</h2>
          <p className="text-gray-400 mt-4 text-sm leading-6">
            Explore millions of high-quality images from around the world. 
            Download, search, and enjoy stunning visuals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Explore</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Nature</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Animals</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <i className="ri-facebook-fill hover:text-white cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-white cursor-pointer"></i>
            <i className="ri-twitter-x-line hover:text-white cursor-pointer"></i>
            <i className="ri-youtube-fill hover:text-white cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2026 PixGallery. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer