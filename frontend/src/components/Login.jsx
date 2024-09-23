import React from "react";
import Footer from "./Footer";

const Login = () => (
  <div>
    <div className="max-w-md mx-auto bg-gradient-to-r from-white to-gray-100 p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
        Log In
      </h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:bg-gradient-to-l hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log In
        </button>
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default Login;
