import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../Loader/Loader";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(id);

  if (!book) {
    return (
        <Loader></Loader>
    );
  };

  const fullStars = Math.floor(book.rating);
  const halfStar = book.rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">


        <div className="bg-gray-950 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 place-content-center md:grid-cols-3 gap-6 p-6 md:p-8">
            <div className="md:col-span-1 flex items-start">
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition hover:scale-[1.01]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-auto object-cover aspect-[2/3]"
                  />
                </div>

                

              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                {book.title}
              </h1>

              <p className="mt-2 text-sm lg:text-lg text-gray-300">by <span className="font-medium text-green-300">{book.author}</span></p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-sm lg:text-lg text-gray-100">
                  <span className="font-medium">{book.genre}</span>
                </div>

                <div className="inline-flex items-center gap-1 text-sm">
                  <div className="flex items-center">
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <svg key={`f-${i}`} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    ))}
                    {halfStar && (
                      <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    )}
                    {Array.from({ length: emptyStars }).map((_, i) => (
                      <svg key={`e-${i}`} className="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm lg:text-md text-gray-300 ml-2">{book.rating} / 5</div>
                </div>
              </div>

              <div className="mt-6 text-gray-200 leading-relaxed text-base lg:text-lg">
                {book.summary}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-300">Genre</div>
                  <div className="mt-1 font-medium text-gray-800 dark:text-gray-100">{book.genre}</div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-300">Added by</div>
                  <div className="mt-1 font-medium text-secondary">{book.userEmail}</div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default BookDetails;
