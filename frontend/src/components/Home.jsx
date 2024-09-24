import React from "react";
import Footer from "./Footer";
import StatsSection from "./StatsSection";
const Home = () => (
  <div>
    <div className="text-center my-5">
      <h1 className="text-3xl font-bold mt-5">Welcome to TalentBridge</h1>
      <p className="text-xl mt-2">Your gateway to finding the perfect job.</p>
    </div>
    <StatsSection />
  </div>
);

export default Home;
