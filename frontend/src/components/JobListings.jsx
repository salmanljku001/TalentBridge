import React from "react";
import Footer from "./Footer";
const JobListings = () => (
  <div>
    <div className="my-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h2>

      <div className="border border-gray-200 p-6 mb-5 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl text-blue-600 font-semibold">
          Software Engineer
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Looking for a skilled software engineer with experience in React and
          Node.js.
        </p>
      </div>

      <div className="border border-gray-200 p-6 mb-5 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl text-blue-600 font-semibold">Web Developer</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Join our team as a web developer, focusing on front-end development.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default JobListings;
