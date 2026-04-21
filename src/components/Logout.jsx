import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signup");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-semibold transition duration-300 shadow-md hover:shadow-lg"
    >
      <FiLogOut size={18} />
      Logout
    </button>
  );
};

export default Logout;