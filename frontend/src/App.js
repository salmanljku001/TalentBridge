import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Header from './components/Header';
import Footer from './components/Footer';
import Scripts from './components/Scripts';
import Home from './components/Home';
import About from './components/About';
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import './index.css'; // Global styles

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      const loggedUser = JSON.parse(localStorage.getItem('user'));
      setUser(loggedUser);
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <React.Fragment>
        <Head />
        <Header user={user} />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/job-listings" element={<JobListings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
        <Scripts />
      </React.Fragment>
    </Router>
  );
};

export default App;
