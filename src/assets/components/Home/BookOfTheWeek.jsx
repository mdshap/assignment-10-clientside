import React from "react";
import { Link } from "react-router";

const BookOfTheWeek = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Book of the <span className="text-secondary">Week</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-950  rounded-2xl shadow-md p-6 md:p-10">
        <div className="flex items-center justify-center">
          <img
            src="https://www.pluggedin.com/wp-content/uploads/2020/01/harry-potter-and-the-deathly-hallows-cover-image-692x1024.jpeg"
            alt="Book Cover"
            className="w-[260px] h-[360px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-secondary">
            Harry Potter and The Deathly Hallows
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Dive into the final and most thrilling chapter of the Harry Potter
            saga. Follow Harry, Ron, and Hermione as they embark on a dangerous
            journey to destroy the Horcruxes and defeat Voldemort once and for
            all.
            <br />
            <br />
            This week’s featured book promises magic, emotion, and unforgettable
            adventure — perfect for readers who love fantasy and rich
            storytelling.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="btn border-0 px-5 py-2 rounded-md bg-secondary text-white font-medium hover:opacity-90 transition">
              <a
                target="_blank"
                href="https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%207)%20Harry%20Potter%20And%20The%20Deathly%20Hallows.pdf">
                Read Now
              </a>
            </button>

            <button className="px-5 py-2 rounded-md border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition">
              <Link to="/book-details/6921de5351571c1b3655955f">Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheWeek;
