"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are passionate about building modern and scalable web
            applications using cutting-edge technologies like React, Next.js,
            and Tailwind CSS. Our mission is to deliver high-quality products
            that are fast, user-friendly, and accessible to all.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are a startup or an established business, we are here to
            help you bring your ideas to life with reliable and scalable
            solutions.
          </p>
        </div>

        {/* Optional Image */}
        <div className="w-full h-64 md:h-80">
          <Image
            src="/images/about1.jpg"
                      alt="About us"
                      width={500}
                      height={500}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
