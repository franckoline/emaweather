import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "../assets/weather-illustration.png";

<img src={heroImg} alt="WeatherApp" />;

export default function Project() {
    return (
    <div className="flex flex-col">
      {/* ---------- SECTION 1 ---------- */}
      <section className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh] bg-white p-8">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/weather-illustration.png"
            alt="Weather App Illustration"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>

        {/* Right: Text + CTA */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl font-bold text-sky-700 mb-4">
            Project Documentation
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            WeatherApp is an open-source platform built with React, FastAPI, and Tailwind CSS.  
            It allows users to get real-time weather data from the OpenWeather API, beautifully displayed in a modern UI.
          </p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg w-fit mx-auto md:mx-0">
            View API Docs
          </button>
        </div>
      </section>

      {/* ---------- SECTION 2 ---------- */}
      <section className="bg-sky-50 py-16 px-8">
        <h2 className="text-2xl font-bold text-center text-sky-700 mb-12">
          Core Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "/images/api.svg",
              title: "FastAPI Backend",
              desc: "Robust REST API with modern Python backend for real-time data handling.",
            },
            {
              img: "/images/react.svg",
              title: "React Frontend",
              desc: "Dynamic UI powered by Vite and React for lightning-fast rendering.",
            },
            {
              img: "/images/responsive.svg",
              title: "Responsive Design",
              desc: "Optimized for mobile, tablet, and desktop with seamless layouts.",
            },
            {
              img: "/images/openweather.svg",
              title: "OpenWeather Integration",
              desc: "Real-time weather updates powered by the OpenWeather API.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-sky-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- SECTION 3 ---------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/images/weather-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Build With Us</h2>
          <p className="mb-6 text-gray-200">
            Join the WeatherApp community to contribute, improve documentation,
            and make weather tracking simpler for everyone.
          </p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg">
            Contribute on GitHub
          </button>
        </div>
      </section>
    </div>
  );
}
