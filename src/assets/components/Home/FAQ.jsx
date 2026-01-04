import React from "react";

const faqs = [
  {
    id: 1,
    question: "How can I add a new book to the platform?",
    answer: (
      <>
        To add a new book, you need to be logged in. Once logged in, go to the
        <strong> Add Book </strong> section from the navigation menu, fill in the
        book details, and submit the form. Your book will then appear in the
        library.
      </>
    ),
  },
  {
    id: 2,
    question: "Can I edit or delete books that I added?",
    answer: (
      <>
        Yes. You can manage books you’ve added from the
        <strong> My Books </strong> section. From there, you can update book
        information or remove books you no longer want to keep listed.
      </>
    ),
  },
  {
    id: 3,
    question: "How do book reviews work?",
    answer: (
      <>
        Readers can leave reviews after reading a book. Reviews help other users
        understand the quality, content, and value of the book. Honest feedback
        is encouraged to maintain a trustworthy community.
      </>
    ),
  },
  {
    id: 4,
    question: "Do I need an account to review books?",
    answer: (
      <>
        Yes. To ensure authenticity and prevent spam, only registered users can
        submit reviews or ratings for books.
      </>
    ),
  },
  {
    id: 5,
    question: "Is this platform free to use?",
    answer: (
      <>
        Absolutely. Browsing, reviewing, and adding books are completely free.
        Our goal is to create an open and friendly space for book lovers to share
        and discover great reads.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold text-white mb-7">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 clip-trapezium hidden sm:inline-block">
          Frequently Asked Questions
        </span>
        <span className="text-white bg-secondary pt-2 pb-1 inline-block px-4 clip-trapezium sm:hidden">
          FAQs
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-10 grid gap-4">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="collapse collapse-arrow bg-pink-50 dark:bg-gray-800 rounded-xl transition hover:shadow-lg"
          >
            <input type="checkbox" />
            <div className="collapse-title text-sm sm:text-lg font-medium text-secondary">
              {question}
            </div>
            <div className="collapse-content text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
