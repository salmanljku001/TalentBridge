import React from "react";

const Jobdetails = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://yourcompanylogo.com/sprint-logo.png"
              alt="Company Logo"
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Django Developer
              </h1>
              <p className="text-green-600 font-semibold">SoftTech IT</p>
              <p className="text-gray-500">Dhaka, Bangladesh | Full Time</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Apply Now
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Job Description</h2>
          <p className="text-gray-600 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters...
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Necessitatibus quibusdam facilis</li>
            <li>Velit unde aliquam et voluptas</li>
            <li>Commodi quae ipsum quas est itaque</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Delectus asperiores blanditiis</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">
            Education + Experience
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Necessitatibus quibusdam facilis</li>
            <li>Velit unde aliquam et voluptas</li>
            <li>Commodi quae ipsum quas est itaque</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Delectus asperiores blanditiis</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Other Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Necessitatibus quibusdam facilis</li>
            <li>Velit unde aliquam et voluptas</li>
            <li>Commodi quae ipsum quas est itaque</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Delectus asperiores blanditiis</li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="text-md font-semibold text-gray-600">Job Summary</h3>
          <p className="text-gray-500">Published on: 08 May 2020</p>
          <p className="text-gray-500">Employment Status: Full Time</p>
          <p className="text-gray-500">Job Location: Dhaka, Bangladesh</p>
          <p className="text-gray-500">Salary: Negotiable</p>
          <p className="text-gray-500">Application Deadline: 01 Aug 2020</p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Apply Now
          </button>
          <div className="flex space-x-4">
            <a href="#" className="text-green-500 hover:text-green-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-green-500 hover:text-green-700">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
