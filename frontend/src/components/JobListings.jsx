import React from 'react';
import '../assets/css/JobListings.css';

const JobListings = () => (
  <div className="job-listings-container">
    <h2>Job Listings</h2>
    <div className="job-listing">
      <h3 className="job-title">Software Engineer</h3>
      <p className="job-description">Looking for a skilled software engineer with experience in React and Node.js.</p>
    </div>
    <div className="job-listing">
      <h3 className="job-title">Web Developer</h3>
      <p className="job-description">Join our team as a web developer, focusing on front-end development.</p>
    </div>
  </div>
);

export default JobListings;
