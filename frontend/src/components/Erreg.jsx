import React from "react";
import Footer from "./Footer";

const Erreg = () => (
  <div>
    <div className="max-w-md mx-auto bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
        Register
      </h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="text"
          placeholder="Enter company name"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="text"
          placeholder="Enter company website link"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="text"
          placeholder="Enter company description"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />
        <input
          type="text"
          placeholder="Enter your contact number"
          required
          className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
    <Footer />
  </div>
);

export default Erreg;
