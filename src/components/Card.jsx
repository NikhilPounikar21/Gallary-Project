
import { FaDownload, FaHeart, FaEye } from "react-icons/fa";

const Card = ({ elem }) => {
  return (
    <div className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-sm">
      
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={elem.download_url}
          alt={elem.author}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-red-500">
            <FaHeart size={14} />
          </button>

          <a
            href={elem.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-blue-500"
          >
            <FaEye size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-900">
        <h2 className="text-lg font-semibold text-white truncate">
          {elem.author}
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Premium Gallery Collection
        </p>

        {/* Bottom Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={elem.download_url}
            download
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaDownload size={13} />
            Download
          </a>

          <a
            href={elem.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-600 hover:border-blue-500 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaEye size={13} />
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
