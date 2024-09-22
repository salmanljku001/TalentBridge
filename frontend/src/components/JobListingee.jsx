import React from "react";
import Footer from "./Footer";

const jobData = [
  {
    title: "Django Developer",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    title: "Network Engineer",
    type: "Part Time",
    location: "Dhaka, Bangladesh",
    description:
      "Saadaval on mitmeid erinevaid Lorem Ipsum variante, kuid enamik neist on läbi teinud muutusi.",
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    description:
      "Saadaval on mitmeid erinevaid Lorem Ipsum variante, kuid enamik neist on läbi teinud muutusi.",
  },
  {
    title: "Laravel Developer",
    type: "Internship",
    location: "Rangpur, Bangladesh",
    description:
      "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta.",
  },
  {
    title: "Dot Net Developer",
    type: "Part Time",
    location: "Dhaka, Bangladesh",
    description:
      "Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses.",
  },
  {
    title: "Android Developer",
    type: "Full Time",
    location: "Dhaka",
    description:
      "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta.",
  },
];

const JobCard = ({ title, type, location, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl">U</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 hover:text-green-600 transition duration-300">
        {title}
      </h2>
      <div className="flex justify-center mb-2">
        <span
          className={`text-sm font-medium mr-2 px-3 py-1 rounded-full ${
            type === "Full Time"
              ? "bg-green-500 text-white"
              : type === "Part Time"
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {type}
        </span>
        <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {location}
        </span>
      </div>
      <p className="text-gray-600 text-sm text-center">
        {description.substring(0, 100)}...
      </p>
      <div className="flex justify-center mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const JobListingee = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Job Listings
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobData.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              type={job.type}
              location={job.location}
              description={job.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobListingee;
