import React from "react";

const BookOfTheWeek = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Book of the <span className="text-secondary">Week</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10">
        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src="https://www.pluggedin.com/wp-content/uploads/2020/01/harry-potter-and-the-deathly-hallows-cover-image-692x1024.jpeg"
            alt="Book Cover"
            className="w-[260px] h-[360px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
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
            <button className="px-5 py-2 rounded-md bg-secondary text-white font-medium hover:opacity-90 transition">
              Read Now
            </button>

            <button className="px-5 py-2 rounded-md border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition">
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheWeek;
