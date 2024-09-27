import React from "react";

// Mock data for demonstration
const applications = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "Tech Corp",
    applicationDate: "2024-09-15",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    companyName: "Innovate Solutions",
    applicationDate: "2024-09-17",
  },
  {
    id: 3,
    jobTitle: "Full Stack Developer",
    companyName: "WebWorks",
    applicationDate: "2024-09-20",
  },
];

const EmployeeApplication = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Employee Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {application.jobTitle}
              </h3>
              <p className="text-gray-700 mb-1">
                <strong>Company:</strong> {application.companyName}
              </p>
              <p className="text-gray-600">
                <strong>Applied on:</strong> {application.applicationDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeApplication;
