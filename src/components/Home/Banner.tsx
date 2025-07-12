"use client";

import React from "react";

const Banner = () => {
  return (
    <section className="h-[500px] relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Building modern, fast, and scalable applications with React & Next.js.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition">
          Get Started
        </button>
      </div>

      {/* Optional decorative shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.86,22.14,103.38,38.34,165.7,38.34,69.07,0,125.82-20.86,188.28-33.69C450.7,33.3,514.55,27,576,27c60.74,0,113.29,7.05,172.62,20.45C812.23,61.1,875.4,78.79,938.3,78.79c63.08,0,120.4-17.39,181.7-35.44V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
