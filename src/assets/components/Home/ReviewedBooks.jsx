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
  {
    id: 4,
    user: "Imran Ahmed",
    bookName: "Rich Dad Poor Dad",
    genre: "Personal Finance",
    rating: 4,
    review:
      "A great perspective on money and mindset. Helpful for understanding financial independence.",
  },
];

// ⭐ Star Component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1">
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
    <div className="w-full max-w-[1400px] mx-auto mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold text-white mb-7">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block clip-trapezium">
          Recently Reviewed
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(({ id, user, bookName, genre, rating, review }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* User & Rating */}
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-secondary">{user}</p>
              <RatingStars rating={rating} />
            </div>

            {/* Book Info */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {bookName}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Genre: {genre}
            </p>

            {/* Review */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              “{review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewedBooks;
