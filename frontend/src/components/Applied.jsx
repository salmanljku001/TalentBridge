import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Django Developer",
    location: "Dhaka, Bangladesh",
    applicants: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        applied_for: "Django Developer",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        applied_for: "Django Developer",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    applicants: [
      {
        id: 3,
        name: "Mark Brown",
        email: "mark@example.com",
        applied_for: "Frontend Developer",
      },
    ],
  },
  {
    id: 3,
    title: "Network Engineer",
    location: "Rangpur, Bangladesh",
    applicants: [],
  },
];

const Applied = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleDownloadResume = (applicantName) => {
    alert(`Downloading resume for ${applicantName}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Employer Dashboard
      </h1>

      {/* Job Listings */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Your Job Listings
      </h2>
      <ul className="space-y-4">
        {jobData.map((job) => (
          <li
            key={job.id}
            className="border border-gray-200 p-4 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.location}</p>
            <button
              onClick={() => setSelectedJobId(job.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Applicants
            </button>
          </li>
        ))}
      </ul>

      {/* Applicants for the selected job */}
      {selectedJobId && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Applicants for Job:{" "}
            {jobData.find((job) => job.id === selectedJobId).title}
          </h2>
          <ul className="space-y-4">
            {jobData
              .find((job) => job.id === selectedJobId)
              .applicants.map((applicant) => (
                <li
                  key={applicant.id}
                  className="border border-gray-200 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {applicant.name}
                      </h3>
                      <p className="text-gray-600">Email: {applicant.email}</p>
                      <p className="text-gray-600">
                        Applied for: {applicant.applied_for}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDownloadResume(applicant.name)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Download Resume
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          {jobData.find((job) => job.id === selectedJobId).applicants.length ===
            0 && <p className="text-gray-600">No applicants for this job.</p>}
        </div>
      )}
    </div>
  );
};

export default Applied;
