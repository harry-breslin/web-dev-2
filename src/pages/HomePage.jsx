import React from "react";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div className="text-gray-800 text-center p-12 mt-16">
      <h1 className="text-black text-8xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl mb-8">
        Discover my projects, skills, and professional journey.
      </p>
      <div className="bg-gray-100 p-12 m-12 rounded-2xl border-2 hover:shadow-lg transition-all">
        <AboutPage />
      </div>
      <button className="bg-white text-black border-black border-2 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
        Get in Touch
      </button>
    </div>
  );
};

export default HomePage;
