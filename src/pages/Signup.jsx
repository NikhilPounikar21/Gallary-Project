import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = () => {
    if (!email || !password) {
      alert("All fields required")
      return
    }
    localStorage.setItem("user", JSON.stringify({ email, password }))
    navigate("/signin")
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="bg-zinc-900 p-10 rounded-2xl w-96 shadow-xl">
        
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Create Account
        </h2>

        <input
          className="w-full mb-6 px-5 py-3 rounded-lg bg-zinc-800 
          text-white placeholder-gray-400 outline-none
          focus:ring-2 focus:ring-amber-400 text-lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-8 px-5 py-3 rounded-lg bg-zinc-800 
          text-white placeholder-gray-400 outline-none
          focus:ring-2 focus:ring-amber-400 text-lg"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-amber-400 text-black py-3 rounded-lg
          font-semibold hover:bg-amber-500 transition text-lg"
        >
          SignUp
        </button>

        <p className="text-gray-400 text-base text-center mt-6">
          Already have an account?{" "}
          <span
            className="text-amber-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signin")}
          >
            SignIn
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signup
