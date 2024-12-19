import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/authcontext";

const Login = () => {
  const { user, setuser } = useContext(Authcontext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginerror, setloginerror] = useState(false);
  const Navigate = useNavigate();

  const handlelogin = async () => {
    if (email && password) {
      const userlogin = { email, password };
      let auth = await fetch(
        `https://blogging-app-mern.vercel.app/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userlogin),
        }
      );
      auth = await auth.json();
      if (auth.auth === false) {
        setloginerror(true);
      } else {
        setloginerror(false);
        setuser(auth?.user);
        localStorage.setItem("user", JSON.stringify(auth.user)); // Save user to localStorage
        Navigate("/");
      }
    } else {
      setloginerror(true)
      console.log("Please fill in all the fields.");
    }
  };

  return (
    <div className="flex  sm:items-center sm:justify-center min-h-screen sm:bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <img src="/Images/logo2.png" className="w-[500px] h-[100px] object-cover mt-8 sm:mt-0  mx-auto" alt="" />
        <h2 className="text-4xl mt-4 font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <div className="flex flex-col gap-4">
          <label>
            <p className="mb-2 text-lg text-gray-600">Email</p>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </label>
          <label>
            <p className="mb-2 text-lg text-gray-600">Password</p>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </label>
          <button
            onClick={handlelogin}
            className="bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
            Login
          </button>
        </div>
        {loginerror && (
          <p className="text-red-600 text-center mt-3">
            Invalid email or password
          </p>
        )}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
