// import { Link } from "react-router-dom";
// import React from "react";

// const Header = ({ user }) => {
//   return (
//     <header className="bg-lime-400 p-4 h-18">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <Link to="/">TalentBridge</Link>
//         </div>

//         <nav className="hidden xl:flex space-x-6">
//           <Link
//             to="/"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-home"></span> Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-info_outline"></span> About
//           </Link>
//           <Link
//             to="/job-listings"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-briefcase"></span> Job Listings
//           </Link>
//           <Link
//             to="/contact"
//             className="text-white font-medium hover:text-[#008bf8] transition-all"
//           >
//             <span className="mr-2 icon-contact_mail"></span> Contact
//           </Link>
//         </nav>

//         <div className="xl:hidden flex items-center">
//           <button className="text-white focus:outline-none">
//             <span className="icon-menu text-3xl"></span>
//           </button>
//         </div>

//         <div className="hidden xl:flex items-center space-x-4">
//           {user && user.role === "employer" ? (
//             <>
//               <Link
//                 to="/create-job"
//                 className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition"
//               >
//                 <span className="mr-2 icon-add"></span> Publish Job
//               </Link>
//               <div className="relative group">
//                 <Link to="/dashboard" className="text-white font-medium">
//                   Dashboard
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/logout"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           ) : user ? (
//             <>
//               <div className="relative group">
//                 <Link to="/profile" className="text-white font-medium">
//                   Profile
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to={`/edit-profile/${user.id}`}
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Edit Settings
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="relative group">
//                 <Link to="/dashboard" className="text-white font-medium">
//                   Dashboard
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/logout"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="relative group">
//                 <Link to="/register" className="text-white font-medium">
//                   Register
//                 </Link>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
//                   <li>
//                     <Link
//                       to="/Erreg"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Employer
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/Eereg"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Employee
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <Link
//                 to="/login"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition"
//               >
//                 <span className="mr-2 icon-lock_outline"></span> Log In
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-lime-400 p-4 h-18">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">TalentBridge</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-6">
          <Link
            to="/"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            <span className="mr-2 icon-home"></span> Home
          </Link>
          <Link
            to="/about"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            <span className="mr-2 icon-info_outline"></span> About
          </Link>
          <Link
            to="/job-listings"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            <span className="mr-2 icon-briefcase"></span> Job Listings
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-[#008bf8] transition-all"
          >
            <span className="mr-2 icon-contact_mail"></span> Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="icon-menu text-3xl"></span>
          </button>
        </div>

        {/* Desktop User Options */}
        <div className="hidden xl:flex items-center space-x-4">
          {user && user.role === "employer" ? (
            <>
              <Link
                to="/create-job"
                className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition"
              >
                <span className="mr-2 icon-add"></span> Publish Job
              </Link>
              <div className="relative group">
                <Link to="/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : user ? (
            <>
              <div className="relative group">
                <Link to="/profile" className="text-white font-medium">
                  Profile
                </Link>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
                  <li>
                    <Link
                      to={`/edit-profile/${user.id}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Edit Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <Link to="/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="relative group">
                <Link to="/register" className="text-white font-medium">
                  Register
                </Link>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg mt-2 py-2 rounded-lg">
                  <li>
                    <Link
                      to="/Erreg"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Employer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Eereg"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Employee
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 transition text-center"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu (Only visible when open) */}
      {isMobileMenuOpen && (
        <nav className="xl:hidden bg-lime-400 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/job-listings"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Job Listings
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-medium hover:text-[#008bf8] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
