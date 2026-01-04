import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          About Us
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          <span className="font-semibold text-secondary">Books Haven</span> is a
          community-driven platform built for readers, reviewers, and book
          enthusiasts. Our goal is to create a simple and engaging space where
          users can explore books, share honest reviews, and manage their
          personal reading journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We aim to make book discovery easier and more meaningful by
              combining user-generated reviews, ratings, and curated content in
              one platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-3">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Browse and search books easily</li>
              <li>Read and submit genuine reviews</li>
              <li>Manage your personal book collection</li>
              <li>Community-focused reading experience</li>
            </ul>
          </div>

        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-pink-500 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Books Haven envisions a future where readers can make informed
            choices through shared knowledge, honest feedback, and a welcoming
            reading community.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
