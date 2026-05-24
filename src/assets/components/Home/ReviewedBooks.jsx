import React from "react";

const reviews = [
  {
    id: 1,
    user: "Ayesha Rahman",
    bookName: "The Silent Patient",
    genre: "Psychological Thriller",
    rating: 5,
    review:
      "A gripping and intense read with unexpected twists. The storytelling kept me hooked till the last page.",
  },
  {
    id: 2,
    user: "Rahim Hasan",
    bookName: "Atomic Habits",
    genre: "Self-Help",
    rating: 4,
    review:
      "Very practical and motivating. The ideas are simple yet powerful and easy to apply in daily life.",
  },
  {
    id: 3,
    user: "Nusrat Jahan",
    bookName: "Harry Potter and the Prisoner of Azkaban",
    genre: "Fantasy",
    rating: 5,
    review:
      "Magical, emotional, and thrilling. One of the best books in the Harry Potter series.",
  },
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex text-xs sm:text-lg gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewedBooks = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mb-10 sm:mb-20 px-6">
      <h3 className="text-sm sm:text-2xl font-semibold  text-white mb-6">
        <span className="text-white text-center bg-secondary py-1 sm:pt-2 px-2 sm:px-4 inline-block  clip-trapezium">
          Recently Reviewed
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-6">
        {reviews.map(({ id, user, bookName, genre, rating, review }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-3 px-4 sm:p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <p className="text-xs sm:text-md font-semibold text-secondary">{user}</p>
              <RatingStars rating={rating} />
            </div>

            <h4 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
              {bookName}
            </h4>
            <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
              Genre: {genre}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-[9px] sm:text-sm leading-relaxed">
              “{review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewedBooks;
