// src/components/Banner/Banner.jsx
import React from "react";
import { Link } from "react-router";

const Banner = ({
  leftBg = "/public/booklibrary.png",
  rightBg = "/public/createbooks.png",
  className = "",
}) => {
  const bgStyle = (url) =>
    url
      ? {
          backgroundImage: `url("${url}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      : {};

  return (
    <section 
      className={`w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 bg-transparent ${className}`}>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-2xl overflow-hidden shadow-lg">
        
        <div
          className="relative flex-1 min-h-[220px] md:min-h-[320px] transform transition duration-700 hover:scale-[1.02]"
          style={bgStyle(leftBg)}>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent transition duration-700 hover:from-black/55" />

          
          <div className="relative z-10 flex flex-col items-start justify-end h-full p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow">
              Dive into great reads
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/90 max-w-sm">
              Explore our curated collection — new arrivals, bestsellers, and
              hidden gems.
            </p>

            <div className="mt-4">
              <Link
                to="/all-books"
                className="inline-block px-5 py-2 rounded-md bg-secondary text-white hover:bg-red-600 text-lg font-medium shadow-sm transition hover:translate-y-[-2px] hover:shadow-md">
                All Books
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative flex-1 min-h-[220px] md:min-h-[320px] transform transition duration-700 hover:scale-[1.02]"
          style={
            rightBg
              ? bgStyle(rightBg)
              : {
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))",
                }
          }>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transition duration-700 hover:from-black/30" />

          <div className="relative z-10 flex flex-col items-end justify-end h-full p-6 md:p-8 text-right">
            <h3 className="text-2xl md:text-3xl font-semibold text-white/95 drop-shadow">
              Share your knowledge
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/85 max-w-sm">
              Have a book to add? Publish it and reach readers across the
              platform.
            </p>

            <div className="mt-4">
              <Link
                to="/create-book"
                className="inline-block px-5 py-2 rounded-md  bg-primary text-white font-medium shadow-sm  transition hover:translate-y-[-2px] hover:bg-green-600">
                Create Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
