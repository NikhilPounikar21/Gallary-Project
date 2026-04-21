import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignin = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user?.email === email && user?.password === password) {
      localStorage.setItem("isLoggedIn", "true")
      navigate("/gallery")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="bg-zinc-900 p-10 rounded-2xl w-96 shadow-xl">

        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Welcome Back
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
          onClick={handleSignin}
          className="w-full bg-amber-400 text-black py-3 rounded-lg
          font-semibold hover:bg-amber-500 transition text-lg"
        >
          SignIn
        </button>

        <p className="text-gray-400 text-base text-center mt-6">
          New user?{" "}
          <span
            className="text-amber-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Create account
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signin
