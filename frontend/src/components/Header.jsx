import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

const Header = ({ user }) => (
  <header className="site-navbar mt-3">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="site-logo col-6">
          <Link to="/">DJobPortal</Link>
        </div>
        <nav className="mx-auto site-navigation">
          <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/job-listings" className="nav-link">Job Listings</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        <div className="right-cta-menu text-right d-flex align-items-center col-6">
          <div className="ml-auto">
            <div className="site-navigation fix">
              <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                {user && user.role === 'employer' ? (
                  <React.Fragment>
                    <Link to="/create-job" className="js-clone-nav pr-3 btn btn-outline-white border-width-2 d-none d-lg-inline-block">
                      <span className="mr-2 icon-add" /> Publish Job
                    </Link>
                    <li className="pr-3 has-children">
                      <Link to="/dashboard">Dashboard</Link>
                      <ul className="dropdown">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                      </ul>
                    </li>
                  </React.Fragment>
                ) : user ? (
                  <React.Fragment>
                    <li className="pr-3 has-children">
                      <Link to="/profile">Profile</Link>
                      <ul className="dropdown">
                        <li><Link to={`/edit-profile/${user.id}`}>Edit Settings</Link></li>
                      </ul>
                    </li>
                    <li className="pr-3 has-children">
                      <Link to="/dashboard">Dashboard</Link>
                      <ul className="dropdown">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                      </ul>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li className="pr-3 has-children">
                      <Link to="/register">Register</Link>
                      <ul className="dropdown">
                        <li><Link to="/employer-registration">Employer</Link></li>
                        <li><Link to="/employee-registration">Employee</Link></li>
                      </ul>
                    </li>
                    <Link to="/login" className="js-clone-nav btn btn-primary border-width-2 d-none d-lg-inline-block ov-fix">
                      <span className="mr-2 icon-lock_outline" /> Log In
                    </Link>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
