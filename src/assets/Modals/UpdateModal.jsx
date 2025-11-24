import React, { use } from "react";
import { AuthContext } from "../components/Contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateModal = ({ book, updateModalOpen, setUpdateModalOpen }) => {
  const handleSubmit = (e) => {
    
    e.preventDefault();

    const updatedBookInfo = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: parseFloat(e.target.rating.value),
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };

    axios
      .patch(`http://localhost:3000/my-books/${book._id}`, updatedBookInfo)
      .then((res) => {
        setUpdateModalOpen(false);
        toast.success('Successfully Updated')
        console.log(res.data)
    });
  };

  return (
    <dialog open={updateModalOpen} className="modal">
      <div className="modal-box">
        <div className="w-full mx-auto bg-transparent shadow-lg border-3 rounded-xl p-8 my-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Update Your <span className="text-secondary"> Book</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="flex flex-col">
              <label className="text-sm font-medium  text-primary mb-1">
                Book Title
              </label>
              <input
                defaultValue={book?.title}
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
                defaultValue={book?.author}
                required
                placeholder="Author name"
                className="input input-bordered w-full bg-transparent"
              />
            </div>

            {/* Genre */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-primary mb-1">
                Genre
              </label>
              <input
                defaultValue={book?.genre}
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
                defaultValue={book.rating}
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
                defaultValue={book?.coverImage}
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
                defaultValue={book?.summary}
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
                defaultValue={book?.userName}
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
                defaultValue={book.userEmail}
                type="email"
                name="userEmail"
                required
                placeholder="name@example.com"
                className="input input-bordered w-full bg-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex flex-col justify-center gap-2 mt-4">
              <button
                type="submit"
                className="btn bg-green-600 text-white px-8 py-6 text-lg w-full  hover:opacity-90 transition">
                Update Book
              </button>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={() => setUpdateModalOpen(false)}
                  className="btn w-full text-red-600 border-red-500 bg-transparent border-2 py-6">
                  Cancel
                </button>
              </form>
            </div>
          </form>
        </div>
        <div className="modal-action"></div>
      </div>
    </dialog>
  );
};

export default UpdateModal;
