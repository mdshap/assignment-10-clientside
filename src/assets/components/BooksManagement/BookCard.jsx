import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const r = Math.max(0, Math.min(5, Math.round(book?.rating)));



  return (
    <article className="w-full max-w-[310px] xs:max-w-[270px] sm:max-w-[270px] bg-white dark:bg-gray-900 rounded-md shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className="h-100 xs:h-90 sm:h-90 bg-center bg-cover"
        style={{ backgroundImage: `url(${book?.coverImage})` }}
      />

      <div className="p-3">
        <h3 className="text-md font-semibold text-black dark:text-white line-clamp-2 h-12">
          {book?.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{book?.author}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${
                  i < r ? "text-yellow-400" : "text-gray-300"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
              </svg>
            ))}
          </div>

          <div className="text-xs font-medium text-green-700">{book?.genre}</div>
        </div>

        <div className="mt-4 flex gap-3">

          <Link to={`/book-details/${book?._id}`} className="flex-1 inline-flex items-center justify-center rounded-sm px-3 py-1.25 text-sm font-medium bg-secondary text-white hover:bg-indigo-700 transition"  >Details</Link>

          <button
            className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-1.25 text-sm font-medium border border-secondary hover:border-primary text-secondary hover:text-primary  dark:hover:bg-indigo-900/40 transition">
            <a 
            target="_blank"
            href="https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%207)%20Harry%20Potter%20And%20The%20Deathly%20Hallows.pdf">Read</a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
