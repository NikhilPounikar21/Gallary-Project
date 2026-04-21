import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import { FaMoon, FaSun, FaHeart, FaUpload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  // Mobile Menu State
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(true);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-gray-900 text-white flex items-center justify-between px-6 md:px-10 shadow-md z-50">
      
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-400 cursor-pointer"
      >
        📸 Gallery
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">

        {/* Home */}
        <button
          onClick={() => navigate("/")}
          className="hover:text-blue-400 transition"
        >
          Home
        </button>

        {/* Favorites */}
        <button
          onClick={() => navigate("/favorites")}
          className="hover:text-pink-400 transition flex items-center gap-2"
        >
          Explore
        </button>

        {/* Upload */}
        <button
          onClick={() => navigate("/upload")}
          className="hover:text-green-400 transition flex items-center gap-2"
        >
          About Us
        </button>

        <button
          onClick={() => navigate("/upload")}
          className="hover:text-green-400 transition flex items-center gap-2"
        >
          Contact
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full text-black outline-none"
        />

        {/* Logout */}
        <Logout />
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 flex flex-col items-center gap-5 py-6 md:hidden">

          <button onClick={() => navigate("/")}>Home</button>

          <button onClick={() => navigate("/favorites")}>
            Favorites
          </button>

          <button onClick={() => navigate("/upload")}>
            Upload
          </button>

          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full text-black outline-none"
          />

          <button onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <Logout />
        </div>
      )}
    </nav>
  );
};

export default Navbar;