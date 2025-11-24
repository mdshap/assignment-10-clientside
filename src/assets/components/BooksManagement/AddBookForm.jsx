import axios from "axios";
import React, { use, useEffect, useRef } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const AddBookForm = ({ setBookAdded, resetForm }) => {
  const { user } = use(AuthContext);

  const formRef = useRef();

  useEffect(() => {
    if (resetForm) {
      formRef.current.reset();
    }
    setBookAdded(false);
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookInfo = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: parseFloat(e.target.rating.value),
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };

    axios.post("http://localhost:3000/books", bookInfo);
    setBookAdded(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-transparent shadow-lg border-3 rounded-xl p-8 my-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Add a <span className="text-secondary">New Book</span>
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  text-primary mb-1">
            Book Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter book title"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-primary mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            defaultValue={user?.displayName}
            required
            placeholder="Author name"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        {/* Genre */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-primary mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            required
            placeholder="e.g. Mystery, Fantasy, Non-Fiction"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        {/* Rating */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-primary mb-1">
            Rating (out of 5)
          </label>
          <input
            type="number"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            required
            placeholder="4.5"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        {/* Cover Image URL */}
        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-medium text-primary mb-1">
            Cover Image URL
          </label>
          <input
            type="url"
            name="coverImage"
            required
            placeholder="https://example.com/cover.jpg"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        {/* Summary */}
        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-medium text-primary mb-1">
            Summary
          </label>
          <textarea
            name="summary"
            required
            placeholder="Write a short description about the book..."
            className="textarea textarea-bordered w-full h-32 bg-transparent"></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium  text-primary mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            required
            placeholder="name@example.com"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium  text-primary mb-1">
            Your Email
          </label>
          <input
            disabled
            type="email"
            name="userEmail"
            defaultValue={user?.email}
            required
            placeholder="name@example.com"
            className="input input-bordered w-full bg-transparent"
          />
        </div>


        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="btn bg-primary text-white px-8 py-8 text-lg w-full  hover:opacity-90 transition">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
