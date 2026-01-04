import React from "react";
import { Link } from "react-router";

const BookOfTheWeek = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto my-16 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold  text-white  mb-6">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block  clip-trapezium">Book of The Week</span>
        <div className='w-full bg-secondary h-0.5 -mt-0.5'></div>
      </h3>

      <div className="flex not-sm:flex-col gap-8 bg-white dark:bg-gray-900  rounded-2xl shadow-md p-6 md:p-10">
        <div className="flex items-center justify-center min-w-70 lg:min-w-100">
          <img
            src="https://www.pluggedin.com/wp-content/uploads/2020/01/harry-potter-and-the-deathly-hallows-cover-image-692x1024.jpeg"
            alt="Book Cover"
            className="w-[260px] h-[360px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center max-w-180">
          <h3 className="text-2xl md:text-4xl font-semibold text-secondary not-sm:text-center">
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

          <div className="mt-6 flex gap-3 not-sm:mx-auto">
            <button className="btn border-0 px-5 py-2 rounded-md bg-secondary hover:bg-primary text-white font-medium hover:opacity-90 transition">
              <a
                target="_blank"
                href="https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%207)%20Harry%20Potter%20And%20The%20Deathly%20Hallows.pdf">
                Read Now
              </a>
            </button>

            <button className="px-5 py-2 rounded-md border border-secondary text-secondary font-medium hover:text-primary hover:border-primary transition">
              <Link to="/book-details/6921de5351571c1b3655955f">Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheWeek;
